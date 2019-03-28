
const ADD_PERSON = 'ADD_PERSON';
const ADD_PEOPLE = 'ADD_PEOPLE';

export const addPerson = (person) => {
  return {
    type: ADD_PERSON,
    person: person,
  };
};

export const addPeople = (people = []) => {
  return {
    type: ADD_PEOPLE,
    people: people,
  };
};


const peopleReducer = (peopleState = [], action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [
        ...peopleState,
        action.person
      ];
    case ADD_PEOPLE:
      return [
        ...peopleState,
        ...action.people,
      ];
    default:
      return peopleState;
  }
};

export default peopleReducer;
