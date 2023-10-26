import React, { useState } from 'react';
import '../registration/RegistrationForm.css';
import Button from '@mui/material/Button';


const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    password: '',
    address: '',
    companyWebsite: '',
    category: 'Select Category', // Default value for the dropdown
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log(formData); // Replace with your registration logic
  };

  return (
    <div className="registration-form-container">
    <form className="registration-form" onSubmit={handleSubmit}>
      <label>
        Company Name:
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} required />
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
        Company Website:
        <input type="url" name="companyWebsite" value={formData.companyWebsite} onChange={handleChange} required />
      </label>
      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="Select Category" disabled>
            Select Category
          </option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          {/* Add more categories as needed */}
        </select>
      </label>
      <a href="/comp" >
      <Button
          variant="contained"
          style={{
            width: '105px',
            height: '34px',
            color: 'white',
            backgroundColor: '#F3C300',
            fontWeight: '100',
            fontSize: '12px',
            fontFamily: 'Noto Serif',
            marginRight: '20px',
          }}
        >
          Signup
        </Button>
      </a>
    </form>
    </div>
  );
};

export default RegistrationForm;