import React from "react";

function Card(props) {
  return (
    <div className="card">
   <img className="card-img" src={props.imgSrc} alt="Card" style={{ width: '400px', height: '400px' }} />
      <h3>{props.name}</h3>
      <p>price: {props.price}</p>
    </div>
  );
}

export default Card;
