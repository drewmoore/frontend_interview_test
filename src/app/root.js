import React           from 'react';
import { render }      from 'react-dom';
import { Provider }    from 'react-redux';
import { createStore } from 'redux';
import rootReducer     from './reducers/index';
import App             from './components/app';

const renderApp = () => {
  const store = createStore(rootReducer);
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );
};

export default renderApp;
