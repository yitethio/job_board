import React from 'react';
import { Container, Typography, Button, IconButton } from '@mui/material'; // Add missing imports
import NotificationsIcon from '@mui/icons-material/Notifications'; // Add missing import

function Header() {
  return (
    <div style={{ backgroundColor: '#021C2C' }}>
      <Container
        style={{
          width: '100%',
          padding: '20px 0', // Add padding for spacing
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Adjust alignment for responsiveness
        }}
      >
        <Typography
          style={{
            color: '#FFF',
            fontFamily: 'Noto Serif',
            fontSize: '24px', // Adjust font size for smaller screens
            fontWeight: 400,
          }}
        >
          Afro Jobs
        </Typography>
        <div style={{ display: 'flex', gap: '20px' }}> {/* Use flex and add gap for buttons */}
          <Button
            style={{
              color: 'white',
              fontFamily: 'Noto Serif',
              fontSize: '16px', // Adjust font size for smaller screens
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
              fontSize: '16px', // Adjust font size for smaller screens
              fontWeight: 400,
            }}
            size="large"
          >
            ABOUT US
          </Button>
          <IconButton style={{ color: 'white' }}>
            <NotificationsIcon />
          </IconButton>
        </div>
        <Button
          variant="contained"
          style={{
            width: '75px',
            height: '34px',
            color: 'white',
            backgroundColor: '#F3C300',
            fontWeight: '100',
            fontSize: '12px', // Adjust font size for smaller screens
            fontFamily: 'Noto Serif',
          }}
        >
          Signup
        </Button>
      </Container>
    </div>
  );
}

export default Header;
