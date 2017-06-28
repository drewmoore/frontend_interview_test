import React           from 'react';
import { Provider }    from 'react-redux';
import renderer        from 'react-test-renderer';
import { createStore } from 'redux';
import { mount }       from 'enzyme';
import { stubFetch, restoreFetch } from '../../../testSupport/helpers';
import store           from '../../../store';
import AdvertisementsListContainer from '../List';


describe('AdvertisementsListContainer', () => {
  let template;

  beforeEach(() => {
    stubFetch();
    template = (
      <Provider store={store}>
        <AdvertisementsListContainer />
      </Provider>
    );
  });

  afterEach(() => { restoreFetch(); });

  describe('DOM Snapshot', () => {
    test('matches snapshot', () => {
      const tree = renderer.create(template).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('Rendering Data', () => {
    test('renders 10 advertisement items', () => {
      const list = mount(template);
      return expect(list.find('.advertisement-list-item')).toHaveLength(10);
    });
  });
});
