import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

function Compregister() {
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Registration Form
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company Website"
              variant="outlined"
              name="companyWebsite"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Address"
              variant="outlined"
              name="address"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              type="email"
              name="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              variant="outlined"
              type="password"
              name="password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Company Name"
              variant="outlined"
              name="companyName"
            />
          </Grid>
          <Grid item xs={12}>
            <Select
              fullWidth
              label="Category"
              variant="outlined"
              value={category}
              onChange={handleCategoryChange}
            >
              <MenuItem value="Textile">Textile</MenuItem>
              <MenuItem value="Medical">Medical</MenuItem>
              <MenuItem value="Automobile">Automobile</MenuItem>
              <MenuItem value="Aviation">Aviation</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Compregister;
