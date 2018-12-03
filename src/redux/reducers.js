import { combineReducers } from 'redux';
import {
    REQUEST_BOOKS,
    RECEIVE_BOOKS
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

const rootReducer = combineReducers({
    booksBySubject
});

export default rootReducer;