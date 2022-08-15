import React from 'react';
import {
  Paper,
  Button,
  Typography,
} from '@mui/material';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';

const Header = ({ openModal }) => (
  <Paper sx={{ mb: 2, p: 2, bgcolor: '#f0e78c' }} onClick={openModal}>
    <BrowserUpdatedIcon sx={{ color: 'black', fontSize: 58 }} />
    <Typography variant="h6" sx={{ mb: 1 }}>Admin actions</Typography>
    <Button sx={{ color: '#2f4f4e', fontWeight: 900 }}>Add new item</Button>
  </Paper>
);

export default Header;
