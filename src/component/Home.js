import React from "react";
import { Button,Container,Row,Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const Home = () => {
  const navigate = useNavigate();

  const goToCreateBlog = () => {
    navigate("/createblog");
  };
  const goToViewBlogs = () => {
    navigate("/postdisplay");
  };
  return (

    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col className="text-center">
          <h1 className="display-1 fst-normal mb-md-5 text-info-emphasis">WYLO BLOGS</h1>
          <Button variant="outline-primary" onClick={goToCreateBlog} className="m-2 py-md-3 px-md-5 rounded-5">
            Create Blog
          </Button>
          <Button variant="success" onClick={goToViewBlogs} className="m-2 py-md-3 px-md-5 rounded-5">
            View All Blogs
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
