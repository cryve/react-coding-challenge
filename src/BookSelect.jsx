import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { Book as BookIcon } from '@material-ui/icons';
import { fetchBooksIfNeeded, selectBookIndex } from './redux/actions';
import BookInfo from './BookInfo';

class BookSelect extends Component {
  componentDidMount() {
    if (this.props.subject) {
      this.props.dispatch(fetchBooksIfNeeded(this.props.subject));
    }
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.subject !== prevProps.subject) {
      this.props.dispatch(fetchBooksIfNeeded(this.props.subject));
    }
  }
  
  handleBookItemClick = (event, index) => {
    if (index !== this.props.selectedIndex) {
      this.props.dispatch(selectBookIndex(index));
    }
  }
  
  render() {
    const { subject, books, selectedIndex } = this.props;

    if (!subject) return null;
    if (!books[subject] || books[subject].isFetching) return 'Loading...';
    
    return (
      <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
        Choose a book
        </Typography>
        <List component="nav">
        {books[subject].items.map((book, index) => (
          <ListItem
            button
            selected={selectedIndex === index}
            onClick={event => this.handleBookItemClick(event, index)}
            key={book.id}
          >
            <ListItemAvatar>
              <Avatar>
                <BookIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={book.title} />
          </ListItem>
        ))}
        </List>
        {(selectedIndex !== -1) &&
          <BookInfo
            initialValues={books[subject].items[selectedIndex]}
            key={selectedIndex}
          />
        }
      </React.Fragment>
    )
  }
}
    
const mapStateToProps = (state) => ({
  books: state.booksBySubject,
  subject: state.selections.subject,
  selectedIndex: state.selections.bookIndex
});

export default connect(mapStateToProps)(BookSelect);