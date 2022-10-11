import './App.css';
import CardList from './Components/cardList';
import Table from './Components/table';
import React, { useEffect, useState } from 'react';
import { getDrawCard, getShuffleCard } from './apis/index';
import img_6H from './assets/images/6H.png';
import img_7C from './assets/images/7C.png';
import img_QH from './assets/images/QH.png';
import baiup from './assets/images/baian.PNG';
function App() {

   const [deck_id, setDect_id] = useState('');
   const [listCard, setListCard] = useState([]);
   const [loading, setLoading] = useState(false);
   const [remaining, setRemaining] = useState(52);
   const [checkCard, setCheckCard] = useState(false);
   const [point1, setPoint1] = useState(5000);
   const [point2, setPoint2] = useState(5000);
   const [pointCard1, setPointCard1] = useState(0);
   const [pointCard2, setPointCard2] = useState(0);


   useEffect(() => {
      getShuffleCard().then((res) => {
         setDect_id(res.data.deck_id);
      });
   }, []);

   const handleShuffle = () => {
      getShuffleCard().then((res) => {
         setDect_id(res.data.deck_id);
      });
      setRemaining(52);
      setCheckCard(false);
   }
   const handleDraw = () => {
      setLoading(true);
      if (remaining < 16) {
         alert('Không đủ bài để chia')
         setLoading(false);
         getShuffleCard().then((res) => {
            setDect_id(res.data.deck_id);
         });
         setListCard([]);
         setPointCard1(0);
         setPointCard2(0);
         setRemaining(52);
      }

   }

   useEffect(() => {
      if (deck_id && loading) {
         getDrawCard(deck_id).then((res) => {
            setListCard(res.data.cards);
            setRemaining(res.data.remaining);
            setLoading(false);
            setCheckCard(false);
         })
      }
   }, [deck_id, loading]);

   let user1 = listCard.slice(0,3);
   let user2 = listCard.slice(3,6);
   let user3 = listCard.slice(0,3);
   let user4 = listCard.slice(0,3);

   function layso(number){
      if(number<10)
         return number;
      else{
         number=number%10
         return number
      }
   }
   const handleReveal = () => {
      let total1 = 0;
      let total2= 0;
      let total3= 0;
      let total4= 0;
      let pointUser1 = 5000;
      let pointUser2= 5000;
      user1.map((card) => {
         if(card.value ==='ACE')
            card.value ='1';
         if(card.value === 'JACK' || card.value === 'KING' || card.value === 'QUEEN')
            card.value = '10';
         total1 = total1+Number(card.value);
         setPointCard1(total1)
      });
      user2.map((card) => {
         if(card.value ==='ACE')
            card.value ='1';
         if(card.value === 'JACK' || card.value === 'KING' || card.value === 'QUEEN')
            card.value = '10';
         total2 = total2+Number(card.value);
         setPointCard2(total2)
      })

      if(layso(total1)>layso(total2)){
         pointUser1 += 900;
         pointUser2 -= 900;
         setPoint1(pointUser1);
         setPoint2(pointUser2);
      }
      else if(layso(total1)===layso(total2)){
         pointUser1 += 0;
         pointUser2 -= 0;
         setPoint1(pointUser1);
         setPoint2(pointUser2);
      }
      else{
         pointUser1 -= 900;
         pointUser2 += 900;
         setPoint1(pointUser1);
         setPoint2(pointUser2);
      }

      setCheckCard(true)
   }

   return (
      <div className="app">
         <div className='table'>
            <button className='btn-deck-card'>Deck card {remaining}</button>
            <div className='btn-action'>
               <button onClick={handleShuffle} className='btn btn-shuffle'>Shuffle</button>
               <button onClick={handleDraw} className='btn btn-draw'>Draw</button>
               <button onClick={handleReveal} className='btn btn-reveal'>Reveal</button>
               <button className='btn btn-reset'>Reset</button>
            </div>
         </div>
         <div className="card-top">
               <div className='card'>
                  {checkCard ? (
                     <div className='card-img'>
                        {user1.map((card) =>(
                           <> 
                              <img  src={card.image} alt="img" />
                           </>
                        ))}
                     </div>) : (
                     <div className='card-img'>
                        <img src={baiup} alt="6h" />
                        <img src={baiup} alt="7c" />
                        <img src={baiup} alt="qh" />
                     </div>)
                  }
                  <p className='point'>Point: {point1}</p>
                  <p className='user'>User1</p>
                  {checkCard ? (<p className='point'>Point of 3 cards: {pointCard1}</p>) : (<p className='point'>Point of 3 cards: 0</p>)}
               </div>
         </div>
         <div className="card-right">
               <div className='card'>
                  {checkCard ? (
                     <div className='card-img'>
                        {user2.map((card) =>(
                           <> 
                              <img  src={card.image} alt="img" />
                           </>
                        ))}
                     </div>) : (
                     <div className='card-img'>
                        <img src={baiup} alt="6h" />
                        <img src={baiup} alt="7c" />
                        <img src={baiup} alt="qh" />
                     </div>)
                  }
                  <p className='point'>Point: {point2}</p>
                  <p className='user'>User2</p>
                  {checkCard ? (<p className='point'>Point of 3 cards: {pointCard2}</p>) : (<p className='point'>Point of 3 cards: 0</p>)}
               </div>
         </div>
         <div className="card-left">
               <div className='card'>
                  {checkCard ? (
                     <div className='card-img'>
                        {user2.map((card) =>(
                           <> 
                              <img  src={card.image} alt="img" />
                           </>
                        ))}
                     </div>) : (
                     <div className='card-img'>
                        <img src={baiup} alt="6h" />
                        <img src={baiup} alt="7c" />
                        <img src={baiup} alt="qh" />
                     </div>)
                  }
                  <p className='point'>Point: {point2}</p>
                  <p className='user'>User2</p>
                  {checkCard ? (<p className='point'>Point of 3 cards: {pointCard2}</p>) : (<p className='point'>Point of 3 cards: 0</p>)}
               </div>
         </div>
      </div>
   );
}

export default App;
