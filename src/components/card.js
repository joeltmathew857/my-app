import React from 'react';


function Card(props) {
  return (
    <div className='card'>
      <img className='card-img' src={props.imgSrc} alt='Card' />
      <h3>Name: {props.name}</h3>
      <p>Phone: {props.phone}</p>
      <p>Email: {props.email}</p>
      
    </div>
  );
}

export default Card;
