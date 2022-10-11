import React, { useState } from 'react';
import Card from './card';
const CardList = ({cards, checkCard}) => {
   
   return (
      <>
         <div className="card-top">
            <Card listCard={cards} checkCard={checkCard} />
         </div>
         <div className="card-left">
            <Card listCard={cards} checkCard={checkCard} />
         </div>
         <div className="card-right">
            <Card listCard={cards} checkCard={checkCard} />
         </div>
         <div className="card-bottom">
            <Card listCard={cards} checkCard={checkCard} />
         </div>
      </>
   );
}

export default CardList;
