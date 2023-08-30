import React from 'react'
import {AiFillStar, AiOutLineStar} from "react-icons/ai";

const Rating = (rate, onCick, style) => {
  return (
   <>
   {[...Array(5)].map((_, i) => (
    <span key={i} onClick={()=>onClick()} style={style}>
        {rating>i?(
            <AiFillStar fontSize="15px"/>
        ) : (<AiOutLineStar fontSize="15px"/>)}
    </span>
   ))}
   </>
   
  )
}

export default Rating