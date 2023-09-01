import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicButtons() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Stack spacing={2} direction="column">
        <Typography
          variant="h1"
          sx={{
            color: '#000',
            fontFamily: 'Inter',
            fontSize: '74px',
            fontStyle: 'normal',
            fontWeight: 700,
            lineHeight: 'normal',
            width: '166px',
            height: '233px',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          ARE YOU A
        </Typography>
        <Stack spacing={2} direction="row">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#D9D9D9',
              color: 'black',
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '44px',
              fontStyle: 'normal', 
            }}
          >
            Employee
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#D9D9D9',
              color: 'black',
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '44px',
              fontStyle: 'normal', 
            }}
          >
            Employer
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}
