import './App.css';
import CardList from './Components/cardList';
import Table from './Components/table';
import React, { useEffect, useState } from 'react';
import { getDrawCard, getShuffleCard } from './apis/index';


function App() {

   const [deck_id, setDect_id] = useState('');
   const [listCard, setListCard] =  useState([]);

   useEffect(() => {
      getShuffleCard().then((res) => {
         setDect_id(res.data.deck_id);
      })
   },[]);

   useEffect(() => {
      if (deck_id) {
         console.log('ok');
         console.log(deck_id)
         getDrawCard(deck_id).then((res) => {
            setListCard(res.data.cards);
         })
      }
   }, [deck_id]);
   return (
      <div className="app">
         <CardList listCard={listCard}/>
         <Table />
      </div>

   );
}

export default App;
