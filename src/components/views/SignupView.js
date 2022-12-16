import {
    Button,
    Container,
    FormControlLabel,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import {teal} from '@mui/material/colors';
import {Box} from '@mui/system';
import React, {useState} from 'react';
import {signup} from '../../api/users';
import {loginUser} from '../../helpers/authHelper';
import {Link, useNavigate} from 'react-router-dom';
import Copyright from '../Copyright';
import ErrorAlert from '../ErrorAlert';
import {contains, isEmail, isLength} from 'validator';
import 'react-icons/ai';
import 'react-icons/ri';
import {AiFillGift} from 'react-icons/ai';

const SignupView = () => {
    const navigate = useNavigate();
    const [serverError, setServerError] = useState('');
    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
                                                 username: '', email: '', password: '', role: 'User'
                                             });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const errors = validate();
        if (Object.keys(errors).length !== 0) {
            return;
        }
        const data = await signup(formData);

        if (data.error) {
            setServerError(data.error);
        } else {
            loginUser(data);
            navigate('/');
        }
    };

    const validate = () => {
        const errors = {};

        if (!isLength(formData.username, {min: 6, max: 30})) {
            errors.username = 'Must be between 6 and 30 characters long';
        }

        if (contains(formData.username, ' ')) {
            errors.username = 'Must contain only valid characters';
        }

        if (!isLength(formData.password, {min: 8})) {
            errors.password = 'Must be at least 8 characters long';
        }

        if (!isEmail(formData.email)) {
            errors.email = 'Must be a valid email address';
        }

        setErrors(errors);

        return errors;
    };

    return (<Container maxWidth={'xs'} sx={{mt: {xs: 2, md: 6}}}>
        <Stack alignItems="center">
            <Typography
                variant="h2"
                color="text.secondary"
                sx={{mb: 6}}
                className="generic-yellow-txt"
            >
                <Link to="/" color="inherit" underline="none">
                    <AiFillGift
                        size={50}
                        onClick={() => navigate('/')}
                        style={{color: '#fff4d6', marginRight: '10px'}}
                    />
                    GrubGift
                </Link>
            </Typography>
            <Typography
                variant="h5"
                gutterBottom
                className="generic-yellow-txt smaller-text"
            >
                Sign Up
            </Typography>
            <Typography
                color="text.secondary"
                className="generic-yellow-txt smaller-text"
            >
                Already have an account? <Link to="/login">Login</Link>
            </Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField
                    label="Username"
                    fullWidth
                    margin="normal"
                    autoFocus
                    required
                    id="username"
                    name="username"
                    onChange={handleChange}
                    error={errors.username !== undefined}
                    helperText={errors.username}
                    className="input-field-txt"
                />
                <TextField
                    label="Email Address"
                    fullWidth
                    margin="normal"
                    autoComplete="email"
                    required
                    id="email"
                    name="email"
                    onChange={handleChange}
                    error={errors.email !== undefined}
                    helperText={errors.email}
                    className="input-field-txt"
                />
                <TextField
                    label="Password"
                    fullWidth
                    required
                    margin="normal"
                    autoComplete="password"
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    error={errors.password !== undefined}
                    helperText={errors.password}
                    className="input-field-txt"
                />
                <RadioGroup
                    row
                    aria-labelledby="role"
                    value={formData.role}
                    name="role"
                    id = "role"
                    onChange={handleChange}
                >
                    <FormControlLabel color="text.secondary"
                                      className="generic-yellow-txt smaller-text"
                                      value="User"
                                      control={<Radio
                                          sx={{
                                              color: teal[800]
                                          }}/>}
                                      label="User"/>
                    <FormControlLabel color="text.secondary"
                                      className="generic-yellow-txt smaller-text"
                                      value="Moderator"
                                      control={<Radio
                                          sx={{
                                              color: teal[800]
                                          }}/>}
                                      label="Moderator"/>
                    <FormControlLabel color="text.secondary"
                                      className="generic-yellow-txt smaller-text"
                                      value="Promoter"
                                      control={<Radio
                                          sx={{
                                              color: teal[800]
                                          }}/>}
                                      label="Promoter"/>
                </RadioGroup>
                <ErrorAlert error={serverError}/>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className="yellow-btn"
                    sx={{my: 2}}
                >
                    Sign Up
                </Button>
            </Box>
            <Box sx={{mt: 3}}>
                <Copyright/>
            </Box>
        </Stack>
    </Container>);
};

export default SignupView;
