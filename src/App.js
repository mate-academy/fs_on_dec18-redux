import React from 'react';
import { connect } from 'react-redux';
// const API_URL = 'https://mate-academy.github.io/fe-program/js/tasks/people/people.json';



const App = ({ count }) => (
  <h1>count: {count}</h1>
);

const mapStateToProps = (state) => ({
  count: state.people.length,
});


const ConnectedApp = connect(
  mapStateToProps
)(App);

export default ConnectedApp;
