/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import { Container, Typography, TextField, Button, FormControl, InputLabel, InputAdornment, IconButton, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

import axios from 'axios';

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    showPassword: false,
  });
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setFormData({ ...formData, showPassword: !formData.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Simulate a registration request with mock data
      const response = await axios.post('/api/register', formData);

      if (response.status === 200) {
        // Registration was successful, you can now handle the mocked JWT token
        console.log('Registration successful');
        console.log('JWT Token:', response.data.token);
        navigate('/home');
        // You can also redirect or navigate to a protected route
      } else {
        // Handle registration error
        console.error('Registration failed');
      }
    } catch (error) {
      // Handle network error
      console.error('Network error', error);
    }
    setFormData({
      name: '',
      email: '',
      password: '',
      showPassword: false,
    });
  };

  return (
    <div >
      <Container maxWidth="sm" >
      <Typography variant="h4" align="center" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange('name')}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange('email')}
          type="email"
          required
        />
        <FormControl variant="outlined" fullWidth margin="normal">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={formData.showPassword ? 'text' : 'password'}
            value={formData.password}
            onChange={handleChange('password')}
            required
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {formData.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={80}
          />
        </FormControl>
        <Button variant="contained" color="primary" fullWidth type="submit">
          Sign Up
        </Button>
      </form>
    </Container>
    </div>
  );
}

export default SignUp;
