import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <Typography
      className="generic-yellow-txt smaller-text"
      variant="subtitle1"
      color="text.secondary"
    >
      Copyright © 2022{' '}
      <Link to="/" color="inherit" className="generic-link">
        . GrubGift
      </Link>
    </Typography>
  );
};

export default Copyright;
