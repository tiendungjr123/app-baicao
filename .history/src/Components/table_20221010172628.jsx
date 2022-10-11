import React from 'react';

const Table = () => {
   return (
      <div className='table'>
         <button className='deck-card'>Deck card 40</button>
         <div className='action'>
            <button className='btn-action'>Shuffle</button>
            <button className='btn-action'>Draw</button>
            <button className='btn-action'>Reveal</button>
         </div>
      </div>
   );
}

export default Table;
