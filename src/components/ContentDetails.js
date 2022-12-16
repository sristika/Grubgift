import { Typography, Chip } from '@mui/material';
import React from 'react';
import HorizontalStack from './util/HorizontalStack';
import Moment from 'react-moment';
import UserAvatar from './UserAvatar';
import { Link } from 'react-router-dom';

const ContentDetails = ({ username, createdAt, edited, preview, promoted }) => {
  return (
    <HorizontalStack sx={{}}>
      <UserAvatar width={30} height={30} username={username} />
      <Typography variant="subtitle2" color="text.secondary" gutterBottom>
        <Link
          className="generic-link"
          color="inherit"
          underline="hover"
          onClick={(e) => {
            e.stopPropagation();
          }}
          to={'/users/' + username}
        >
          {username}
        </Link>
        {!preview && (
          <>
            {' '}
            · <Moment fromNow>{createdAt}</Moment> {edited && <>(Edited)</>} {promoted === "Promoter" && <>
            <Chip label="Promoted" color="warning" /></>}
          </>
        )}
      </Typography>
    </HorizontalStack>
  );
};

export default ContentDetails;