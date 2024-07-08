import React from 'react';
import PostItem from './PostItem';
import { useNavigate } from 'react-router-dom';
import { Button, Container,Row } from 'react-bootstrap';


const PostDisplay = () => {
  const navigate = useNavigate();
  const BackButton = () =>{
    navigate('/home')
  }
  return (
    <div>
      <Container className='pt-2'>
      <Button variant="outline-primary" className="px-5 rounded-5" onClick={BackButton}>
            Back
          </Button>
        <Row className="bg-body-secondary justify-content-center mt-3 p-md-5 p-3 rounded-4">
          
          <PostItem />
        </Row>
      </Container>
    </div>
  );
}

export default PostDisplay;