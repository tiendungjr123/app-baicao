import React, { useState } from 'react';
import img_6H from '../assets/images/6H.png';
import img_7C from '../assets/images/7C.png';
import img_QH from '../assets/images/QH.png';
import img_QH from '../assets/images/baian.PNG';
const Card = ({ listCard,checkCard }) => {
   
   return (

      <div className='card'>
               {checkCard ? (
                  <div className='card-img'>
                     <img src={img_6H} alt="6h" />
                     <img className='img-center' src={img_7C} alt="7c" />
                     <img src={img_QH} alt="qh" />
                  </div>) : (
                  <div className='card-img'>
                     <img src={baiup} alt="6h" />
                     <img className='img-center' src={baiup} alt="7c" />
                     <img src={baiup} alt="qh" />
                  </div>)
               }
               <p className='point'>Point: 15000</p>
               <p className='user'>Dung</p>
               {checkCard?(<p className='point'>Point of 3 cards: 23</p>):(<p className='point'>Point of 3 cards: 0</p>)}
            </div>
   );
}

export default Card;
