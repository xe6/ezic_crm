import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBModalFooter,
  MDBIcon,
  MDBCardHeader,
  MDBBtn,
  MDBInput
} from "mdbreact";

const RegisterForm = (props) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <MDBCardBody style={{background: "#111", color: "#fff"}}>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Register:
                </h3>
              </MDBCardHeader>
              <form onSubmit = {props.submit}>
                <div className="grey-text">
                  <MDBInput
                    label="Type your login"
                    icon="user-circle"
                    group
                    type="text"
                    name="login"
                  />
                  <MDBInput
                    label="Type your password"
                    icon="lock"
                    group
                    type="password"
                    validate
                    name="password"
                  />
                  <MDBInput
                    label="Type your first name"
                    icon="address-card"
                    group
                    type="text"
                    name="firstName"
                  />
                  <MDBInput
                    label="Type your last name"
                    icon="address-card"
                    group
                    type="text"
                    name="lastName"
                  />
                  <MDBInput
                    label="Type your email"
                    icon="envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    name="email"
                  />
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="light-blue"
                  className="mb-3"
                  type="submit"
                >
                  Register
                </MDBBtn>
              </div>
              </form>
              <MDBModalFooter>
                
              </MDBModalFooter>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default RegisterForm;