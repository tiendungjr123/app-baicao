import axios from 'axios';

export const postShuffleCard = () =>
   axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');