
const Table = () => {
   
   const ShuffleCard = () => {
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
