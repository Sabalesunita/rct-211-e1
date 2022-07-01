import React from "react";
import "./shoeCard.css";
const ShoeCard = ({id,name, image,cart_quantity}) => {
  
  const shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} style={{border:".5px solid", borderRadius:"1rem"}}>
      
      <img data-cy="shoe-card-image" alt="shoe" src={image} style={{width:"90%",height:"200px", margin:"1rem"}}/>
      <div>
        <div style={{margin:"1rem"}} data-cy="shoe-name">{name}</div>
        <div style={{display:"flex", margin:"1rem"}}>
          <div data-cy="shoe-count">In Cart : {cart_quantity}</div>
          <button  style={{margin:".5rem"}}data-cy="increment-shoe-count-button">+</button>
          <button  style={{margin:".5rem"}}data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
      </div>
     
  );
};

export default ShoeCard;
