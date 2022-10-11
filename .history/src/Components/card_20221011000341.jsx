import React from 'react';

const Card = () => {
   return (
      <div className='card'>
         <div className='card-img'>
            <img src="../assets/images/6H.png" alt="" />
            <img src="../assets/images/7C.png" alt="" />
            <img src="../assets/images/QH.png" alt="" />
         </div>
         <p className='point'>Point: 15000</p>
         <p className='user'>Dung</p>
         <p className='point-card'>Point of 3 cards: 22</p>
      </div>
   );
}

export default Card;
