import React, { Component } from 'react';
import { aFetch } from "../../utils";
import { MDBRow, MDBTable, MDBTableHead, MDBTableBody } from "mdbreact";

class AllClients extends Component {
    state = {
        hasData: false,
        clients: [],
        errorMsg: ""
    };

    componentDidMount() {
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

    render() {
        return (
            <React.Fragment>
                <MDBRow className="justify-content-center">
                    <MDBTable>
                        <MDBTableHead color="pink" textWhite>
                            <tr>
                                <th>#</th>
                                <th>Contact Name</th>
                                <th>Phone Number</th>
                                <th>Email</th>
                                <th>Status</th>
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
}

export default AllClients;