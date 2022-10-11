import React from 'react';

const Card = () => {
   return (
      <div className='card'>
         <div className='card-img'>
            <img src="assets/images/6H.png" alt="6h" />
            <img src="assets/images/7C.png" alt="7c" />
            <img src="assets/images/QH.png" alt="qh" />
         </div>
         <p className='point'>Point: 15000</p>
         <p className='user'>Dung</p>
         <p className='point-card'>Point of 3 cards: 22</p>
      </div>
   );
}

export default Card;
