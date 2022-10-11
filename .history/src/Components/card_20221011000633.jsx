import React from 'react';
import card_img from '../assets/images/6H.png'
const Card = () => {
   return (
      <div className='card'>
         <div className='card-img'>
            <img src={card_img} alt="6h" />
            <img src="../assets/images/7C.png" alt="7c" />
            <img src="../assets/images/QH.png" alt="qh" />
         </div>
         <p className='point'>Point: 15000</p>
         <p className='user'>Dung</p>
         <p className='point-card'>Point of 3 cards: 22</p>
      </div>
   );
}

export default Card;
