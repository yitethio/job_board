import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, Avatar, CardContent, Typography, Grid, Dialog, DialogTitle, DialogContent, DialogActions,Pagination } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';


function DataDisplay() {
  const [data, setData] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [page, setPage] = useState(1);
  const cardsPerPage = 8;

  useEffect(() => {
    axios.get('https://64fa30874098a7f2fc15737d.mockapi.io/cards')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

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
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.name}>
          <Card style={{ width: '297px', height: '263px', borderRadius: '19px 19px 0px 0px', background: '#D9D9D9' }}>
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
    borderRadius: '19px 19px 0px 0px',
    background: '#021C2C',
  }}
/>

</Tooltip>
            <Avatar
              sx={{ bgcolor: deepOrange[500], marginLeft: '250px', marginTop: '10px' }}
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
          <Button variant="contained" style={{ width: '100px', height: '39.319px', background: '#654141' }} onClick={() => openPopup(item)}>
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
            {/* Add criteria and deadline here */}
            <Typography>Criteria: {selectedCard.criteria}</Typography>
            <Typography>Deadline: {selectedCard.dead_line}</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={closePopup} color="primary">
              Close
            </Button>
            <Button variant="contained" color="primary">
              Apply Now
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Grid>
  );
}

export default DataDisplay;
