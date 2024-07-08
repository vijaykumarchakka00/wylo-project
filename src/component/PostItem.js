import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { updateFormDataReducer, deleteFormDataReducer } from "./redux/FormSclice"; // Import delete action
import { useNavigate } from "react-router-dom";
import './index.css';

function PostItem() {
  const [show, setShow] = useState(false);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);
  const [formValues, setFormValues] = useState({ Title: "", message: "" });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const dispatch = useDispatch();
  const FormDataValues = useSelector((state) => state.formdata.FormDataArray);

  const handleClose = () => {
    setShow(false);
    setSelectedPostIndex(null);
    setFormValues({ Title: "", message: "" });
  };

  const handleShow = (index) => {
    setSelectedPostIndex(index);
    setFormValues(FormDataValues[index]);
    setShow(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleUpdate = () => {
    dispatch(
      updateFormDataReducer({
        index: selectedPostIndex,
        updatedPost: formValues,
      })
    );
    setShowSuccessMessage(true);
    handleClose();
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide the message after 3 seconds
  };

  const handleDelete = (index) => {
    dispatch(deleteFormDataReducer(index));
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide the message after 3 seconds
  };

  const navigate = useNavigate();
  const CreateButton = () => {
    navigate("/CreateBlog");
  };

  return (
    <Container>
      {showSuccessMessage && (
        <Alert variant="success" onClose={() => setShowSuccessMessage(false)} dismissible>
          Action successful!
        </Alert>
      )}
      {FormDataValues && FormDataValues.length > 0 ? (
        <Row className="justify-content-center">
          {FormDataValues.map((each, index) => (
            <Col md={4} key={index}>
              <Card className="p-2 h-100 border shadow-sm mb-2">
                <div>
                  <Button
                    variant="outline-secondary"
                    className="rounded-5 fs-6"
                    onClick={() => handleShow(index)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="rounded-5 fs-6 ms-2"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                  <h4 className="border-bottom m-0 py-1 ellipsis-col-2 ellipsis-var text-capitalize text-info-emphasis">
                    {each.Title}
                  </h4>
                  <p className="text-gray pt-3">{each.message}</p>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="text-center mt-4">
          <p className="display-5 fst-italic">No posts to display.</p>
          <Button variant="link" onClick={CreateButton}>
            Click here to Create
          </Button>
        </div>
      )}

      {selectedPostIndex !== null && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{formValues.Title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="Title"
                  value={formValues.Title}
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Text Area</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleUpdate}>
              Update
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default PostItem;
