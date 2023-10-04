import { Divider, Typography } from '@mui/material';
import React from 'react';

function Footer() {
  return (
    <>
      <div style={{ backgroundColor: '#021C2C', width: '100%', height: '158px', display: 'flex', alignItems: 'center' }}>
       
          <Typography style={{
            color: '#F3C300',
            fontFamily: 'Noto Serif',
            fontSize: '39px',
            fontStyle: 'normal',
            fontWeight: '400',
            marginLeft: '45px'
          }}>
            Afro-Jobs
          </Typography>
        
        <Divider style={{
          backgroundColor: '#DBBF03',
          width: '4px',
          height: '30px', 
          marginLeft: '355px',
          marginBottom: '45px'
        }} />
        <a>
          <Typography style=
          
        {{ color: '#FFF', fontFamily: 'Noto Serif',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: '400',
        marginBottom: '45px',
        marginLeft: '10px'
        }}>Home</Typography>
        </a>
        <Divider style={{
          backgroundColor: '#DBBF03',
          width: '4px',
          height: '30px', 
          marginTop: '45px',
          marginRight: '355px', // Adjust the margin to align "About Us" perfectly
        }} />
        <a>
          <Typography style=
          
        {{ color: '#FFF', fontFamily: 'Noto Serif',
        fontSize: '22px',
        fontStyle: 'normal',
        fontWeight: '400',
        marginTop: '45px',
        marginLeft: '10px'
        }}>About Us</Typography>
        </a>
      </div>
    </>
  );
}

export default Footer;
