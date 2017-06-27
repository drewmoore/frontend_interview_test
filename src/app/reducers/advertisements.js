import update                from 'immutability-helper';
import AdvertisementsActions from '../actions/advertisements';

const defaultState = {
  items:      {},
  isFetching: false
};

const toCollection = (advertisements) => {
  let id = 0;
  return (
    advertisements.reduce((accumulator, advertisement) => {
      advertisement.id = id;
      accumulator[id]  = advertisement;
      id += 1;
      return accumulator;
    }, {})
  );
};

const fetchAdvertisementsState = (state, action) => {
  let newState;
  switch (action.status) {
    case 'success':
      newState = {
        isFetching: false,
        items:      toCollection(action.advertisements.slice(0, 10))
      };
      break;
    case 'error':
      newState = {
        isFetching: false,
        items:      {},
        error:      'Es gab einen Fehler. Entschuldigung.'
      }
    default:
      newState = { isFetching: true };
  }
  return update(state, { $merge: newState });
};

const advertisements = (state = defaultState, action = {}) => {
  switch (action.type) {
    case AdvertisementsActions.FETCH_ADVERTISEMENTS:
      return fetchAdvertisementsState(state, action);
    default:
      return state;
  }
};

export default advertisements;
