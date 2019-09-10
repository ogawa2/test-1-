import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/app';
import configureStore from './store/index';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
  <App/>,
  </Provider>,
  document.getElementById('root')
);
// }

// render();
// store.subscribe(render);