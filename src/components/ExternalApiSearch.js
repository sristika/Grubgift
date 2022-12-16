import { useState } from 'react';
import { searchFood } from '../api/externalApi';
import Navbar from './Navbar';
import GoBack from './GoBack';
import { Card } from '@mui/material';
import {
  Button,
} from '@mui/material';

import {
  TextField,
  List,
  Link,
  Typography,
  Stack,
  Container,
} from '@mui/material';
import {useNavigate} from 'react-router-dom';

const ExternalApiSearch = () => {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  let [ hidden, sethidden ] = useState(true);
  const handleSearchChange = (e) => {
    if (e.target.value === '') {
      setQuestions([]);
      sethidden(true);
      navigate('/externalApi');
    } else {
      searchFood(e.target.value).then((resp) => {
        setQuestions(resp.items);
        console.log(questions);
        setSearch(e.target.value)
        navigate('/externalApi?' + new URLSearchParams({"criteria": search}));
      });
    }
  };

  const HandleDetailsRequest = (e) => {
    sethidden(false);
  };

  return (
    <Container>
      <Navbar />
      <GoBack />
      <Card className="light-yellow-container">
        <Stack alignItems="center">
          <Typography variant="h6" className="yellow-text">
            Find out everything you wanna know about food!
          </Typography>
          <TextField
            placeholder="Find facts..."
            size="small"
            className="find-facts-search"
            sx={{
              flexGrow: 1,
              maxWidth: 300,
              mb: '30px',
            }}
            fullWidth
            margin="normal"
            autoComplete="search"
            autoFocus
            id="externalSearcb"
            name="externalSearch"
            onChange={handleSearchChange}
          />
          <List sx={{ padding: 0, maxHeight: '100%', overflowY: 'auto' }}>
            {questions.slice(0, 10).map((eachItem, index) => {
              return (
                <Typography paragraph variant="body1">
                  <Link
                    key={index}
                    className="generic-link facts-link"
                    target={'_blank'}
                    href={eachItem.link}
                  >
                    <strong>{eachItem.title}</strong>
                  </Link>
                  <br/>
                  <div hidden={hidden}>
                    <span>Answer Count : {eachItem.answer_count}</span>
                    &nbsp;<span>View Count : {eachItem.view_count}</span>
                  </div>
                </Typography>
              );
            })}
          </List>
          <Button onClick={HandleDetailsRequest}>Details</Button>
        </Stack>
      </Card>
    </Container>
  );
};
export default ExternalApiSearch;
