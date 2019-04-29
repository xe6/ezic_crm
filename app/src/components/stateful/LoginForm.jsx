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
import { connect } from "react-redux";
import { execLoginRequest } from "../../redux/actions/auth";

class LoginForm extends Component {

  constructor(props) {
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
                    {this.checkAuthStatus()}
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
                      required
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      name="password"
                      ref={this.passwordRef}
                      required
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

  checkAuthStatus() {
    if (this.props.pending) {
      return (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )
    }

    if (this.props.success) {
      return (
        <div style={{ color: "#00c851" }}>
          <MDBIcon icon="check" />
          <hr />
          {this.props.userData ? `Welcome,${this.props.userData.firstName}!` : "Please login"} 
        </div>
      )
    }

    if (this.props.failure) {
      return (
        <div style={{ color: "red" }}>
          <MDBIcon icon="times" />
          <hr />
          <span>Oops! {this.props.failureMessage}</span>
        </div>

      )
    }

    return <MDBIcon icon="lock" />
  }

  handleLogin(e) {
    e.preventDefault();
    const userData = {
      login: this.loginRef.current.inputElementRef.current.value,
      password: this.passwordRef.current.inputElementRef.current.value
    }

    this.props.execLoginRequest(userData);
  }
}

const mapStateToProps = (state) => ({
  pending: state.auth.requestIsPending,
  success: state.auth.requestSucceeded,
  failure: state.auth.requestFailed,
  failureMessage: state.auth.failureMessage,
  userData: state.auth.userData
});

export default connect(
  mapStateToProps,
  { execLoginRequest }
)(LoginForm);