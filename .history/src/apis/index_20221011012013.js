import axios from 'axios';

export const getShuffleCard = () =>
   axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');