export const REQUEST_BOOKS = 'REQUEST_BOOKS';
export const RECEIVE_BOOKS = 'RECEIVE_BOOKS';
export const REQUEST_SUBJECTS = 'REQUEST_SUBJECTS';
export const RECEIVE_SUBJECTS = 'RECEIVE_SUBJECTS';

const JSON_ENDPOINT = 'http://localhost:3010';

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

export const requestSubjects = () => ({
    type: REQUEST_SUBJECTS
});

export const receiveSubjects = (json) => ({
    type: RECEIVE_SUBJECTS,
    subjects: json
})

export const fetchBooks = (subject) => {
    let fetchUrl = `${JSON_ENDPOINT}/books`;
    if (subject) fetchUrl += `?subjects_like=${subject}`;
    return dispatch => {
        dispatch(requestBooks(subject));
        return fetch(fetchUrl)
            .then(response => response.json())
            .then(json => dispatch(receiveBooks(subject, json)));
    };
};

export const fetchSubjects = () => {
    return dispatch => {
        dispatch(requestSubjects());
        return fetch(`${JSON_ENDPOINT}/subjects`)
            .then(response => response.json())
            .then(json => dispatch(receiveSubjects(json)));
    }
};
