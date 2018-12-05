import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core';
import { Book as BookIcon } from '@material-ui/icons';
import { fetchBooksIfNeeded } from './redux/actions';

class BookSelect extends Component {
  state = {
    selectedIndex: -1
  }
  
  componentDidMount() {
    if (this.props.subject) {
      this.props.dispatch(fetchBooksIfNeeded(this.props.subject));
    }
  }
  
  componentDidUpdate(prevProps, prevState) {
    if (this.props.subject !== prevProps.subject) {
      this.props.dispatch(fetchBooksIfNeeded(this.props.subject));
    }
  }
  
  handleBookItemClick = (event, index) => {
    this.setState({ selectedIndex: index });
  }
  
  render() {
    const { subject, books } = this.props;
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
            selected={this.state.selectedIndex === index}
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
      </React.Fragment>
    )
  }
}
    
const mapStateToProps = (state) => ({
  books: state.booksBySubject,
  subject: state.selections.subject
});

export default connect(mapStateToProps)(BookSelect);