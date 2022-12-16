import { Card, Divider, IconButton, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { MdRefresh } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';
import { getRandomUsers } from '../api/users';
import Loading from './Loading';
import UserAvatar from './UserAvatar';
import HorizontalStack from './util/HorizontalStack';

const FindUsers = (props) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  const fetchAllUsers = async () => {
    setLoading(true);
    return await getRandomUsers({ size: 6 });
  };


  useEffect(() => {
    fetchAllUsers().then((data) => {
      if (props.profile) {
        const filteredDataArray = data.filter(function (el) {
          return el.username !== props.profile.user.username;
        });
        setUsers(filteredDataArray.slice(0, 5));
      } else {
        setUsers(data.slice(0, 5));
      }
      setLoading(false);
    });
  }, [props.profile]);

  const handleClick = () => {
    fetchAllUsers().then((data) => {
      if (props.profile) {
        const filteredDataArray = data.filter(function (el) {
          return el.username !== props.profile.user.username;
        });
        setUsers(filteredDataArray.slice(0, 5));
      } else {
        setUsers(data.slice(0, 5));
      }
      setLoading(false);
    });
  };

  return (
    <Card className="find-users-stack">
      <Stack spacing={2}>
        <HorizontalStack justifyContent="space-between">
          <HorizontalStack>
            <AiOutlineUser />
            <Typography>Find Others</Typography>
          </HorizontalStack>
          <IconButton
            sx={{ padding: 0 }}
            disabled={loading}
            onClick={handleClick}
          >
            <MdRefresh />
          </IconButton>
        </HorizontalStack>

        <Divider />

        {loading ? (
          <Loading />
        ) : (
          users &&
          users.map((user) => (
            <HorizontalStack justifyContent="space-between" key={user._id}>
              <HorizontalStack>
                <UserAvatar width={30} height={30} username={user.username} />
                <Typography>{user.username}</Typography>
              </HorizontalStack>
              <a className="view-user" href={'/users/' + user.username}>
                View
              </a>
            </HorizontalStack>
          ))
        )}
      </Stack>
    </Card>
  );
};

export default FindUsers;