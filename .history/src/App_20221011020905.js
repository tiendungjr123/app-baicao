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
   }, []);

   useEffect(() => {
      if (deck_id) {
         getDrawCard(deck_id).then((res) => {
            setListCard(res.data.cards);
            console.log(listCard);
         })
      }
   }, [deck_id]);
   return (
      <div className="app">
         <CardList />
         <Table />
      </div>

   );
}

export default App;
