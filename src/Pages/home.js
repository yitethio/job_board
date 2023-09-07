import { Container, Typography, Button, IconButton, Card, CardHeader, CardContent } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DataDisplay from './cards_list';
import FilterListIcon from '@mui/icons-material/FilterList';
import * as React from 'react';
import axios from 'axios'; // Import Axios

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
      <div style={{ backgroundColor: '#021C2C' }}>
        <Container
          style={{
            width: '100%',
            height: '77px',
            maxWidth: '100%',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            alignContent: 'space-between',
          }}
        >
          <Typography
            style={{
              color: '#FFF',
              fontFamily: 'Noto Serif',
              fontSize: '32px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            Afro Jobs
          </Typography>
          <div style={{ marginLeft: '700px' }}>
            <Button
              style={{
                color: 'white',
                fontFamily: 'Noto Serif',
                fontSize: '19px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
              size="large"
            >
              Home
            </Button>
            <Button
              style={{
                color: 'white',
                fontFamily: 'Noto Serif',
                fontSize: '19px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: 'normal',
              }}
              size="large"
            >
              ABOUT US
            </Button>
          </div>
          <IconButton style={{ color: 'white', marginLeft: '75px' }}>
            <NotificationsIcon />
          </IconButton>
          <Button
            variant="contained"
            style={{
              width: '175px',
              height: '63.472px',
              color: '#021114',
              backgroundColor: '#F3C300',
              fontWeight: '700',
              fontSize: '22px',
              fontFamily: 'Noto Serif',
              marginLeft: '199px',
            }}
          >
            Sign up
          </Button>
        </Container>
      </div>
      <IconButton
        style={{ marginLeft: '30px', marginTop: '20px', fontSize: '32px', color: selectedJobType ? 'blue' : 'inherit' }}
        onClick={selectedJobType ? clearFilter : () => handleFilterClick('temporary onsite')}
      >
        <FilterListIcon />
      </IconButton>
      <div style={{ marginTop: '40px', marginLeft: '70px' }}>
        <DataDisplay data={selectedJobType ? filteredData : data} />
      </div>
    </>
  );
}

export default Home;
