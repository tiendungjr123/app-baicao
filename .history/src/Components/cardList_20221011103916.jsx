import React, { useState } from 'react';
import Card from './card';
const CardList = ({listCard}) => {
   return (
      <>
         <div className="card-top">
            <Card listCard={listCard} />
         </div>
         {/* <div className="card-left">
            <Card listCard={listCard} />
         </div>
         <div className="card-right">
            <Card listCard={listCard} />
         </div>
         <div className="card-bottom">
            <Card listCard={listCard} />
         </div> */}
      </>
   );
}

export default CardList;
