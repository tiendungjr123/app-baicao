import React ,{useEffect, useState} from 'react';
import { getShuffleCard } from '../apis';


const Table = () => {
   useEffect(() =>{
      getShuffleCard().then((res) =>{
         console.log(res.data);
      })
   },[]);
   const ShuffleCard = () =>{
      console.log('ok')
   }
   return (
      <div className='table'>
         <button className='btn-deck-card'>Deck card 40</button>
         <div className='btn-action'>
            <button onClick={ShuffleCard} className='btn btn-shuffle'>Shuffle</button>
            <button className='btn btn-draw'>Draw</button>
            <button className='btn btn-reveal'>Reveal</button>
            <button className='btn btn-reset'>Reset</button>
         </div>
      </div>
   );
}

export default Table;
