import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui';
import App from './components/App';
import myCreateStore from './createStore';
import { loadState, saveState } from './localStorage';

// preserve state across reloads
const persistedState = loadState();
const store = myCreateStore(persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'));
