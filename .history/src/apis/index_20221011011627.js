import axios from 'axios';

export const postShuffleCard = () =>
   axios.post('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');