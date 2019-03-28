
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

export default peopleReducer;
