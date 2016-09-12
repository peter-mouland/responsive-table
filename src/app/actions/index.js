import api from '../api';

export const FETCH_SAVINGS_DATA = 'FETCH_SAVINGS_DATA';
const DECK = 87;

export function fetchSavingsData(user) {
  return {
    type: FETCH_SAVINGS_DATA,
    promise: api.fetchSavingsData(user)
  };
}