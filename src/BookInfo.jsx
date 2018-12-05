import React, { Component } from 'react';
import { TextField, Typography } from '@material-ui/core';

class BookInfo extends Component {
  state = { ...this.props.initialValues };
  
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
        </form>
      </React.Fragment>
    )
  }
}

export default BookInfo;
