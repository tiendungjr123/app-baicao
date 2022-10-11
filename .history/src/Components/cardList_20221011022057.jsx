import React from 'react';
import Card from './card';
const CardList = ({listCard}) => {
   console.log(listCard)
   return (
      <>
         <div className="card-top">
            <Card />
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
