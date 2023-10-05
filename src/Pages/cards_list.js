import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, Avatar, CardContent, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions,Pagination } from '@mui/material';
import { blueGrey, deepOrange } from '@mui/material/colors';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';


function DataDisplay() {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [page, setPage] = useState(1);
  const cardsPerPage = 8;
  const [applyPopupOpen, setApplyPopupOpen] = useState(false);
  const [selectedCardData, setSelectedCardData] = useState(null);
  const handleApply = () => {
   
    setApplyPopupOpen(true);
  };
  useEffect(() => {
    axios.get('https://64fa30874098a7f2fc15737d.mockapi.io/cards')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  const handleSubmitApplication = () => {
   
    setApplyPopupOpen(false);

   
    setSelectedCardData(null);
  };
  const openPopup = (card) => {
    setSelectedCard(card);
  };

  const closePopup = () => {
    setSelectedCard(null);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const startIndex = (page - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const cardsToDisplay = data.slice(startIndex, endIndex);


  return (
    <Grid container spacing={2}>
      {cardsToDisplay.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={item.name} style={{ display: 'flex', flexDirection: 'column', alignItems:'center'}}>
          <Card style={{ width: '300px', height: '263px', borderRadius: '0px 0px 0px 0px', background: '#fff' }}>
            <Tooltip title={item.name} arrow>
            <CardHeader
  title={
    <Typography 
    style={{
      color: '#FFF',
      fontFamily: 'Segoe UI', 
      fontSize: '16px',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    }}
    >
      {item.name}
    </Typography>
  }
  style={{
    width: '297px',
    height: '18px',
    borderRadius: '0px 0px 0px 0px',
    background: '#A9a9a9',
  }}
/>

</Tooltip>
            <Avatar
              sx={{ bgcolor: blueGrey, marginLeft: '250px', marginTop: '10px' }}
              variant="rounded"
              alt={item.name}
              src={item.avatar}
            />
            <CardContent>
              <Typography style={{ color: '#000', fontFamily: 'Roboto', fontSize: '17px', fontWeight: '600', lineHeight: 'normal' }}>Position Available:</Typography>
              <Typography style={{ color: '#000', fontFamily: 'Roboto', fontSize: '17px', fontWeight: '400', lineHeight: 'normal' }}>{item.Position}</Typography>
              <Typography style={{ color: '#000', fontFamily: 'Roboto', fontSize: '17px', fontWeight: '600', lineHeight: 'normal' }}>Vacancy Available:</Typography>
              <Typography style={{ color: '#000', fontFamily: 'Roboto', fontSize: '17px', fontWeight: '400', lineHeight: 'normal' }}>{item.vacancy}</Typography>
              <Typography style={{ color: '#000', fontFamily: 'Roboto', fontSize: '17px', fontWeight: '600', lineHeight: 'normal' }}>Job Type:</Typography>
              <Typography style={{ color: '#000', fontFamily: 'Roboto', fontSize: '17px', fontWeight: '400', lineHeight: 'normal' }}>{item.Job_type}</Typography>
            </CardContent>
          </Card>
          <Button variant="contained" style={{ width: '100px', height: '39.319px', background: '#021C2C', marginTop: '5px' }} onClick={() => openPopup(item)}>
            Readmore
          </Button>
        </Grid>
      ))}

      {selectedCard && (
        <Dialog open={!!selectedCard} onClose={closePopup} maxWidth="md" fullWidth>
          <DialogTitle>{selectedCard.name}</DialogTitle>
          <DialogContent>
            <Typography>Position: {selectedCard.Position}</Typography>
            <Typography>Vacancy: {selectedCard.vacancy}</Typography>
            <Typography>Job Type: {selectedCard.Job_type}</Typography>
           
            <Typography>Criteria: {selectedCard.criteria}</Typography>
            <Typography>Deadline: {selectedCard.dead_line}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={closePopup} color="primary">
              Close
            </Button>
            <Button variant="contained" color="primary" onClick={handleApply}>
            Apply Now
          </Button>
          </DialogActions>
        </Dialog>

      )}
       <Dialog open={applyPopupOpen} onClose={() => setApplyPopupOpen(false)} maxWidth="md" fullWidth>
        <DialogTitle>Apply Now</DialogTitle>
        <DialogContent>
          {/* Display selected card's name and position */}
          {selectedCard && (
            <div>
              <Typography variant="h6">Selected Job:</Typography>
              <Typography>Name: {selectedCard.name}</Typography>
              <Typography>Position: {selectedCard.Position}</Typography>
            </div>
          )}
          
         
         
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setApplyPopupOpen(false)} color="primary">
            Close
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmitApplication}>
            Confirm & Submit
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

export default DataDisplay;
