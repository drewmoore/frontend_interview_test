import React        from 'react';
import { render }   from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk        from 'redux-thunk';
import rootReducer  from './reducers/index';
import App          from './components/app';
require('es6-promise').polyfill();

const middleware = applyMiddleware(thunk);
const renderApp  = () => {
  const store = createStore(rootReducer, {}, middleware);
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

export default renderApp;
