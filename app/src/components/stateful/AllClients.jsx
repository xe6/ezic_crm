import React, { Component } from 'react';
import { aFetch } from "../../utils";
import { MDBRow, MDBTable, MDBTableHead, MDBTableBody, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdbreact";

import AddClient from "./modals/AddClient";

class AllClients extends Component {
    state = {
        hasData: false,
        clients: [],
        errorMsg: "",
        modalAdd: false,
        modalEdit: false,
        modalDelete: false
    };

    constructor(props) {
        super(props);
        this.fetchClients.bind(this, this.fetchClients);
    }


    //Modal display toggler
    toggle = nr => () => {
        let modalName = "modal" + nr;
        this.setState({
            [modalName]: !this.state[modalName]
        });
    };

    componentDidMount() {
        this.fetchClients();
    }

    render() {
        return (
            <React.Fragment>
                <MDBBtn outline color="success" onClick={this.toggle("Add")}>Add Client</MDBBtn>

                {/* MODALS */}
                <MDBModal
                    toggle={this.toggle("Add")}
                    isOpen={this.state.modalAdd}
                    size="md"
                    position="center"
                >
                    <MDBModalHeader>Add Client</MDBModalHeader>
                    <MDBModalBody
                        className="text-center"
                        style={{ background: "#f4eded", color: "#111" }}
                    >
                        <AddClient requestRefetch={() => this.fetchClients()}></AddClient>

                        <MDBBtn outline color="primary" onClick={this.toggle("Add")}>
                            Close
                        </MDBBtn>
                    </MDBModalBody>
                </MDBModal>

                <MDBRow className="justify-content-center">

                    <MDBTable>
                        <MDBTableHead color="pink" textWhite>
                            <tr>
                                <th>#</th>
                                <th>Contact Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </MDBTableHead>
                        <MDBTableBody>
                            {this.state.hasData
                                ?
                                this.state.clients.map((client) => {
                                    return <tr>
                                        <td>{client.id}</td>
                                        <td>{client.contact_name}</td>
                                        <td>{client.phone_number}</td>
                                        <td>{client.email}</td>
                                        <td>{client.status}</td>
                                        <MDBBtn outline color="info" onClick={this.toggle("Edit")}>Edit</MDBBtn>
                                        <MDBBtn outline color="danger" onClick={this.toggle("Delete")}>Delete</MDBBtn>
                                    </tr>
                                })
                                :
                                <h1>{this.state.errorMsg}</h1>}
                        </MDBTableBody>
                    </MDBTable>
                </MDBRow>
            </React.Fragment>


        )
    }

    fetchClients() {
        aFetch("/secured/clients").then((srvResponse) => {
            if (srvResponse.success) {
                this.setState({
                    hasData: true,
                    clients: srvResponse.data
                });
            } else {
                this.setState({
                    hasData: false,
                    errorMsg: srvResponse.error
                })
            }

        });
    }
}

export default AllClients;