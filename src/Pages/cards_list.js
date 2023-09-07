import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, Container, Avatar, CardContent, Typography, Grid } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

function DataDisplay() {
  const [data, setData] = useState([]);

  useEffect(() => {
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

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
          <Card style={{ width: '297px', height: '263px', borderRadius: '19px 19px 0px 0px', background: '#D9D9D9' }}>
            <CardHeader
              style={{ width: '297px', height: '18px', borderRadius: '19px 19px 0px 0px', background: '#021C2C', color: '#FFF' }}
              title={item.name}
            />
            <Avatar
              sx={{ bgcolor: deepOrange[500], marginLeft: '250px', marginTop: '10px' }}
              variant="rounded"
              alt={item.name}
              src={item.avatar}
            />
            <CardContent>
              <Typography style={{ color: '#000', fontFamily: 'Inter', fontSize: '17px', fontWeight: '600', lineHeight: 'normal' }}>Position Available:</Typography>
              <Typography style={{ color: '#000', fontFamily: 'Inter', fontSize: '17px', fontWeight: '400', lineHeight: 'normal' }}>{item.Position}</Typography>
              <Typography style={{ color: '#000', fontFamily: 'Inter', fontSize: '17px', fontWeight: '600', lineHeight: 'normal' }}>Vacancy Available:</Typography>
              <Typography style={{ color: '#000', fontFamily: 'Inter', fontSize: '17px', fontWeight: '400', lineHeight: 'normal' }}>{item.vacancy}</Typography>
              <Typography style={{ color: '#000', fontFamily: 'Inter', fontSize: '17px', fontWeight: '600', lineHeight: 'normal' }}>Job Type:</Typography>
              <Typography style={{ color: '#000', fontFamily: 'Inter', fontSize: '17px', fontStyle: 'normal', fontWeight: '600', lineHeight: 'normal' }}>{item.Job_type}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default DataDisplay;
