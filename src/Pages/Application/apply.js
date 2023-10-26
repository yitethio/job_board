import React, { useState } from 'react';
import axios from 'axios';
import '../Application/ApplyForm.css';
import Button from '@mui/material/Button';


const ApplyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: '',
    cv: null, // To store the uploaded CV file
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCvChange = (e) => {
    const cvFile = e.target.files[0];
    setFormData({ ...formData, cv: cvFile });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send form data including the CV file
    const applyFormData = new FormData();
    applyFormData.append('name', formData.name);
    applyFormData.append('email', formData.email);
    applyFormData.append('password', formData.password);
    applyFormData.append('address', formData.address);
    applyFormData.append('cv', formData.cv);

    try {
      // Send a POST request to JSONPlaceholder (a fake REST API)
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', applyFormData);

      // Handle the successful response data here
      console.log('Application submitted:', response.data);

      // Optionally, you can reset the form after successful submission
      setFormData({
        name: '',
        email: '',
        password: '',
        address: '',
        cv: null,
      });
    } catch (error) {
      // Handle any errors that occurred during the submission process
      console.error('Application error:', error);
    }
  };

  return (
    <div className="apply-form-container">
      <form className="apply-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Address:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <label>
          Upload CV:
          <input type="file" name="cv" onChange={handleCvChange} required />
        </label>
        <a href="/home">
        <Button
          variant="contained"
          style={{
            width: '56px',
            height: '34px',
            color: 'white',
            backgroundColor: '#F3C300',
            fontWeight: '100',
            fontSize: '12px',
            fontFamily: 'Noto Serif',
            marginRight: '20px',
          }}
        >
          Apply
        </Button>
        </a>
      </form>
    </div>
  );
};

export default ApplyForm;