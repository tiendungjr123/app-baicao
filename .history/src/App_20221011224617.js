import './App.css';
import CardList from './Components/cardList';
import Table from './Components/table';
import React, { useEffect, useState } from 'react';
import { getDrawCard, getShuffleCard } from './apis/index';
import baiup from './assets/images/baian.PNG';
import {NotificationContainer, NotificationManager} from 'react-notifications';
function App() {

   const [deck_id, setDect_id] = useState('');
   const [listCard, setListCard] = useState([]);
   const [loading, setLoading] = useState(false);
   const [remaining, setRemaining] = useState(52);
   const [checkCard, setCheckCard] = useState(false);
   const [point1, setPoint1] = useState(5000);
   const [point2, setPoint2] = useState(5000);
   const [point3, setPoint3] = useState(5000);
   const [point4, setPoint4] = useState(5000);
   const [pointCard1, setPointCard1] = useState(0);
   const [pointCard2, setPointCard2] = useState(0);
   const [pointCard3, setPointCard3] = useState(0);
   const [pointCard4, setPointCard4] = useState(0);

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

   let user1 = listCard.slice(0, 3);
   let user2 = listCard.slice(3, 6);
   let user3 = listCard.slice(6, 9);
   let user4 = listCard.slice(9, 12);

   const lastNumber = (number) =>{
      if (number < 10)
         return number;
      else {
         number = number % 10
         return number;
      }
   }

   const findMaxPointCard = (array) =>{
      let max = array[0];
      for (let i = 0; i < array.length; ++i) {
         if (max < array[i]) {
            max = array[i];
         }
      }
      return max;
   }

   const totalPointCard = (user,total) =>{
      user.map((card) => {
         if (card.value === 'ACE')
            card.value = '1';
         if (card.value === 'JACK' || card.value === 'KING' || card.value === 'QUEEN')
            card.value = '10';
         total = total + Number(card.value);
      });
      return total;
   }

  
   const handleReveal = () => {
      let total1 = 0;
      let total2 = 0;
      let total3 = 0;
      let total4 = 0;
      // user1
      setPointCard1(totalPointCard(user1,total1));
      total1 = totalPointCard(user1,total1);
      // user2
      setPointCard2(totalPointCard(user2,total2));
      total2 = totalPointCard(user2,total2);
      //user3
      setPointCard3(totalPointCard(user3,total3));
      total3 = totalPointCard(user3,total3);
      //user3
      setPointCard4(totalPointCard(user4,total4));
      total4 = totalPointCard(user4,total4);
      
      let num = [lastNumber(total1), lastNumber(total2), lastNumber(total3), lastNumber(total4)];

      if(lastNumber(total1)===lastNumber(total2) && lastNumber(total2)===lastNumber(total3) && lastNumber(total3)===lastNumber(total4)){
         setPoint1(point1);
         setPoint2(point2);
         setPoint3(point3);
         setPoint4(point4);
      }
      else if(lastNumber(total1)===lastNumber(total2) && lastNumber(total2) === lastNumber(total3) &&lastNumber(total3)=== findMaxPointCard(num)){
         setPoint1(point1+900/3);
         setPoint2(point2+900/3);
         setPoint3(point3+900/3);
         setPoint4(point4-900);
      }
      else if(lastNumber(total1)===lastNumber(total3) &&lastNumber(total3) === lastNumber(total4) &&lastNumber(total4) === findMaxPointCard(num)){
         setPoint1(point1+900/3);
         setPoint2(point2-900);
         setPoint3(point3+900/3);
         setPoint4(point4+900/3);
      }
      else if(lastNumber(total2)===lastNumber(total3) &&lastNumber(total3) === lastNumber(total4) &&lastNumber(total4) === findMaxPointCard(num)){
         setPoint1(point1-900);
         setPoint2(point2+900/3);
         setPoint3(point3+900/3);
         setPoint4(point4+900/3);
      }
      else if(lastNumber(total1)===lastNumber(total2) && lastNumber(total2) === findMaxPointCard(num)){
         setPoint1(point1+900);
         setPoint2(point2+900);
         setPoint3(point3-900);
         setPoint4(point4-900);
      }
      else if(lastNumber(total1)===lastNumber(total3) &&lastNumber(total3) === findMaxPointCard(num)){
         setPoint1(point1+900);
         setPoint2(point2-900);
         setPoint3(point3+900);
         setPoint4(point4-900);
      }
      else if(lastNumber(total1)===lastNumber(total4) && lastNumber(total4) === findMaxPointCard(num)){
         setPoint1(point1+900);
         setPoint2(point2-900);
         setPoint3(point3-900);
         setPoint4(point4+900);
      }
      else if(lastNumber(total2)===lastNumber(total3) &&lastNumber(total3) === findMaxPointCard(num)){
         setPoint1(point1-900);
         setPoint2(point2+900);
         setPoint3(point3+900);
         setPoint4(point4-900);
      }
      else if(lastNumber(total2)===lastNumber(total4) && lastNumber(total4) === findMaxPointCard(num)){
         setPoint1(point1-900);
         setPoint2(point2+900);
         setPoint3(point3-900);
         setPoint4(point4+900);
      }
      else if(lastNumber(total3)===lastNumber(total4) && lastNumber(total4) === findMaxPointCard(num)){
         setPoint1(point1-900);
         setPoint2(point2-900);
         setPoint3(point3+900);
         setPoint4(point4+900);
      }
      else if (lastNumber(total1) === findMaxPointCard(num)) {
         setPoint1(point1 + 2700);
         setPoint2(point2 - 900);
         setPoint3(point3 - 900);
         setPoint4(point4 - 900);
         NotificationManager.success('User1 Win', 'Point+2700');
      }
      else if (lastNumber(total2) === findMaxPointCard(num)) {
         setPoint1(point1 - 900);
         setPoint2(point2 + 2700);
         setPoint3(point3 - 900);
         setPoint4(point4 - 900);
         NotificationManager.success('User2 Win', 'Point+2700')
      }
      else if (lastNumber(total3) === findMaxPointCard(num)) {
         setPoint1(point1 - 900);
         setPoint2(point2 - 900);
         setPoint3(point3 + 2700);
         setPoint4(point4 - 900);
         NotificationManager.success('User3 Win', 'Point+2700')
      }
      else if (lastNumber(total4) === findMaxPointCard(num)) {
         setPoint1(point1 - 900);
         setPoint2(point2 - 900);
         setPoint3(point3 - 900);
         setPoint4(point4 + 2700);
         NotificationManager.success('User4 Win', 'Point+2700')
      }
      else {
         setPoint1(point1);
         setPoint2(point2);
         setPoint3(point3);
         setPoint4(point4);
      }
      setCheckCard(true);
   }

   const handleReset = () => {
      getShuffleCard().then((res) => {
         setDect_id(res.data.deck_id);
      });
      setRemaining(52);
      setCheckCard(false);
      setPoint1(5000);
      setPoint2(5000);
      setPoint3(5000);
      setPoint4(5000);
   }
   return (
      <>
      <div className="app">
         <div className='table'>
            <button className='btn-deck-card'>Deck card {remaining}</button>
            <div className='btn-action'>
               <button onClick={handleShuffle} className='btn btn-shuffle'>Shuffle</button>
               <button onClick={handleDraw} className='btn btn-draw'>Draw</button>
               <button onClick={handleReveal} className='btn btn-reveal'>Reveal</button>
               <button onClick={handleReset} className='btn btn-reset'>Reset</button>
            </div>
         </div>
         <div className="card-top">
            <div className='card'>
               {checkCard ? (
                  <div className='card-img'>
                     {user1.map((card) => (
                        <>
                           <img src={card.image} alt="img" />
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
                     {user4.map((card) => (
                        <>
                           <img src={card.image} alt="img" />
                        </>
                     ))}
                  </div>) : (
                  <div className='card-img'>
                     <img src={baiup} alt="6h" />
                     <img src={baiup} alt="7c" />
                     <img src={baiup} alt="qh" />
                  </div>)
               }
               <p className='point'>Point: {point4}</p>
               <p className='user'>User4</p>
               {checkCard ? (<p className='point'>Point of 3 cards: {pointCard4}</p>) : (<p className='point'>Point of 3 cards: 0</p>)}
            </div>
         </div>
         <div className="card-left">
            <div className='card'>
               {checkCard ? (
                  <div className='card-img'>
                     {user2.map((card) => (
                        < >
                           <img src={card.image} alt="img" />
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
         <div className="card-bottom">
            <div className='card'>
               {checkCard ? (
                  <div className='card-img'>
                     {user3.map((card) => (
                        
                           <img src={card.image} alt="img" />
                     ))}
                  </div>) : (
                  <div className='card-img'>
                     <img src={baiup} alt="6h" />
                     <img src={baiup} alt="7c" />
                     <img src={baiup} alt="qh" />
                  </div>)
               }
               <p className='point'>Point: {point3}</p>
               <p className='user'>User3</p>
               {checkCard ? (<p className='point'>Point of 3 cards: {pointCard3}</p>) : (<p className='point'>Point of 3 cards: 0</p>)}
            </div>
         </div>
      </div>
      <NotificationContainer/>
      </>
   );
}

export default App;
