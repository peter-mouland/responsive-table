import debug from 'debug';

import { json } from '../../app/utils';
const log = debug('pivot:fetch-savings-data'); //eslint-disable-line

const getCard = (api, cardId) => json.get(`http://swapi.co/api/${api}/${cardId}/`);

export default (api, cards) => Promise.all([getCard(api, cards[0]), getCard(api, cards[1])]);
