import React, { Component } from 'react'

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBAlert } from "mdbreact";
import { aFetch } from '../../utils';
import store from "../../redux/store";

class AddDeal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            success: false,
            coursesData: [],
            teachersData: [],
            clientsData: [],
            contact: "",
            extra: "",
            course: "",
            teacher: "",
            client: "",
            employee: "",
            stage: ""
        };
        this.contactRef = React.createRef();
        this.extraRef = React.createRef();
        this.courseRef = React.createRef();
        this.teacherRef = React.createRef();
        this.clientRef = React.createRef();
        this.employeeRef = React.createRef();
        this.stageRef = React.createRef();
    }

    componentDidMount() {
        aFetch("/secured/courses").then((data) => {
            this.setState({
                coursesData: data.data[0]
            })
        });

        aFetch("/secured/teachers").then((data) => {
            this.setState({
                teachersData: data.data
            })
        });

        aFetch("/secured/clients").then((data) => {
            this.setState({
                clientsData: data.data
            })
        });
    }

    render() {
        return (
            <MDBContainer>
                <MDBRow className="text-center">
                    <MDBCol md="6" style={{ margin: "0 auto" }}>
                        {this.state.success ? <MDBAlert color="success" >
                            Successfully created Deal instance!
                                </MDBAlert> : ""}
                        <form onSubmit={(e) => this.submitDeal(e)}>
                            <p className="h4 text-center py-4">Add Deal</p>
                            <label
                                htmlFor="defaultFormCardNameEx"
                                className="grey-text font-weight-light"
                            >
                                Contact Name
                </label>
                            <input
                                type="text"
                                id="defaultFormCardNameEx"
                                className="form-control"
                                ref={this.contactRef}
                            />
                            <br />
                            <hr />
                            <label
                                htmlFor="extra"
                                className="grey-text font-weight-light"
                            >
                                Extra
                </label>
                            <input
                                type="text"
                                id="extra"
                                className="form-control"
                                ref={this.extraRef}
                            />
                            <br />
                            <hr />
                            <label
                                htmlFor="client"
                                className="grey-text font-weight-light"
                            >
                                Client
                </label>
                            <hr />
                            <select ref={this.clientRef} className="browser-default custom-select">
                                <option disabled>Select Client</option>
                                {this.state.clientsData.map((client) => {
                                    if (client.status === "active" || "beneficial") {
                                        return <option value={client.id}>{client.contact_name}</option>
                                    }

                                })}
                            </select>
                            <hr />
                            <label
                                htmlFor="teacher"
                                className="grey-text font-weight-light"
                            >
                                Teacher
                </label>
                            <hr />
                            <select ref={this.teacherRef} className="browser-default custom-select">
                                <option disabled>Select Teacher</option>
                                {this.state.teachersData.map((teacher) => {
                                    return <option value={teacher.id}>{teacher.fio}</option>
                                })}
                            </select>
                            <hr />
                            <label
                                htmlFor="course"
                                className="grey-text font-weight-light"
                            >
                                Course
                </label>


                            <select ref={this.courseRef} className="browser-default custom-select">
                                <option disabled>Select Course</option>
                                {this.state.coursesData.map((course) => {
                                    return <option value={course.id}>{course.course_name}</option>
                                })}
                            </select>
                            <hr />
                            <label
                                htmlFor="stage"
                                className="grey-text font-weight-light"
                            >
                                Stage
                </label>
                            <select name="stage" ref={this.stageRef} className="browser-default custom-select">
                                <option disabled>Select Stage</option>
                                <option value="new">NEW</option>
                                <option value="contract_signed">CONTRACT SIGNED</option>
                                <option value="payment">PAYMENT</option>
                                <option value="success">SUCCESS</option>

                            </select>
                            <div className="text-center py-4 mt-3">
                                <MDBBtn className="btn btn-outline-purple" type="submit">
                                    CREATE
                                        <MDBIcon far icon="paper-plane" className="ml-2" />
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }

    submitDeal(e) {
        e.preventDefault();
        const dealData = {
            contact: this.contactRef.current.value,
            extra: this.extraRef.current.value,
            courseId: this.courseRef.current.value,
            teacherId: this.teacherRef.current.value,
            clientId: this.clientRef.current.value,
            employeeId: store.getState().auth.userData.id.toString()
        }

        aFetch("/secured/deals", {
            method: "POST",
            body: JSON.stringify(dealData)
        }).then((srvResponse) => {
            if (srvResponse.success) {
                this.setState({
                    success: true
                })
            } else {
                this.setState({
                    success: false
                })
            }

        })
    }
}

export default AddDeal;