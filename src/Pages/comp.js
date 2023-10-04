import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import Header from './header';
import Footer from './Footer'

// Import your two components here
import RecentPostComponent from './recent_post';
import NewJobPostComponent from './new_job_po';

function Comp_p() {
  const [showRecentPost, setShowRecentPost] = useState(true); // Initial state to show Recent Post component

  const handleRecentPostClick = () => {
    setShowRecentPost(true);
  };

  const handleNewJobPostClick = () => {
    setShowRecentPost(false);
  };

  return (
    <>
      <Header />
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <Button
          variant="contained"
          style={{
            backgroundColor: showRecentPost ? '#021C2C' : '#D9D9D9',
            borderRadius: '29px',
            width: '122px',
            height: '32px',
            fontSize: '10px',
            fontWeight: 'bold',
            marginRight: '10px',
            cursor: 'pointer',
            color: showRecentPost ? 'white' : 'black',
          }}
          onClick={handleRecentPostClick}
        >
          Recent Post
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: showRecentPost ? '#D9D9D9' : '#021C2C',
            borderRadius: '29px',
            width: '122px',
            height: '32px',
            fontSize: '10px',
            fontWeight: 'bold',
            cursor: 'pointer',
            color: showRecentPost ? 'black' : 'white',
          }}
          onClick={handleNewJobPostClick}
        >
          New Job Post
        </Button>
      </div>

      {/* Conditional rendering based on button click */}
      {showRecentPost ? <RecentPostComponent /> : <NewJobPostComponent />}
      <Footer />

    </>

  );
}

export default Comp_p;
