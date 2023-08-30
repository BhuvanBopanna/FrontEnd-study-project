import React from 'react'
import { CartState } from '../context/Context'
import Filters from './Filter';
import "./Style.css";
const Home = () => {
  const {state :{products}} = CartState();
  return (
   <div className='Home'>
    <Filters/>
    <div className='productConatiner'>
      {products.map = ((prod) =>{
       return <SingleProduct prod ={prod} key={prod.id}/>
      })}
    </div>
   </div>
  

  
  )
}

export default Home