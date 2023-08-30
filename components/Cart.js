import React from 'react'
import { CartState } from '../context/Context'
import { Button, Col, FormControl, ListGroup, Image, Row } from 'react-bootstrap';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';

const Cart = () => {

  const{state:{cart},dispatch } =CartState();

  const [total, setTotal] = useState();

  useEffect(() => {
    
  setTotal(cart.reduce((acc,curr)=> acc + Number(curr.prod.price)*curr.qty,0));
  }, [cart])
  
  return (
    <div className='home'>
      <div className='productContainer'>
        <ListGroup>
          {
            cart.map((prod) =>(
              <ListGroup.Item key={prod.id}>
                <Row>
                  <Col md={2}>
                    <Image src={prod.image} alt={prod.image} fluid rounded/>
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}><span>{prod.price}</span></Col>
                  <Col md={2}>
                    <Rating rating ={prod.ratings}/>
                    </Col>
                    <Col md={2}>
                    <FormControl as ="select" value={prod.qty}
                    as = "Select"
                    value={prod.qty}
                    onChange={(e)=>
                    dispatch({
                      type:"CHANGE_CART_QTY",
                      payload:{
                        id:payload.id,
                        qty:e.target.value,
                      },
                    })
                    }
                    >
                     
                       
                     
                     
                      {
                        [...Array(prod.inStock).keys()].map((x)=>(
                          <option key={x+1}>{x+1}</option>
                        ))
                      }
                    </FormControl>
                    </Col>
                    <Col md={2}>
                      <Button type='button' variant='ligth'
                      onClick={()=>
                        dispatch({
                          type:"REMOVE_FROM_CART",
                          payload:prod,
                        })
                      }>
                        <AiFillDelete fontSize="20px"/>
                      </Button>
                    </Col>
                </Row>
              </ListGroup.Item>
            ))
          }
        </ListGroup>
      </div>
      <div className='filters summary'>
        <span>SubTotal ({cart.length}) Items</span>
        <span style={{fontWeight: 700, fontSize:20}}>total: {total}</span>
        <Button type="button" disabled={cart.length===0}>
          Proceed to CheckOut
        </Button>
      </div>
    </div>
  )
}

export default Cart