import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import { aFetch } from "../../../utils";

class DeleteClient extends Component {
    state = {
        pending: false,
        success: false,
        failure: false,
        failureMessage: ""
    }

    constructor(props){
        super(props);
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol style={{ background: "#f4eded", color: "#111" }}>
                        <h3>Are you sure you want to <strong>delete</strong> the record?</h3>

                        <MDBBtn outline color="danger" onClick={() => this.handleDelete()}>Delete</MDBBtn>


                        <MDBBtn onClick={() => this.props.closeModal()} outline color="info">Cancel</MDBBtn>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

    handleDelete() {

        this.setState({
            pending: true,
            success: false,
            failure: false
        });

        aFetch("/secured/clients", {
            method: "DELETE",
            body: JSON.stringify({id: this.props.id})
        }).then((srvResponse) => {
            if (srvResponse.success) {
                this.setState({
                    pending: false,
                    success: true,
                    failure: false
                });

                this.props.requestRefetch();
                this.props.closeModal();
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

export default DeleteClient;