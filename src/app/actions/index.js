import api from '../api';

export const FETCH_SAVINGS_ACCOUNTS = 'FETCH_SAVINGS_ACCOUNTS';

export function fetchSavingsAccounts() {
  return {
    type: FETCH_SAVINGS_ACCOUNTS,
    promise: api.fetchSavingsAccounts()
  };
}
