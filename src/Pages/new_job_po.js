import { Typography, TextField, Button, Container } from '@mui/material';
import React from 'react';

function NewJobPost() {
  return (
    <>
      <div>
        <Typography variant="h5">Create a New Job Post</Typography>

        <Container>
          <TextField
            label="Position Available"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Gender"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Vacancy Available"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Criteria"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Job Type"
            variant="outlined"
            fullWidth
            margin="normal"
          />
          <TextField
            label="Deadline"
            variant="outlined"
            fullWidth
            margin="normal"
          />
        </Container>

        <Button
          variant="contained"
          style={{
            backgroundColor: '#021C2C',
            color: 'white',
            borderRadius: '29px',
            width: '122px',
            height: '32px',
            fontSize: '10px',
            fontWeight: 'bold',
            marginTop: '20px',
            alignSelf: 'center',
          }}
        >
          Submit
        </Button>
      </div>
    </>
  );
}

export default NewJobPost;
