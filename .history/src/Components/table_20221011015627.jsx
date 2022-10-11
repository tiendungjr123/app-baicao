import React ,{useEffect, useState} from 'react';
import { getDrawCard, getShuffleCard } from '../apis';


const Table = () => {
   const [deck_id, setDect_id] = useState('');
   useEffect(() =>{
      getShuffleCard().then((res) =>{
         setDect_id(res.data.deck_id);
      })
   },[]);

   useEffect(()=>{
      getDrawCard(deck_id).then((res)=>{
         console.log(res.data)
      })
   },[])
   const ShuffleCard = () =>{
   }
   return (
      <div className='table'>
         <p></p>
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
