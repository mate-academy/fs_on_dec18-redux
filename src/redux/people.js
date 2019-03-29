import * as loadingActions from './loading';

const ADD_PERSON = 'ADD_PERSON';
const ADD_PEOPLE = 'ADD_PEOPLE';
const API_URL = 'https://mate-academy.github.io/fe-program/js/tasks/people/people.json';

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


export const loadPeople = () => {
  return async (dispatch) => {
    dispatch(
      loadingActions.startLoading()
    );

    const response = await fetch(API_URL);
    const people = await response.json();

    dispatch(
      loadingActions.stopLoading()
    );

    dispatch(
      addPeople(people)
    );
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
