import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import Rating from './Rating'

const Filter  = () => {

  const[rate, setRate] = useState(3);
  return (
    <div className='filters'>
        <span className='title'>Filter products</span>
        <span>
        <Form.check   
            inline 
            label ="ascending"
            name ="group 1"
            type = "radio"
            id ={`inline-1`}
            />
        </span>
        <span>
        <Form.check
        inline 
        label = "descending"
        name = "group 2"
        type = "radio"
        id={`inline-2`}
        />
    
        </span>
        <span>
        <Form.check
        inline 
        label = "out of stock"
        name = "group 1"
        type = "checkbox"
        id = {`inline-3`}
        />


        </span>
        <span>
        <Form.check
        inline
        label ="Fast delivery only"
        name = "group 1"
        type ="checkbox"
        id= {`inline -4`}
        />


        </span>
        <span>
            <label style={{paddingRight:10}}>Rating:</label>
            <Rating rating = {rate} onClick={()=>setRate(i+1)} style={{cursor:"pointer"}}/>
        </span>
        <Button variant ="light">clear filters</Button>
    </div>
  )
}

export default Filter 