import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'


import App from './App';

import loadingReducer from './redux/loading';
import peopleReducer from './redux/people';

// const rootReducer = (state = {}, action) => {
//   return {
//     people: peopleReducer(state.people, action),
//     loading: loadingReducer(state.loading, action),
//   };
// };

const rootReducer = combineReducers({
  people: peopleReducer,
  loading: loadingReducer
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);

// const oldDispatch = store.dispatch;
// store.dispatch = (action) => {
//   if (typeof action === 'function') {
//     action(oldDispatch);
//   } else {
//     oldDispatch(action);
//   }
// };


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
