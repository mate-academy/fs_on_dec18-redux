import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './App';


const loadingReducer = (loadingState = false, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return true;
    case 'END_LOADING':
      return false;
    default:
      return loadingState;
  }
};

const peopleReducer = (peopleState = [], action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [
        ...peopleState,
        action.person
      ];
    default:
      return peopleState;
  }
};

const rootReducer = (state = {}, action) => {
  return {
    people: peopleReducer(state.people, action),
    loading: loadingReducer(state.loading, action),
  };
};

const store = createStore(
  rootReducer,
  composeWithDevTools(),
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
