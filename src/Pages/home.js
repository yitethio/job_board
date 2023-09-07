import { Container, Typography, Button, IconButton  } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DataDisplay from './cards_list';
import * as React from 'react';


function Home() {
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
          alignContent: 'space-between'
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
        <div style={{marginLeft:'700px'}}>
        <Button style={{color:'white', fontFamily: 'Noto Serif',
            fontSize: '19px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',}} size="large">Home</Button>
        <Button style={{color:'white', fontFamily: 'Noto Serif',
            fontSize: '19px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: 'normal',}} size="large">ABOUT US</Button>
        </div>
        <IconButton style={{color:'white'}}> 
            <NotificationsIcon /> 
          </IconButton>
          <Button variant="contained"   style={{width: '175px',height: '63.472px',color:'white',backgroundColor:'#F3C300'}}>Contained</Button>
      </Container>
    </div>
    <div style={{marginTop:'40px',marginLeft:'40px'}}><DataDisplay /></div>
    
    </>

  );
}

export default Home;
