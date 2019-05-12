import React, { Component } from "react";
import { aFetch } from "../../utils";
import {
  MDBRow,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody
} from "mdbreact";

class AllDeals extends Component {
  state = {
    hasData: false,
    deals: [],
    errorMsg: "",
    modalAdd: false,
    modalEdit: false,
    modalDelete: false,
    currentItem: 0
  };

  constructor(props) {
    super(props);
    //this.fetchDeals = this.fetchDeals.bind(this);
  }

  //Modal display toggler
  toggle = (nr, id) => () => {
    if (id) {
      this.setState({
        currentItem: id
      });
    }

    let modalName = "modal" + nr;
    this.setState({
      [modalName]: !this.state[modalName]
    });
  };

  componentDidMount() {
    // this.fetchDeals();
  }

  render() {
    return (
      <React.Fragment>
        <MDBBtn outline color="success">
          Add Deal
        </MDBBtn>

        <MDBRow className="justify-content-center">
          <MDBTable>
            <MDBTableHead color="primary" textWhite>
              <tr>
                <th>#</th>
                <th>Contact</th>
                <th>Extra Info</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {this.state.hasData ? (
                this.state.clients.map(client => {
                  return (
                    <tr>
                      <td>{client.id}</td>
                      <td>{client.contact_name}</td>
                      <td>{client.phone_number}</td>
                      <td>{client.email}</td>
                      <td>{client.status}</td>
                      <MDBBtn
                        outline
                        color="info"
                        onClick={this.toggle("Edit", client.id)}
                      >
                        Edit
                      </MDBBtn>
                      <MDBBtn
                        outline
                        color="danger"
                        onClick={this.toggle("Delete", client.id)}
                      >
                        Delete
                      </MDBBtn>
                    </tr>
                  );
                })
              ) : (
                <h1>{this.state.errorMsg}</h1>
              )}
            </MDBTableBody>
          </MDBTable>
        </MDBRow>
      </React.Fragment>
    );
  }

  // fetchDeals() {
  //     aFetch("/secured/deals").then((srvResponse) => {
  //         if (srvResponse.success) {
  //             this.setState({
  //                 hasData: true,
  //                 deals: srvResponse.data
  //             });
  //         } else {
  //             this.setState({
  //                 hasData: false,
  //                 errorMsg: srvResponse.error
  //             })
  //         }

  //     });
  // }
}

export default AllDeals;
