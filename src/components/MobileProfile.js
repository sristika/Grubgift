import { useTheme } from '@emotion/react';
import {
  Button,
  Card,
  Divider,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';
import { isLoggedIn } from '../helpers/authHelper';
import ContentUpdateEditor from './ContentUpdateEditor';
import UserAvatar from './UserAvatar';
import HorizontalStack from './util/HorizontalStack';

const MobileProfile = (props) => {
  const [user, setUser] = useState(null);
  const userCurr = isLoggedIn();
  const theme = useTheme();
  const iconClr = theme.palette.primary.main;

  useEffect(() => {
    if (props.profile) {
      setUser(props.profile.user);
    }
  }, [props.profile]);

  return (
    <Card sx={{ display: { sm: 'block', md: 'none' }, mb: 2 }}>
      {user ? (
        <Stack spacing={2}>
          <HorizontalStack spacing={2} justifyContent="space-between">
            <HorizontalStack>
              <UserAvatar width={50} height={50} username={user.username} />
              <Typography variant="h6" textOverflow="ellipses">
                {user.username}
              </Typography>
            </HorizontalStack>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <HorizontalStack spacing={3}>
                <Stack alignItems="center">
                  <Typography>Likes</Typography>
                  <Typography color="text.secondary">
                    <b>{props.profile.posts.likeCount}</b>
                  </Typography>
                </Stack>
                <Stack alignItems="center">
                  <Typography color="text.secondary">Posts</Typography>
                  <Typography color="text.secondary">
                    <b>{props.profile.posts.count}</b>
                  </Typography>
                </Stack>
              </HorizontalStack>
            </Box>
          </HorizontalStack>
          <Divider />
          <Box>
            {userCurr && user._id === userCurr.userId && (
              <IconButton onClick={props.handleEditing} sx={{ mr: 1 }}>
                {props.editing ? (
                  <MdCancel color={iconClr} />
                ) : (
                  <AiFillEdit color={iconClr} />
                )}
              </IconButton>
            )}
            {user.biography ? (
              <>
                <Typography textAlign="center" variant="p">
                  <b>Bio: </b>
                  {user.biography}
                </Typography>
              </>
            ) : (
              <Typography variant="p">
                <i>
                  No bio yet{' '}
                  {userCurr && user._id === userCurr.userId && (
                    <span>- Tap on the edit icon to add your bio</span>
                  )}
                </i>
              </Typography>
            )}
            {userCurr && user._id !== userCurr.userId && (
              <Box sx={{ mt: 2 }}>
                <Button
                  className="yellow-btn"
                  variant="outlined"
                  onClick={props.handleMessage}
                >
                  Message
                </Button>
              </Box>
            )}
            {props.editing && (
              <Box>
                <ContentUpdateEditor
                  handleSubmit={props.handleSubmit}
                  originalContent={user.biography}
                  validate={props.validate}
                />
              </Box>
            )}
          </Box>
        </Stack>
      ) : (
        <>Loading...</>
      )}
    </Card>
  );
};

export default MobileProfile;
