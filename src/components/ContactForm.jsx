import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from '../api/axiosInstance';

const ContactForm = () => {
  const [status, setStatus] = useState(null); // For alert status

  // 🧠 Yup Validation Schema
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    message: Yup.string().required('Message is required'),
  });

  // 🔡 Initial Values
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  // 🚀 Form Submission
  const onSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post('http://localhost:5000/contact', values);
      console.log('Response from server:', response.data);
      setStatus('success');
      resetForm();
    } catch (error) {
      console.error('Error sending contact form:', error);
      setStatus('error');
    }
  };

  return (
    <div>
      <Container>
        <Row>
            <Col>
            <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="enquiry-form" data-aos="fade-up" data-aos-delay="200">
            <h3>Contact Us</h3>
            <p>
              "For all sales-related questions or partnership opportunities, feel free to reach out to our team — we're here to help!"
            </p>

            {status === 'success' && (
              <div style={{ color: 'green', marginBottom: '10px' }}>
                ✅ Message sent successfully!
              </div>
            )}
            {status === 'error' && (
              <div style={{ color: 'red', marginBottom: '10px' }}>
                ❌ Failed to send message. Please try again later.
              </div>
            )}

            <Row className="gy-4">
              <Col md={12}>
                <label>Name:</label>
                <Field type="text" name="name" className="form-control"/>
                <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
              </Col>
              <Col md={12}>
                <label>Email:</label>
                <Field type="email" name="email" className="form-control"/>
                <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
              </Col>
              <Col md={12}>
                <label>Phone:</label>
                <Field type="text" name="phone" className="form-control"/>
                <ErrorMessage name="phone" component="div" style={{ color: 'red' }} />
              </Col>
              <Col md={12}>
                <label>Message:</label>
                <Field as="textarea" name="message" className="form-control"/>
                <ErrorMessage name="message" component="div" style={{ color: 'red' }} />
              </Col>
              <Col md={12} className="text-center">
                <button type="submit">Send Message</button>
              </Col>
            </Row>
          </Form>
        </Formik>
          </Col>
          </Row>
      
      </Container>
    </div>
  );
};

export default ContactForm;
