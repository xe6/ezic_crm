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

import { aFetch } from "../../../utils/";

class AddTeacher extends Component {

    state = {
        pending: false,
        success: false,
        failure: false,
        failureMessage: ""
    }

    constructor(props) {
        super(props);
        this.fioRef = React.createRef();
        this.contactRef = React.createRef();
        this.salaryRef = React.createRef();
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
                                            label="FIO"
                                            icon="user-circle"
                                            group
                                            type="text"
                                            name="contact_name"
                                            ref={this.fioRef}
                                            required
                                        />
                                        <MDBInput
                                            label="Contact"
                                            icon="phone"
                                            group
                                            type="text"
                                            validate
                                            name="phone"
                                            ref={this.contactRef}
                                            required
                                        />
                                        <MDBInput
                                            label="Salary"
                                            icon="envelope-open"
                                            group
                                            type="number"
                                            validate
                                            name="salary"
                                            ref={this.salaryRef}
                                            required
                                        />
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

        return "Teacher Data";
    }

    handleAdd(e) {
        e.preventDefault();
        const teacherData = {
            fio: this.fioRef.current.inputElementRef.current.value,
            contact: this.contactRef.current.inputElementRef.current.value,
            salary: this.salaryRef.current.inputElementRef.current.value
        }

        //Send request to server
        this.setState({
            pending: true,
            success: false,
            failure: false
        });

        aFetch("/secured/teachers", {
            method: "POST",
            body: JSON.stringify(teacherData)
        }).then((srvResponse) => {
            if (srvResponse.success) {
                this.setState({
                    pending: false,
                    success: true,
                    failure: false
                });

                this.props.requestRefetch();
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

export default AddTeacher;