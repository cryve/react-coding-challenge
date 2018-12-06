import React from 'react';
import { List, Typography, ListItem, TextField } from '@material-ui/core';


const Formats = ({
  formats,
  handleFormatUrlChange
}) => {
  return (
    <React.Fragment>
      <Typography component="h2" variant="h5" align="center">
        Edit book formats
      </Typography>
      <List component="nav">
        {Object.keys(formats).map((type, index) => (
          <ListItem key={index}>
            <TextField
              name={type}
              label={type}
              value={formats[type]}
              onChange={handleFormatUrlChange}
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </ListItem>
        ))}
      </List>
    </React.Fragment>
    
  );
};

export default Formats;
