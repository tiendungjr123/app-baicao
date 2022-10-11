import React, { useState } from 'react';
import Card from './card';
const CardList = ({listCard, checkCard}) => {
   
   return (
      <>
         <div className="card-top">
            <Card listCard={listCard} checkCard={checkCard} />
         </div>
         <div className="card-left">
            <Card listCard={listCard} checkCard={checkCard} />
         </div>
         <div className="card-right">
            <Card listCard={listCard} checkCard={checkCard} />
         </div>
         <div className="card-bottom">
            <Card listCard={listCard} checkCard={checkCard} />
         </div>
      </>
   );
}

export default CardList;
