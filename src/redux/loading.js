const START_LOADING = 'START_LOADING';

const createStartLoadingAction = () => {
  return { type: START_LOADING };
};


const loadingReducer = (loadingState = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case 'END_LOADING':
      return false;
    default:
      return loadingState;
  }
};

export default loadingReducer;
