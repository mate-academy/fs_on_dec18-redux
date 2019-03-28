import React from 'react';
import { connect } from 'react-redux';

// const API_URL = 'https://mate-academy.github.io/fe-program/js/tasks/people/people.json';



const App = ({ count, items, addMe, loading }) => (
  <div>
    { loading ? (
      <h2>Loading...</h2>
    ) : <>
      <button onClick={addMe}>count: {count}</button>
      <pre>{JSON.stringify(items)}</pre>
    </>}
  </div>
);

const mapStateToProps = (state) => ({
  count: state.people.length,
  items: state.people,
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  addMe: () => {
    dispatch({
      type: 'ADD_PERSON',
      person: { id: 1 },
    })
  },
});

const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);


export default ConnectedApp;

// const ConnectedApp1 = (ownProps) => (
//   <App
//     {...ownProps}
//     {...mapState(store.getState()}
//     {...mapDispatch{store.dispatch}}
//   />
// );
