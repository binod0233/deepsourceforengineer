import React, { useState, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import PhoneInput from "react-phone-number-input";
import emailjs from "@emailjs/browser";

const ContactUsForm = () => {
  const form = useRef();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const submitFormhandler = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zd7zc21",
        "template_h562t3q",
        form.current,
        "UD1lBl5a6755saSKU"
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
        },
        (error) => {
          alert("There seems to be an error. Please try again later.");
        }
      );
  };

  return (
    <div className="pt-5 ">
      <Form ref={form} onSubmit={submitFormhandler} className="bg-white ">
        <Row>
          <Col xs={12} md={6}>
            <Form.Group
              className="mb-3"
              controlId="fullName"
              style={{ display: "none" }}
            >
              <Form.Control
                placeholder="Site Name"
                value="CDR For Engineer"
                readonly
                className="inputField"
                name="subject"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label className="contactUsFormLabel">First Name</Form.Label>
              <Form.Control
                placeholder="Ram"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="contactUsFormInput"
                name="firstName"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label className="contactUsFormLabel">Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Humagain"
                value={lastName}
                className="contactUsFormInput"
                onChange={(e) => setLastName(e.target.value)}
                name="lastName"
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="my-3">
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label className="contactUsFormLabel">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="contactUsFormInput"
                name="email"
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={6}>
            <Form.Group controlId="contactNumber">
              <Form.Label className="contactUsFormLabel">Phone</Form.Label>

              <PhoneInput
                placeholder="Enter phone number"
                value={phone}
                onChange={setPhone}
                name="phone"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="message">
          <Form.Label className="contactUsFormLabel">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={8}
            placeholder="Write a message"
            value={message}
            className="contactUsFormInput"
            onChange={(e) => setMessage(e.target.value)}
            name="message"
          />
        </Form.Group>
        <Row className="d-flex align-items-center justify-content-end ">
          <Button
            className="formSubmitButton p-4"
            variant="primary"
            type="submit"
            style={{ border: "none", background: "#3D1F91" }}
          >
            Send Message
          </Button>
        </Row>
      </Form>
    </div>
  );
};

export default ContactUsForm;
