export const REQUEST_BOOKS = 'REQUEST_BOOKS';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';


export const requestBooks = (subject = 'all') => ({
    type: REQUEST_BOOKS,
    subject
});

export const receiveBooks = (subject = 'all', json) => {
    return {
        type: RECEIVE_BOOKS,
        subject,
        books: json
    }
}

export const fetchBooks = (subject) => {
    let fetchUrl = 'http://localhost:3010/books';
    if (subject) fetchUrl += `?subjects_like=${subject}`;
    return dispatch => {
        dispatch(requestBooks(subject));
        return fetch(fetchUrl)
            .then(response => response.json())
            .then(json => dispatch(receiveBooks(subject, json)))
    };
};
