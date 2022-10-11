import React from 'react';

const Table = () => {
   return (
      <div className='table'>
         <button className='btn-deck-card'>Deck card 40</button>
         <div className='btn-action'>
            <button className='btn-shuffle'>Shuffle</button>
            <button className='btn-draw'>Draw</button>
            <button className='btn-reveal'>Reveal</button>
            <button className='btn-reset'>Reset</button>
         </div>
      </div>
   );
}

export default Table;
