import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';

const CreatePost = () => {
  const navigate = useNavigate();
  return (
    <Button
      sx={{
        whiteSpace: 'nowrap',
        gap: '0.2rem',
        '& .MuiButton-root': {
          borderColor: 'black',
          backgroundColor: 'black',
        },
      }}
      className="yellow-btn"
      variant="outlined"
      size="medium"
      onClick={() => navigate('/posts/create')}
    >
      <AiOutlinePlus style={{ flexShrink: 0 }} />
      <span>New Post</span>
    </Button>
  );
};

export default CreatePost;
