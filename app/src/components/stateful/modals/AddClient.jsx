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

import SelectClientStatus from "../../stateless/SelectClientStatus";

import { aFetch } from "../../../utils/";

class AddClient extends Component {

    state = {
        pending: false,
        success: false,
        failure: false,
        failureMessage: ""
    }

    constructor(props) {
        super(props);
        this.contactRef = React.createRef();
        this.phoneRef = React.createRef();
        this.emailRef = React.createRef();
        this.statusRef = React.createRef();
        //===============|Binding This to ev. handler|===============

        //===========================================================
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody style={{ background: "#f4eded", color: "#111" }}>
                                <MDBCardHeader className="form-header dusty-grass-gradient rounded">
                                    <h3 className="my-3">
                                        {this.checkActionStatus()}
                                    </h3>
                                </MDBCardHeader>
                                <form onSubmit={(e) => this.handleAdd(e)}>
                                    <div>
                                        <MDBInput
                                            label="Contact Name"
                                            icon="user-circle"
                                            group
                                            type="text"
                                            name="contact_name"
                                            ref={this.contactRef}
                                            required
                                        />
                                        <MDBInput
                                            label="Phone Number"
                                            icon="phone"
                                            group
                                            type="text"
                                            validate
                                            name="phone"
                                            ref={this.phoneRef}
                                            required
                                        />
                                        <MDBInput
                                            label="Email"
                                            icon="envelope-open"
                                            group
                                            type="email"
                                            validate
                                            name="email"
                                            ref={this.emailRef}
                                            required
                                        />
                                        <SelectClientStatus ref={this.statusRef}></SelectClientStatus>
                                    </div>

                                    <div className="text-center mt-4">
                                        <MDBBtn
                                            outline
                                            color="success"
                                            className="mb-3"
                                            type="submit"
                                        >
                                            Add
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

    checkActionStatus() {
        if (this.state.pending) {
            return (
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }

        if (this.state.success) {
            return (
                <div style={{ color: "#00c851" }}>
                    <MDBIcon icon="check" />
                    <hr />
                    Client created.
                </div>
            )
        }

        if (this.state.failure) {
            return (
                <div style={{ color: "red" }}>
                    <MDBIcon icon="times" />
                    <hr />
                    <span>Oops! {this.state.failureMessage}</span>
                </div>

            )
        }

        return "Client Data";
    }

    handleAdd(e) {
        e.preventDefault();
        const clientData = {
            contact: this.contactRef.current.inputElementRef.current.value,
            phone: this.phoneRef.current.inputElementRef.current.value,
            email: this.emailRef.current.inputElementRef.current.value,
            status: this.statusRef.current.value
        }

        //Send request to server
        this.setState({
            pending: true
        });

        aFetch("/secured/clients", {
            method: "POST",
            body: JSON.stringify(clientData)
        }).then((srvResponse) => {
            if (srvResponse.success) {
                this.setState({
                    pending: false,
                    success: true,
                    failure: false
                });
            } else {
                this.setState({
                    pending: false,
                    success: false,
                    failure: true,
                    failureMessage: srvResponse.message
                });
            }
        }).catch((err) => {
            this.setState({
                pending: false,
                success: false,
                failure: true,
                failureMessage: err.message
            });
        });
    }

}

export default AddClient;