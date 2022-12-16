import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import {IoMdArrowRoundBack} from 'react-icons/io'

const GoBack = () => {
  return (
    <Typography sx={{ mb: 2 }}>
      <Link to="/" className="generic-yellow-txt smaller-text">
        {' '}
        <IoMdArrowRoundBack></IoMdArrowRoundBack> Go back to posts
      </Link>
    </Typography>
  );
};

export default GoBack;
