import React, { Component } from "react";
import { MDBBtn } from "mdbreact";

class AuthButtons extends Component {
  constructor(props) {
    super(props);
    //===============|Binding This to ev. handlers|===============
    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
    //============================================================
  }

  render() {
    return (
      <React.Fragment>
        <MDBBtn gradient="peach" onClick={e => this.handleLogin(e)}>
          Login
        </MDBBtn>
        <MDBBtn gradient="purple" onClick={e => this.handleRegister(e)}>
          Register
        </MDBBtn>
      </React.Fragment>
    );
  }

  handleLogin(e) {
      console.log("Login clicked");
  }

  handleRegister(e) {
      console.log("Register clicked");
  }
}

export default AuthButtons;
