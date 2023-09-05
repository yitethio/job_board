import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <div style={{ backgroundColor: '#021C2C', height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Company Name"
          variant="standard"
          InputLabelProps={{ style: { color: 'white' } }} 
          inputProps={{ style: { color: 'white' } }}     
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          InputLabelProps={{ style: { color: 'white' } }} 
          inputProps={{ style: { color: 'white' } }}     
        />
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          InputLabelProps={{ style: { color: 'white' } }} 
          inputProps={{ style: { color: 'white' } }}     
        />
        <TextField
          id="standard-basic"
          label="Address"
          variant="standard"
          InputLabelProps={{ style: { color: 'white' } }} 
          inputProps={{ style: { color: 'white' } }}     
        />
        <TextField
          id="standard-basic"
          label="Company Website"
          variant="standard"
          InputLabelProps={{ style: { color: 'white' } }} 
          inputProps={{ style: { color: 'white' } }}     
        />
      </Box>
    </div>
  );
}
