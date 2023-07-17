import React from 'react';
import Card from './card.js'

const CardComponents = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card
        imgSrc="https://images.unsplash.com/photo-1683009680116-b5c04463551d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
        name="John Doe"
        phone="1234567890"
        email="johndoe@example.com"
      />
      <Card 
        imgSrc="https://images.unsplash.com/photo-1688913826777-a2a007ffb0dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2232&q=80"
        name="Jane Smith"
        phone="9876543210"
        email="janesmith@example.com"
      />
      <Card
        imgSrc="https://images.unsplash.com/photo-1688430566704-992681868d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
        name="Alice Johnson"
        phone="5555555555"
        email="alicejohnson@example.com"
      />
      
    </div>
  );
};

export default CardComponents;
