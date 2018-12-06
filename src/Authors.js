import React from 'react';
import { Typography, List, ListItem, TextField } from '@material-ui/core';

const Authors = ({
  authors,
  handleAuthorsChange
}) => {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h5" align="center">
        Edit authors
      </Typography>
      <List component="nav">
        {authors.map((author, index) => (
          <ListItem key={index}>
            <TextField
              name="name"
              label="Name"
              value={author.name}
              onChange={(event) => handleAuthorsChange(event, index)}
              margin="normal"
              variant="outlined"
            />
            <TextField
              name="birth_year"
              label="Birth year"
              value={author.birth_year}
              onChange={(event) => handleAuthorsChange(event, index)}
              margin="normal"
              variant="outlined"
            />
            <TextField
              name="death_year"
              label="Death year"
              value={author.death_year}
              onChange={(event) => handleAuthorsChange(event, index)}
              margin="normal"
              variant="outlined"
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default Authors;
