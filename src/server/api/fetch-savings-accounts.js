import debug from 'debug';
import savingsAccounts from './savings-accounts.json';

const log = debug('pivot:fetch-savings-accounts'); //eslint-disable-line


export default () => Promise.resolve(savingsAccounts);
