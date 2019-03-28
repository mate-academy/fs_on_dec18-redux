import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import { Provider } from 'react-redux';

const initialState = {
  people: [],
  isLoaded: false,
};

const rootReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return {
        ...state,
        people: [...state.people, action.person],
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer, initialState);


store.dispatch({
  type: 'ADD_PERSON',
  person: { id: 1 },
});

console.log(
  store.getState()
);








ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
