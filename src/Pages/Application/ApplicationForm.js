import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';

function ApplicationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    region: '',
    city: '',
    houseNumber: '',
    education: '',
    cv: null, // You may need to handle file uploads
  });

  const handleChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleCVUpload = (event) => {
    const cvFile = event.target.files[0];
    setFormData({ ...formData, cv: cvFile });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Send the formData to the server (e.g., using Axios)
    // Handle the form submission logic here
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: '800px' }} >
        <Typography variant="h6">Application Form</Typography>

        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
          <div>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.firstName}
              onChange={handleChange('firstName')}
              required
            />
            <TextField
              label="Middle Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.middleName}
              onChange={handleChange('middleName')}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.lastName}
              onChange={handleChange('lastName')}
              required
            />
          </div>

          <div>
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
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.phoneNumber}
              onChange={handleChange('phoneNumber')}
              required
            />
            <FormControl variant="outlined" fullWidth margin="normal">
              <InputLabel htmlFor="region-select">Region</InputLabel>
              <Select
                label="Region"
                id="region-select"
                value={formData.region}
                onChange={handleChange('region')}
                required
              >
                <MenuItem value="Region 1">Region 1</MenuItem>
                <MenuItem value="Region 2">Region 2</MenuItem>
                {/* Add more regions */}
              </Select>
            </FormControl>
            <TextField
              label="City"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.city}
              onChange={handleChange('city')}
              required
            />
            <TextField
              label="House Number"
              variant="outlined"
              fullWidth
              margin="normal"
              value={formData.houseNumber}
              onChange={handleChange('houseNumber')}
              required
            />
          </div>
        </div>

        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
          <label style={{ fontSize: '18px' }}>Drag and Drop Your CV:</label>
          <input
            type="file"
            accept=".pdf, .doc, .docx" // Define acceptable file formats
            onChange={handleCVUpload}
          />
        </div>

        <Button variant="contained" color="primary" fullWidth type="submit">
          Apply Now
        </Button>
      </form>
    </div>
  );
}

export default ApplicationForm;
