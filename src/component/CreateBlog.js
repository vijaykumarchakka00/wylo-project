import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFormDataReducer } from "./redux/FormSclice";

function FormExample() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const schema = yup.object().shape({
    Title: yup.string().required("Title is required"),
    message: yup.string().required("Message is required"),
  });

  const BackButton = () => {
    navigate("/home");
  };

  const formHandle = (values, { resetForm }) => {
    try {
      dispatch(addFormDataReducer(values));
      resetForm();
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      setTimeout(() => setShowSuccessMessage(false), 3000); // Hide the message after 3 seconds
    } catch (error) {
      setShowErrorMessage(true);
      setShowSuccessMessage(false);
      setTimeout(() => setShowErrorMessage(false), 3000); // Hide the message after 3 seconds
    }
  };

  return (
    <Container className="pt-2">
      <Button variant="outline-primary" className="px-5 rounded-5" onClick={BackButton}>
        Back
      </Button>
      {showSuccessMessage && (
        <div className="alert alert-success mt-3" role="alert">
          Blog submitted successfully!
        </div>
      )}
      {showErrorMessage && (
        <div className="alert alert-danger mt-3" role="alert">
          There was an error submitting the Blog.
        </div>
      )}
      <Formik
        validationSchema={schema}
        onSubmit={formHandle}
        initialValues={{
          Title: "",
          message: "",
        }}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          touched,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Row className="bg-body-secondary justify-content-center mt-3 p-md-5 p-3 rounded-4">
              <Col md={4}>
                <Form.Group
                  controlId="validationFormik101"
                  className="position-relative mb-3"
                >
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="Title"
                    value={values.Title}
                    onChange={handleChange}
                    isValid={touched.Title && !errors.Title}
                    isInvalid={!!errors.Title}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.Title}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Textarea</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    value={values.message}
                    onChange={handleChange}
                    isValid={touched.message && !errors.message}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>
                <Button type="submit" className="w-100 rounded-5">Submit</Button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
}

export default FormExample;
