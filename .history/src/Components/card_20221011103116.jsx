import React, { useState } from 'react';
import img_6H from '../assets/images/6H.png';
import img_7C from '../assets/images/7C.png';
import img_QH from '../assets/images/QH.png';
const Card = ({listCard}) => {
   const filterCard = listCard.slice(0,3);
   {filterCard.map((card) =>{
      console.log(card.image);
   })}
   return (
      <div className='card'>
         <div className='card-img'>
            <img  src={img_6H} alt="6h" />
            <img  className='img-center' src={img_7C} alt="7c" />
            <img  src={img_QH} alt="qh" />
         </div>
         <p className='point'>Point: 15000</p>
         <p className='user'>Dung</p>
         <p className='point'>Point of 3 cards: 23</p>
      </div>
   );
}

export default Card;
