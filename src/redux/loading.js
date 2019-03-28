const START_LOADING = 'START_LOADING';
const STOP_LOADING = 'STOP_LOADING';

export const startLoading = () => {
  return { type: START_LOADING };
};

export const stopLoading = () => {
  return { type: START_LOADING };
};


const loadingReducer = (loadingState = false, action) => {
  switch (action.type) {
    case START_LOADING:
      return true;
    case STOP_LOADING:
      return false;
    default:
      return loadingState;
  }
};

export default loadingReducer;
