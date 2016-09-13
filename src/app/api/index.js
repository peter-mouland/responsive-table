import { json } from '../utils';

export default {
  fetchSavingsAccounts() {
    return json.get('api/savings-accounts');
  },
};
