import React from 'react';
import Card from './card';
const CardList = () => {
   return (
      <>
         <div class="card-top">
            <Card />
         </div>
         <div class="aside aside-1">
            <Card />
         </div>
         <div class="aside aside-2">
            <Card />
         </div>
         <div class="card-bottom">
            <Card />
         </div>
      </>
   );
}

export default CardList;
