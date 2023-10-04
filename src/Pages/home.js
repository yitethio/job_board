import React from 'react';
import { Container, Typography, Button, IconButton, TextField, InputAdornment } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DataDisplay from './cards_list';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios'; // Import Axios
import Header from './header';

function Home() {
  const [selectedJobType, setSelectedJobType] = React.useState(null);
  const [filteredData, setFilteredData] = React.useState([]);
  const [data, setData] = React.useState([]); // Define the data variable

  // Fetch data when the component mounts
  React.useEffect(() => {
    // Make an API request to fetch data
    axios.get('your_api_endpoint_here')
      .then((response) => {
        // Assuming the API returns an array of data
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleFilterClick = (jobType) => {
    // Filter the data based on the selected job type
    const filteredJobs = data.filter((item) => item.Job_type === jobType);
    setFilteredData(filteredJobs);
    setSelectedJobType(jobType);
  };

  const clearFilter = () => {
    // Clear the filter and show all jobs
    setFilteredData([]);
    setSelectedJobType(null);
  };

  return (
    <>
      <Header/>
      <IconButton
        style={{
          marginLeft: '20px', // Adjust spacing for smaller screens
          marginTop: '20px',
          fontSize: '32px',
          color: selectedJobType ? 'blue' : 'inherit',
        }}
        onClick={selectedJobType ? clearFilter : () => handleFilterClick('temporary onsite')}
      >
        <FilterListIcon />
      </IconButton>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        style={{ marginTop: '20px', width: '100%', maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto' }} // Center and adjust width
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
      <div style={{ marginTop: '20px' }}>
        <DataDisplay data={selectedJobType ? filteredData : data} />
      </div>
    </>
  );
}

export default Home;
