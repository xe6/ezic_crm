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

const LoginForm = (props) => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBCard>
            <MDBCardBody style={{background: "#111", color: "#fff"}}>
              <MDBCardHeader className="form-header deep-blue-gradient rounded">
                <h3 className="my-3">
                  <MDBIcon icon="lock" /> Login:
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
                </div>

              <div className="text-center mt-4">
                <MDBBtn
                  color="success"
                  className="mb-3"
                  type="submit"
                >
                  Login
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

export default LoginForm;