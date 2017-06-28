import { stubFetch, restoreFetch } from '../../testSupport/helpers';
import store                       from '../../store';
import AdvertisementsActions       from '../advertisements';

describe('AdvertisementsActions', () => {
  beforeEach(() => { stubFetch(); });
  afterEach(()  => { restoreFetch(); });

  describe('fetch', () => {
    let action;

    beforeEach(() => {
      return store.dispatch(AdvertisementsActions.fetch())
        .then((data) => (action = data))
    });

    test('resolves with the correct type', () => (
      expect(action.type).toEqual(AdvertisementsActions.FETCH_ADVERTISEMENTS)
    ));

    test('resolves with the correct status', () => (
      expect(action.status).toEqual('success')
    ));

    test('resolves with array of advertisements', () => (
      expect(action.advertisements.length).toBeGreaterThan(0)
    ));
  });
});
