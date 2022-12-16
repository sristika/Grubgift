import { useTheme } from '@emotion/react';
import {
  Button,
  IconButton,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import 'react-icons/ai';
import 'react-icons/ri';
import {
  AiFillBulb,
  AiFillGift,
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
} from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { isLoggedIn, logoutUser } from '../helpers/authHelper';
import UserAvatar from './UserAvatar';
import HorizontalStack from './util/HorizontalStack';

const Navbar = () => {
  const navigate = useNavigate();
  const user = isLoggedIn();
  const theme = useTheme();
  const username = user && isLoggedIn().username;
  const [search, setSearch] = useState('');
  const [searchIcon, setSearchIcon] = useState(false);
  const [width, setWindowWidth] = useState(0);

  useEffect(() => {
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const mob = width < 500;
  const navWidth = width < 600;

  const updateDimensions = () => {
    const width = window.innerWidth;
    setWindowWidth(width);
  };

  const handleLogout = async (e) => {
    logoutUser();
    navigate('/login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/search?' + new URLSearchParams({ search }));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchIcon = (e) => {
    setSearchIcon(!searchIcon);
  };

  return (
    <Stack mb={2}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          pt: 2,
          pb: 0,
        }}
        spacing={!mob ? 2 : 0}
      >
        <HorizontalStack>
          <AiFillGift
            size={33}
            color={theme.palette.primary.main}
            onClick={() => navigate('/')}
            style={{ color: '#fff4d6' }}
          />
          <Typography
            className="hide-on-mobile"
            sx={{ display: mob ? 'none' : 'block', color: '#f9bf34' }}
            variant={navWidth ? 'h6' : 'h4'}
            mr={1}
          >
            GrubGift
          </Typography>
        </HorizontalStack>

        {!navWidth && (
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              placeholder="Search for posts..."
              size="small"
              className="input-field-txt search-field"
              sx={{
                flexGrow: 1,
                maxWidth: 300,
              }}
              onChange={handleChange}
              value={search}
              InputLabelProps={{ shrink: false }}
            />
          </Box>
        )}
        {/* search-field  */}

        <HorizontalStack>
          {mob && (
            <IconButton onClick={handleSearchIcon}>
              <AiOutlineSearch style={{ color: '#fff4d6' }} />
            </IconButton>
          )}

          <IconButton component={Link} to={'/'} className="icon-nav-bar">
            <AiFillHome style={{ color: '#fff4d6' }} />
          </IconButton>
          {user ? (
            <>
              <IconButton
                component={Link}
                to={'/messenger'}
                className="icon-nav-bar"
              >
                <AiFillMessage style={{ color: '#fff4d6' }} />
              </IconButton>
              <IconButton
                component={Link}
                to={'/users/' + username}
                className="icon-nav-bar"
              >
                <UserAvatar width={30} height={30} username={user.username} />
              </IconButton>
              <Button
                className="find-facts-txt"
                variant="text"
                sx={{ minWidth: 80 }}
                href="/externalApi"
              >
                {' '}
                <AiFillBulb
                  size={20}
                  style={{ color: '#fff4d6', marginRight: '5px' }}
                />
                <span className="hide-on-mobile">Find facts</span>
              </Button>
              <IconButton
                className="find-facts-mobile icon-nav-bar"
                component={Link}
                to={'/externalApi'}
              >
                <AiFillBulb
                  size={20}
                  style={{ color: '#fff4d6', marginRight: '5px' }}
                />
              </IconButton>
              <Button className="yellow-btn" onClick={handleLogout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                className="find-facts-txt"
                variant="text"
                sx={{ minWidth: 80 }}
                href="/externalApi"
              >
                {' '}
                <AiFillBulb
                  size={20}
                  style={{ color: '#fff4d6', marginRight: '5px' }}
                />
                <span className="hide-on-mobile">Find facts</span>
              </Button>
              <IconButton
                className="find-facts-mobile icon-nav-bar"
                component={Link}
                to={'/externalApi'}
              >
                <AiFillBulb
                  size={20}
                  style={{ color: '#fff4d6', marginRight: '5px' }}
                />
              </IconButton>
              <Button
                className="yellow-btn"
                variant="text"
                sx={{ minWidth: 80 }}
                href="/signup"
              >
                Sign Up
              </Button>
              <Button
                className="yellow-btn"
                variant="text"
                sx={{ minWidth: 65 }}
                href="/login"
              >
                Login
              </Button>
            </>
          )}
        </HorizontalStack>
      </Stack>
      {navWidth && searchIcon && (
        <Box component="form" onSubmit={handleSubmit} mt={2}>
          <TextField
            size="small"
            label="Search for posts..."
            fullWidth
            onChange={handleChange}
            value={search}
            className="input-field-txt search-field"
          />
        </Box>
      )}
    </Stack>
  );
};

export default Navbar;
