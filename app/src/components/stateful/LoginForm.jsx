import React, { Component } from "react";
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

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();
    //===============|Binding This to ev. handler|===============
    this.handleLogin = this.handleLogin.bind(this);
    //===========================================================
  }

  render() {
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBCard>
              <MDBCardBody style={{ background: "#111", color: "#fff" }}>
                <MDBCardHeader className="form-header deep-blue-gradient rounded">
                  <h3 className="my-3">
                    <MDBIcon icon="lock" /> Login:
                  </h3>
                </MDBCardHeader>
                <form onSubmit={(e) => this.handleLogin(e)}>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your login"
                      icon="user-circle"
                      group
                      type="text"
                      name="login"
                      ref={this.loginRef}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="password"
                      ref={this.passwordRef}
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
  }

  handleLogin(e) {
    e.preventDefault();
  }
}

export default LoginForm;