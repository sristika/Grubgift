import { Button, Container, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../api/users';
import ErrorAlert from '../ErrorAlert';
import { loginUser } from '../../helpers/authHelper';
import Copyright from '../Copyright';
import 'react-icons/ai';
import 'react-icons/ri';
import {
  AiFillCode,
  AiFillFileText,
  AiFillGift,
  AiFillHome,
  AiFillMessage,
  AiOutlineSearch,
} from 'react-icons/ai';

const LoginView = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: '', password: '' });

  const [serverError, setServerError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = await login(formData);
    if (data.error) {
      setServerError(data.error);
    } else {
      loginUser(data);
      navigate('/');
    }
  };

  return (
    <Container maxWidth={'xs'} sx={{ mt: 6 }}>
      <Stack alignItems="center">
        <Typography
          className="generic-yellow-txt"
          variant="h2"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          <Link to="/" color="inherit" underline="none">
            <AiFillGift
              size={50}
              onClick={() => navigate('/')}
              style={{ color: '#fff4d6', marginRight: '10px' }}
            />
            GrubGift
          </Link>
        </Typography>
        <Typography
          className="generic-yellow-txt smaller-text"
          variant="h5"
          gutterBottom
        >
          Login
        </Typography>
        <Typography
          className="generic-yellow-txt smaller-text"
          color="text.secondary"
        >
          Don't have an account yet? <Link to="/signup">Sign Up</Link>
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <TextField
            label="Email Address"
            fullWidth
            margin="normal"
            autoComplete="email"
            autoFocus
            required
            id="email"
            name="email"
            onChange={handleChange}
            className="input-field-txt"
          />
          <TextField
            label="Password"
            fullWidth
            required
            margin="normal"
            id="password  "
            name="password"
            onChange={handleChange}
            type="password"
            className="input-field-txt"
          />

          <ErrorAlert error={serverError} />
          <Button
            type="submit"
            className="yellow-btn"
            fullWidth
            variant="contained"
            sx={{ my: 2 }}
          >
            Login
          </Button>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Copyright />
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginView;
