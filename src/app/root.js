import React         from 'react';
import { render }    from 'react-dom';
import { Provider }  from 'react-redux';
import { createStore } from 'redux';
import rootReducer   from './reducers/index';

const renderApp = () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <h1>'Sup, World</h1>
    </Provider>,
    document.getElementById('root')
  );
};

export default renderApp;
