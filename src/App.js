import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { fetchBooks, fetchSubjects } from './redux/actions';
import './App.css';

class App extends Component {
  state = {
    subject: ''
  };

  componentDidMount() {
    this.props.dispatch(fetchBooks());
    this.props.dispatch(fetchSubjects());
  }

  handleSubjectChange = event => {
    this.setState({ subject: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Typography component="h1" variant="h4" align="center">
            Choose a subject
          </Typography>
          <form>
            <FormControl>
              <InputLabel htmlFor="subject">Subject</InputLabel>
              <Select
                value={this.state.subject}
                onChange={this.handleSubjectChange}
                inputProps={{
                  name: 'subject',
                  id: 'subject'
                }}
              >
                {this.props.subjects.items.map(subject => (
                  <MenuItem key={subject} value={subject}>{subject}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </form>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { booksBySubject, subjects } = state;
  return { booksBySubject, subjects };
}

export default connect(mapStateToProps)(App);
