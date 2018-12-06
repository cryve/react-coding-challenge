import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Typography, MenuItem, TextField } from '@material-ui/core';
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
          <TextField
            select
            label="Subject"
            value={this.props.selectedSubject}
            onChange={this.handleSubjectChange}
            margin="normal"
            variant="outlined"
          >
            <MenuItem value=''></MenuItem>
            {this.props.subjects.items.map(subject => (
              <MenuItem key={subject} value={subject}>{subject}</MenuItem>
            ))}
          </TextField>
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