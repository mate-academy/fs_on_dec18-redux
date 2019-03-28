import React from 'react';
import { connect } from 'react-redux';

import { startLoading, stopLoading } from './redux/loading';
import { addPerson } from './redux/people';
// const API_URL = 'https://mate-academy.github.io/fe-program/js/tasks/people/people.json';


const App = (props) => {
  const { count, items, loading } = props;
  const { addMe, startLoading, stopLoading } = props;

  return (
    <div>
      { loading ? (
        <h2>
          Loading...
          <button onClick={stopLoading}>Stop</button>
        </h2>
      ) : <>
        <button onClick={addMe}>count: {count}</button>
        <button onClick={startLoading}>Start</button>
        <pre>{JSON.stringify(items)}</pre>
      </>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.people.length,
  items: state.people,
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  addMe() {
    dispatch(
      addPerson({ id: 1 })
    );
  },
  startLoading() {
    dispatch(startLoading())
  },
  stopLoading() {
    dispatch(stopLoading())
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
