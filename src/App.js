import React from 'react';
import { connect } from 'react-redux';

import * as loadingActions from './redux/loading';
import * as peopleActions from './redux/people';

class App extends React.Component {
  componentDidMount() {
    this.props.loadPeople();
  }

  render() {
    const { count, items, loading } = this.props;
    const { addMe } = this.props;

    return (
      <div>
        { loading ? (
          <h2>Loading...</h2>
        ) : <>
          <button onClick={() => addMe({ id: 1 })}>
            count: {count}
          </button>
          <pre>{JSON.stringify(items)}</pre>
        </>}
      </div>
    );
  }
};

const mapState = (state) => ({
  count: state.people.length,
  items: state.people,
  loading: state.loading
});

const mapDispatch = {
  loadPeople: peopleActions.loadPeople,
  addMe: peopleActions.addPerson,
  addPeople: peopleActions.addPeople,
  startLoading: loadingActions.startLoading,
  stopLoading: loadingActions.stopLoading,
};

// const mapDispatch2 = (dispatch) => ({
//   loadPeople() {
//     dispatch(
//       peopleActions.loadPeople()
//     )
//   },
//   addPeople(people) {
//     dispatch(
//       peopleActions.addPeople(people)
//     )
//   },
//   startLoading() {
//     dispatch(
//       loadingActions.startLoading()
//     )
//   },
//   stopLoading() {
//     dispatch(
//       loadingActions.stopLoading()
//     )
//   }
// });

const ConnectedApp = connect(
  mapState,
  mapDispatch
)(App);


export default ConnectedApp;

// const ConnectedApp1 = (ownProps) => (
//   <App
//     {...ownProps}
//     {...mapState(store.getState()}
//     {...mapDispatch{store.dispatch}}
//   />
// );
