import React from 'react';
import { connect } from 'react-redux';

import * as loadingActions from './redux/loading';
import * as peopleActions from './redux/people';
const API_URL = 'https://mate-academy.github.io/fe-program/js/tasks/people/people.json';


class App extends React.Component {
  async componentDidMount() {
    const { addPeople, startLoading, stopLoading } = this.props;

    startLoading();

    const response = await fetch(API_URL);
    const people = await response.json();

    stopLoading();
    addPeople(people);
  }

  render() {
    const { count, items, loading } = this.props;
    const { addMe } = this.props;

    return (
      <div>
        { loading ? (
          <h2>Loading...</h2>
        ) : <>
          <button onClick={addMe}>count: {count}</button>
          <pre>{JSON.stringify(items)}</pre>
        </>}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  count: state.people.length,
  items: state.people,
  loading: state.loading
});

const mapDispatchToProps = (dispatch) => ({
  addMe() {
    dispatch(
      peopleActions.addPerson({ id: 1 })
    );
  },
  addPeople(people) {
    dispatch(
      peopleActions.addPeople(people)
    )
  },
  startLoading() {
    dispatch(
      loadingActions.startLoading()
    )
  },
  stopLoading() {
    dispatch(
      loadingActions.stopLoading()
    )
  }
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
