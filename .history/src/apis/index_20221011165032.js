import axios from 'axios';

export const getShuffleCard = () =>
   axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');

export const getDrawCard = (deck_id) =>
   axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=6`);