import { Typography, Container, Button } from '@mui/material';
import React from 'react';
import Intro_img from '../images/linkedin-sales-solutions-Xh_MFNzpEDw-unsplash.jpg';

function Intro() {
  return (
    <div style={{ backgroundColor: '#021C2C', width: '100%', height: 'auto' }}>
      <Container
        style={{
          padding: '20px 0',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Typography
          style={{
            color: '#FFF',
            fontFamily: 'Noto Serif',
            fontSize: '24px',
            fontWeight: 400,
            marginLeft: '20px',
          }}
        >
          AfroJobs
        </Typography>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Button
            style={{
              color: 'white',
              fontFamily: 'Noto Serif',
              fontSize: '16px',
              fontWeight: 400,
            }}
            size="large"
          >
            Home
          </Button>
          <Button
            style={{
              color: 'white',
              fontFamily: 'Noto Serif',
              fontSize: '16px',
              fontWeight: 400,
            }}
            size="large"
          >
            ABOUT US
          </Button>
        </div>
        <Button
          variant="contained"
          style={{
            width: '75px',
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
      </Container>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <Typography
          style={{
            color: '#DBBF03',
            fontFamily: 'Noto Serif',
            fontSize: '24px',
            fontWeight: 400,
            marginTop: '20px',
            textAlign: 'center',
          }}
        >
          Digital. scalable product
        </Typography>
        <Typography
          style={{
            color: '#FFF',
            fontFamily: 'Noto Serif',
            fontSize: '40px',
            fontWeight: 400,
            marginTop: '10px',
            textAlign: 'center',
          }}
        >
          Revolutionizing Job Onboarding
        </Typography>
        <Typography
          style={{
            color: '#FFF',
            fontFamily: 'Noto Serif',
            fontSize: '18px',
            fontWeight: 400,
            marginTop: '10px',
            textAlign: 'center',
          }}
        >
          To a whole next level. Join AfroJobs to get the job of your dream and let recruiters meet your prospective employees.
        </Typography>
        <a href="/home" style={{ textDecoration: 'none' }}>
          <Button
            variant="outlined"
            style={{
              width: '220px',
              height: '60px',
              marginTop: '20px',
              borderColor: '#EDCA6D',
              color: 'white',
              borderWidth: '4px',
              fontSize: '16px',
            }}
          >
            Explore Opportunity
          </Button>
        </a>
      </div>
      <div style={{ textAlign: 'center' }}>
        <img
          style={{ width: '100%', height: 'auto', marginTop: '20px' }}
          src={Intro_img}
          alt="intro image 1"
        />
      </div>
    </div>
  );
}

export default Intro;
