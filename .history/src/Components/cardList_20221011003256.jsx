import React from 'react';
import Card from './card';
const CardList = () => {
   return (
      <>
         <div class="card-top">
            <Card/>
         </div>
         <aside class="aside aside-1">card2</aside>
         <aside class="aside aside-2">card3</aside>
         <div class="footer">
            <Card/>   
         </div>   
      </>
   );
}

export default CardList;
