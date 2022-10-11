import './App.css';
import CardList from './Components/cardList';
import Table from './Components/table';
import React, { useEffect, useState } from 'react';
import { getDrawCard, getShuffleCard } from './apis/index';
import baiup from './assets/images/baian.PNG';
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

   function lastNumber(number) {
      if (number < 10)
         return number;
      else {
         number = number % 10
         return number
      }
   }

   function findMaxPointCard(array) {
      let max = array[0];
      let max_index = 0;
      for (let i = 0; i < array.length; ++i) {
         if (max < array[i]) {
            max = array[i];
            max_index = i;
         }
      }
      return max;
   }
   const handleReveal = () => {
      let total1 = 0;
      let total2 = 0;
      let total3 = 0;
      let total4 = 0;
      user1.map((card) => {
         if (card.value === 'ACE')
            card.value = '1';
         if (card.value === 'JACK' || card.value === 'KING' || card.value === 'QUEEN')
            card.value = '10';
         total1 = total1 + Number(card.value);
         setPointCard1(total1)
      });
      user2.map((card) => {
         if (card.value === 'ACE')
            card.value = '1';
         if (card.value === 'JACK' || card.value === 'KING' || card.value === 'QUEEN')
            card.value = '10';
         total2 = total2 + Number(card.value);
         setPointCard2(total2)
      })
      user3.map((card) => {
         if (card.value === 'ACE')
            card.value = '1';
         if (card.value === 'JACK' || card.value === 'KING' || card.value === 'QUEEN')
            card.value = '10';
         total3 = total3 + Number(card.value);
         setPointCard3(total3)
      })
      user4.map((card) => {
         if (card.value === 'ACE')
            card.value = '1';
         if (card.value === 'JACK' || card.value === 'KING' || card.value === 'QUEEN')
            card.value = '10';
         total4 = total4 + Number(card.value);
         setPointCard4(total4)
      })

      // if (lastNumber(total1) > lastNumber(total2)) {
      //    setPoint1(point1 + 900);
      //    setPoint2(point2 - 900);
      // }
      // else if (lastNumber(total1) === lastNumber(total2)) {
      //    setPoint1(point1);
      //    setPoint2(point2);
      // }
      // else {
      //    setPoint1(point1 - 900);
      //    setPoint2(point2 + 900);
      // }
      let num = [lastNumber(total1), lastNumber(total2), lastNumber(total3), lastNumber(total4)];
      if(lastNumber(total1)===findMaxPointCard(num)){
         setPoint1(point1 + 900);
         setPoint2(point2 - 900);
         setPoint3(point3 - 900);
         setPoint4(point4 - 900);
      }
      if(lastNumber(total2)===findMaxPointCard(num)){
         setPoint1(point1 - 900);
         setPoint2(point2 + 900);
         setPoint3(point3 - 900);
         setPoint4(point4 - 900);
      }
      if(lastNumber(total3)===findMaxPointCard(num)){
         setPoint1(point1 - 900);
         setPoint2(point2 - 900);
         setPoint3(point3 + 900);
         setPoint4(point4 - 900);
      }
      if(lastNumber(total4)===findMaxPointCard(num)){
         setPoint1(point1 - 900);
         setPoint2(point2 - 900);
         setPoint3(point3 - 900);
         setPoint4(point4 + 900);
      }
      else{
         setPoint1(point1);
         setPoint2(point2);
         setPoint3(point3);
         setPoint4(point4);
      }
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
                     {user2.map((card) => (
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
               <p className='point'>Point: {point2}</p>
               <p className='user'>User2</p>
               {checkCard ? (<p className='point'>Point of 3 cards: {pointCard2}</p>) : (<p className='point'>Point of 3 cards: 0</p>)}
            </div>
         </div>
         <div className="card-left">
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
         <div className="card-bottom">
            <div className='card'>
               {checkCard ? (
                  <div className='card-img'>
                     {user3.map((card) => (
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
               <p className='user'>User3</p>
               {checkCard ? (<p className='point'>Point of 3 cards: {pointCard3}</p>) : (<p className='point'>Point of 3 cards: 0</p>)}
            </div>
         </div>
      </div>
   );
}

export default App;
