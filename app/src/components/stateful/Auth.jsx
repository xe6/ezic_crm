import React, { Component } from "react";
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdbreact";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";

class Auth extends Component {
  
  state = {
    modalLogin: false,
    modalRegister: false
  };

  //Model display toggler
  toggle = nr => () => {
    let modalName = "modal" + nr;
    this.setState({
      [modalName]: !this.state[modalName]
    });
  };

  render() {
    return (
      <React.Fragment>
        <MDBBtn gradient="peach" onClick={this.toggle("Login")}>
          Login
        </MDBBtn>
        <MDBBtn gradient="purple" onClick={this.toggle("Register")}>
          Register
        </MDBBtn>

        {/* MODALS */}
        <MDBModal
          toggle={this.toggle("Login")}
          isOpen={this.state.modalLogin}
          size="lg"
          position="center"
        >
          <MDBModalHeader>Login</MDBModalHeader>
          <MDBModalBody
            className="text-center"
            style={{ background: "#000", color: "#fff" }}
          >
            <LoginForm />

            <MDBBtn color="secondary" onClick={this.toggle("Login")}>
              Close
            </MDBBtn>
          </MDBModalBody>
        </MDBModal>

        <MDBModal
          toggle={this.toggle("Register")}
          isOpen={this.state.modalRegister}
          size="lg"
          position="center"
        >
          <MDBModalHeader>Register</MDBModalHeader>
          <MDBModalBody
            className="text-center"
            style={{ background: "#000", color: "#fff" }}
          >
            <RegisterForm />

            <MDBBtn color="secondary" onClick={this.toggle("Register")}>
              Close
            </MDBBtn>
          </MDBModalBody>
        </MDBModal>
      </React.Fragment>
    );
  }

}

export default Auth;
