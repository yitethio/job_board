import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from '@mui/material';

// Create a PopUp component that accepts data as a prop
function PopUp({ data }) {
  const [openPopup, setOpenPopup] = useState(false);

  const handlePopupOpen = () => {
    setOpenPopup(true);
  };

  const handlePopupClose = () => {
    setOpenPopup(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handlePopupOpen}>
        Open Popup
      </Button>

      <Dialog open={openPopup} onClose={handlePopupClose} maxWidth="sm" fullWidth>
        <DialogTitle>{data.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Position: {data.Position}
          </Typography>
          <Typography variant="body1">
            Vacancy: {data.vacancy}
          </Typography>
          <Typography variant="body1">
            Job Type: {data.Job_type}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handlePopupClose} color="primary">
            Close
          </Button>
          <Button variant="contained" color="primary">
            Apply Now
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default function CardList({ cardData }) {
  return (
    <div>
      {cardData.map((card) => (
        <div key={card.id}>
          {/* Render a PopUp component for each item in cardData */}
          <PopUp data={card} />
        </div>
      ))}
    </div>
  );
}
