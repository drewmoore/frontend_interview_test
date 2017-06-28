import { stubFetch, restoreFetch } from '../../testSupport/helpers';
import store                       from '../../store';
import AdvertisementsActions       from '../../actions/advertisements';

describe('Advertisements Reducer', () => {
  beforeEach(() => { stubFetch(); });
  afterEach(()  => { restoreFetch(); });

  describe('FETCH_ADVERTISEMENTS', () => {
    let advertisements;

    beforeEach(() => {
      return store.dispatch(AdvertisementsActions.fetch())
        .then(() => (advertisements = store.getState().advertisements))
    });

    test('reduces to a collection of advertisements with set length', () => (
      expect(Object.values(advertisements.items)).toHaveLength(10)
    ));

    test('reduces to an object of advertisements with ids for keys', () => (
      expect(Object.keys(advertisements.items))
        .toEqual([...Array(10).keys()].map(key => key.toString())) // '0'-'9'
    ));

    test('indicates that the collection is no longer being fetched', () => (
      expect(advertisements.isFetching).toBe(false)
    ));
  });
});
