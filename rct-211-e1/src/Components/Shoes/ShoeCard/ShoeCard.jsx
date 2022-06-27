import React from "react";
// import "./shoeCard.css"
const ShoeCard = ({id,name, image,cart_quantity}) => {
  
  const shoesId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoesId}`} style={{border:".5px solid", borderRadius:"1rem"}}>
      
      <img data-cy="shoe-card-image" alt="shoe" src={image} style={{width:"90%",height:"300px", margin:"1rem"}}/>
      <div>
        <div style={{margin:"1rem"}} data-cy="shoe-name">shoes-name:{name}</div>
        <div style={{display:"flex", margin:"1rem"}}>
          In Cart: {cart_quantity}
          <div data-cy="shoe-count">0</div>
          <button  style={{margin:".5rem"}}data-cy="increment-shoe-count-button">+</button>
          <button  style={{margin:".5rem"}}data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
      </div>
     
    
  );
};

export default ShoeCard;
