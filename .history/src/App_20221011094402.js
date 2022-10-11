import './App.css';
import CardList from './Components/cardList';
import Table from './Components/table';
import React, { useEffect, useState } from 'react';
import { getDrawCard, getShuffleCard } from './apis/index';


function App() {

   const [deck_id, setDect_id] = useState('');
   const [listCard, setListCard] = useState([]);
   const [loading, setLoading] = useState(false);
   const [remaining, setRemaining] = useState(52);
   
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
      if (remaining < 16) {
         console.log('Không đủ bài để chia')
         getShuffleCard().then((res) => {
            setDect_id(res.data.deck_id);
         });
         setLoading(false);
         setRemaining(52);
      }
      setLoading(true);
   }

   useEffect(() => {
      if (deck_id && loading) {
         getDrawCard(deck_id).then((res) => {
            setListCard(res.data.cards);
            setRemaining(res.data.remaining);
            setLoading(false);
         })
      }
   }, [deck_id, loading]);

   const handleReveal = () =>{
      console.log(listCard)
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
         <CardList listCard={listCard} />
      </div>

   );
}

export default App;
