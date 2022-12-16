import { Card, Tab, Tabs } from '@mui/material';
import React from 'react';

const ProfileTabs = (props) => {
  const handleChange = (e, newValue) => {
    props.setTab(newValue);
  };

  return (
    <Card
      sx={{ padding: 0, backgroundColor: '#f9bf34' }}
      className="tabs-select"
    >
      <Tabs value={props.tab} onChange={handleChange} variant="scrollable">
        <Tab
          sx={{ color: '#260c00', fontWeight: 'bold' }}
          label="Posts"
          value="posts"
        />
        <Tab
          sx={{ color: '#260c00', fontWeight: 'bold' }}
          label="Liked"
          value="liked"
        />
        <Tab
          sx={{ color: '#260c00', fontWeight: 'bold' }}
          label="Comments"
          value="comments"
        />
      </Tabs>
    </Card>
  );
};

export default ProfileTabs;
