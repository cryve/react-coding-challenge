import { combineReducers } from 'redux';
import {
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  REQUEST_SUBJECTS,
  RECEIVE_SUBJECTS,
  SELECT_SUBJECT
} from './actions';

const books = (state = { isFetching: false, items: [] }, action ) => {
  switch (action.type) {
    case REQUEST_BOOKS:
      return { ...state, isFetching: true };
    case RECEIVE_BOOKS:
      return { ...state, isFetching: false, items: action.books };
    default:
      return state;
  }
}

const booksBySubject = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_BOOKS:
    case REQUEST_BOOKS:
      return {
        ...state,
        [action.subject]: books(state[action.subject], action)
      };
    default:
      return state;
  }
}

const subjects = (state = { isFetching: false, items: [] }, action ) => {
  switch (action.type) {
    case REQUEST_SUBJECTS:
      return {...state, isFetching: true};
    case RECEIVE_SUBJECTS: 
      return {...state, isFetching: false, items: action.subjects};
    default:
      return state;
  }
}

const selections = (state = { subject: '' }, action) => {
  switch (action.type) {
    case SELECT_SUBJECT:
      return { ...state, subject: action.subject };
    default: 
      return state;
  }
}

const rootReducer = combineReducers({
  booksBySubject,
  subjects,
  selections
});

export default rootReducer;