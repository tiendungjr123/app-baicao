import React from 'react';
import Card from './card';
const CardList = () => {
   return (
      <>
         <div class="card-top">
            <Card />
         </div>
         <div class="card-left">
            <Card />
         </div>
         <div class="card-right">
            <Card />
         </div>
         <div class="card-bottom">
            <Card />
         </div>
      </>
   );
}

export default CardList;
