import React from 'react'
import { Container, Dropdown, FormControl, Navbar, Nav, Badge, Button} from "react-bootstrap";
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from "react-router-dom";
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
const Header = () => {
  
  const{state:{cart},dispatch} = CartState();
  return (
    <Navbar bg='dark' variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
              <Link to ="/">Shopping cart</Link>
              </Navbar.Brand>
              <Navbar.Text className='search'>
                <FormControl   style = {{width:500}}
                    placeholder = "search a product"
                    class = 'm-auto'/>
                  
                    <Nav>
                        <Dropdown alignRight>
                        
                         <Dropdown.Toggle variant='success'>
                         <FaShoppingCart color="white" fontSize ="25px"/>
                         <Badge>{cart.length}</Badge>
                         </Dropdown.Toggle>

                         <Dropdown.Menu style ={{minWidth:370}}>

                          {cart.length >0 ? (
                            <>
                            {cart.map((prod)=>(
   
                            <img
                            src={prod.image}
                            className='cartItemImage'
                            alt={prod.name}
                            />
                            <div className ="cartItemDetail">
                              <span>{prod.name}</span>
                              <span>{prod.price.split(".")[0]}</span>

                            </div>
                            <AiFillDelete
                            fontSize="20px"
                            style={{cursor:"pointer"}}
                            onClick={()=>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload:prod,
                            })
                            }
                            />

                            ))}

                            <Link to ="/Cart">
                              <Button style={{width: "95%", margin: "0 10px"}}>
                                Go to Cart
                              </Button>
                            </Link>
   
                            </>
                          ):(<span style ={{padding
                          :10}}> cart is empty</span>)}
                         
                          
                         </Dropdown.Menu>
                        


                       
 
                      </Dropdown>
                      
                    </Nav>
              </Navbar.Text>
        </Container>
    </Navbar>
  )
}


export default Header