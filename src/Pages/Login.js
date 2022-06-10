import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import LoginPic from "../Images/loginPic.jpg";

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const emailId = e.currentTarget.email.value;
    const passwordS = e.currentTarget.password.value;
    console.log({ emailId, passwordS });
    if (form.checkValidity()) {
      fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email: emailId,
          password: passwordS,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container className="vh-100">
      <Row>
        <Col sm={5} className="d-flex flex-column justify-content-center">
          <h1 className="text-center fw-bolder mb-2">Welcome Back</h1>
          <h6 className="text-center mb-4">Please Login with your email</h6>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} controlId="validationCustom01">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="name@example.com"
                    required
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row>
              <Form.Group as={Col} controlId="validationCustom03">
                <FloatingLabel
                  controlId="floatingInput"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    name="password"
                    placeholder="City"
                    required
                  />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Button type="submit" className="w-100 py-2 btn-dark">
              Login
            </Button>
            <div className="mt-3 d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <input type="checkbox" name="checkbox" id="checkbox" />
                <label className="ms-2" htmlFor="checkbox">
                  Remember me
                </label>
              </div>
              <a href="/forget-password">Forget Password?</a>
            </div>
          </Form>
        </Col>
        <Col sm={7}>
          <div className="w-100">
            <img className="w-100" src={LoginPic} alt="login pic" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
