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
import { execRegisterRequest } from "../../redux/actions/auth";

class RegisterForm extends Component {

  constructor(props) {
    super(props);
    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();
    this.firstNameRef = React.createRef();
    this.lastNameRef = React.createRef();
    this.emailRef = React.createRef();
    //===============|Binding This to ev. handler|===============
    this.handleRegister = this.handleRegister.bind(this);
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
                    {this.checkRegisterStatus()}
                  </h3>
                </MDBCardHeader>
                <form onSubmit={(e) => this.handleRegister(e)}>
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
                    <MDBInput
                      label="Type your first name"
                      icon="address-card"
                      group
                      type="text"
                      name="firstName"
                      ref={this.firstNameRef}
                    />
                    <MDBInput
                      label="Type your last name"
                      icon="address-card"
                      group
                      type="text"
                      name="lastName"
                      ref={this.lastNameRef}
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
                      ref={this.emailRef}
                      required
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
  }

  checkRegisterStatus() {
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
          Account was created successfully
        </div>
      )
    }

    if (this.props.failure) {
      return (
        <div style={{ color: "red" }}>
          <MDBIcon icon="times" />
          <hr />
          <span>Oops! Error occurred</span>
        </div>

      )
    }

    return <MDBIcon icon="lock" />
  }

  handleRegister(e) {
    e.preventDefault();

    const userData = {
      login: this.loginRef.current.inputElementRef.current.value,
      password: this.passwordRef.current.inputElementRef.current.value,
      firstName: this.firstNameRef.current.inputElementRef.current.value,
      lastName: this.lastNameRef.current.inputElementRef.current.value,
      email: this.emailRef.current.inputElementRef.current.value,
    }

    this.props.execRegisterRequest(userData);

  }
};

const mapStateToProps = (state) => ({
  pending: state.auth.requestIsPending,
  success: state.auth.requestSucceeded,
  failure: state.auth.requestFailed
});

export default connect(
  mapStateToProps,
  { execRegisterRequest }
)(RegisterForm);
