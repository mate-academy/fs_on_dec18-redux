import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux';
import { connect } from 'react-redux';

const API_URL = 'https://mate-academy.github.io/fe-program/js/tasks/people/people.json';


const initialState = {
  people: [],
  isLoaded: false,
};

const rootReducer = (state, action) => state;
const store = createStore(rootReducer, initialState);

console.log(store.getState());

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Redux</h1>
      </div>
    );
  }
}

export default App;
