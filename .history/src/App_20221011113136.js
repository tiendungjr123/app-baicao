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

   useEffect(() => {
      getShuffleCard().then((res) => {
         setDect_id(res.data.deck_id);
      });
   }, []);

   const handleShuffle = () => {
      getShuffleCard().then((res) => {
         setDect_id(res.data.deck_id);
      });
      setRemaining(52)
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
   let cards = []
   const handleReveal = () => {
      console.log(listCard);
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
         {/* <CardList cards={cards} checkCard={checkCard}/> */}
         <div className="card-top">
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
         </div>
      </div>
   );
}

export default App;
