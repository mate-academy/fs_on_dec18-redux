
const ADD_PERSON = 'ADD_PERSON'

export const addPerson = (person) => {
  return {
    type: ADD_PERSON,
    person: person,
  };
};


const peopleReducer = (peopleState = [], action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...peopleState,
        action.person
      ];
    default:
      return peopleState;
  }
};

export default peopleReducer;
