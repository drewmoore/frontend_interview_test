import React        from 'react';
import { render }   from 'react-dom';
import { Provider } from 'react-redux';
import store        from './store';
import App          from './components/app';
require('es6-promise').polyfill();

const renderApp  = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

export default renderApp;
