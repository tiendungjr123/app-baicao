import React, { useState } from 'react';
import Card from './card';
const CardList = ({listCard}) => {
   if(listCard!== null){
      const card = listCard;
   }
   console(card);
   return (
      <>
         <div className="card-top">
            <Card listCard={listCard}/>
         </div>
         <div className="card-left">
            <Card />
         </div>
         <div className="card-right">
            <Card />
         </div>
         <div className="card-bottom">
            <Card />
         </div>
      </>
   );
}

export default CardList;
