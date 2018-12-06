import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { TextField, Typography, FormControl, InputLabel, Select, Chip, MenuItem, OutlinedInput } from '@material-ui/core';

class BookInfo extends Component {
  state = { ...this.props.initialValues };
  
  componentDidMount() {
    this.forceUpdate();
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    return (
      <React.Fragment>
        <Typography component="h1" variant="h4" align="center">
            Edit book info
        </Typography>
        <form>
          <TextField
            name="title"
            label="Title"
            value={this.state.title}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            name="id"
            label='ID'
            value={this.state.id}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            name="download_count"
            label='Download Count'
            value={this.state.download_count}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            name="media_type"
            label='Media Type'
            value={this.state.media_type}
            onChange={this.handleChange}
            margin="normal"
            variant="outlined"
          />
          <FormControl margin="normal" variant="outlined">
            <InputLabel
              htmlFor="subjects"
              ref={(ref) => {
                this.subjectLabelRef = ReactDOM.findDOMNode(ref);
              }}
            >
              Subjects
            </InputLabel>
            <Select
              name="subjects"
              multiple
              value={this.state.subjects}
              onChange={this.handleChange}
              input={
                <OutlinedInput
                  id="subjects"
                  labelWidth={this.subjectLabelRef ? this.subjectLabelRef.offsetWidth : 0}
                />
              }
              renderValue={(selected) => (
                <div>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </div>
              )}
            >
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
  subjects: state.subjects
});

export default connect(mapStateToProps)(BookInfo);
