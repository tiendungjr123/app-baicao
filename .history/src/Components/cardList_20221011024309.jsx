import React, { useState } from 'react';
import Card from './card';
const CardList = ({listCard}) => {
   const [card, setCard] = useState([]);
   if(listCard!== null){
      setCard(listCard)
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
