import React, { Component } from 'react';
import { aFetch } from "../../utils";
import { MDBRow } from "mdbreact";
import Course from "../stateless/Course";

class AllCourses extends Component {
    state = {
        hasData: false,
        courses: [],
        errorMsg: ""
    };

    componentDidMount() {
        aFetch("/secured/courses").then((srvResponse) => {
            if (srvResponse.success) {
                this.setState({
                    hasData: true,
                    courses: srvResponse.data
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
                    {this.state.hasData
                        ?
                        this.state.courses.map((course) => {
                            return <Course
                                key={course.id}
                                _id={course.id}
                                _name={course.course_name}
                                _price={course.price_per_month}
                                _status={course.status}
                            />
                        })
                        :
                        <h1>{this.state.errorMsg}</h1>}
                </MDBRow>
            </React.Fragment>


        )
    }
}

export default AllCourses;