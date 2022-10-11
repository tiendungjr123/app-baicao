import './App.css';
import CardList from './Components/cardList';
import Table from './Components/table';
import React, { useEffect, useState } from 'react';
import { getDrawCard, getShuffleCard } from './apis/index';


function App() {

   return (
      <div className="app">
         <CardList />
         <Table />
      </div>

   );
}

export default App;
