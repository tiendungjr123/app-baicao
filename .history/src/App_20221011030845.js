import './App.css';
import CardList from './Components/cardList';
import Table from './Components/table';
import React, { useEffect, useState } from 'react';
import { getDrawCard, getShuffleCard } from './apis/index';


function App() {

   const [deck_id, setDect_id] = useState('');
   const [listCard, setListCard] = useState([]);
   const [remaining, setRemaining] = useState(50);
   useEffect(() => {
      getShuffleCard().then((res) => {
         setDect_id(res.data.deck_id);
      })
   }, []);

   useEffect(() => {
      if (deck_id) {
         getDrawCard(deck_id).then((res) => {
            setListCard(res.data.cards);
            console.log(res.data.remaining);
         })
      }
   }, [deck_id]);
   return (
      <div className="app">
         
         <div className='table'>
            <button className='btn-deck-card'>Deck card 40</button>
            <div className='btn-action'>
               <button className='btn btn-shuffle'>Shuffle</button>
               <button className='btn btn-draw'>Draw</button>
               <button className='btn btn-reveal'>Reveal</button>
               <button className='btn btn-reset'>Reset</button>
            </div>
         </div>
         <CardList />
      </div>

   );
}

export default App;
