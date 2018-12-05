import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import { fetchSubjects, selectSubject } from './redux/actions';

class SubjectSelect extends Component {
  componentDidMount() {
    this.props.dispatch(fetchSubjects());
  }

  handleSubjectChange = (event) => {
    this.props.dispatch(selectSubject(event.target.value));
  }

  render() {
    return (
      <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
          Choose a subject
        </Typography>
        <form>
          <FormControl>
            <InputLabel htmlFor="subject">Subject</InputLabel>
            <Select
              value={this.props.selectedSubject}
              onChange={this.handleSubjectChange}
              inputProps={{
                name: 'subject',
                id: 'subject'
              }}
            >
              <MenuItem value=''></MenuItem>
              {this.props.subjects.items.map(subject => (
                <MenuItem key={subject} value={subject}>{subject}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  subjects: state.subjects,
  selectedSubject: state.selections.subject
});

export default connect(mapStateToProps)(SubjectSelect);