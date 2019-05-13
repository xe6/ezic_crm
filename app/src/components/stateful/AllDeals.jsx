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
  MDBModalBody,
  NavLink
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
    this.fetchDeals = this.fetchDeals.bind(this);
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
    this.fetchDeals();
  }

  render() {
    return (
      <React.Fragment>
        <MDBBtn outline color="success">
          Add Deal
        </MDBBtn>

        <MDBRow className="justify-content-center">
          <MDBTable>
            <MDBTableHead color="primary" textBlack>
              <tr>
                <th>#</th>
                <th>Contact</th>
                <th>Extra Info</th>
                <th>Course</th>
                <th>Teacher</th>
                <th>Client</th>
                <th>Employee</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              {this.state.hasData ? (
                this.state.deals.map(deal => {
                  return (
                    <tr>
                      <td>{deal.deal_id}</td>
                      <td>{deal.contact_number}</td>
                      <td>{deal.extra_info}</td>
                      <td>{deal.course_name}</td>
                      <td>{deal.teacher}</td>
                      <td>{deal.client}</td>
                      <td>{deal.employee_concluded}</td>

                      <div className="text-center">
                        <MDBBtn outline color="primary" onClick={(e) => this.showDeal(deal.deal_id)}>SHOW</MDBBtn>
                      </div>
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

  fetchDeals() {
    aFetch("/secured/deals").then((srvResponse) => {
      if (srvResponse.success) {
        this.setState({
          hasData: true,
          deals: srvResponse.data[0]
        });
      } else {
        this.setState({
          hasData: false,
          errorMsg: srvResponse.error
        })
      }

    });
  }

  showDeal(id) {
    let url = `${window.location.href}/${id}`
    window.location.href = url;
  }
}

export default AllDeals;
