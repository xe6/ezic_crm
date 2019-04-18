import React, { Component } from "react";
import { MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdbreact";
import RegisterForm from "../stateless/RegisterForm";

class Auth extends Component {
  constructor(props) {
    super(props);
    //===============|Binding This to ev. handlers|===============
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    //============================================================
  }

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
          toggle={this.toggle("Register")}
          isOpen={this.state.modalRegister}
          size="lg"
          position="center"
        >
          <MDBModalHeader>Login</MDBModalHeader>
          <MDBModalBody
            className="text-center"
            style={{ background: "#000", color: "#fff" }}
          >
            <RegisterForm submit={this.handleRegister} />

            <MDBBtn color="secondary" onClick={this.toggle("Register")}>
              Close
            </MDBBtn>
          </MDBModalBody>
        </MDBModal>
      </React.Fragment>
    );
  }

  handleLogin(e) {
    console.log("Login clicked");
  }

  handleRegister(e) {
    e.preventDefault();
    console.log("Register clicked");
  }
}

export default Auth;
