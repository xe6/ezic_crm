import React, { Component } from 'react';
import { aFetch } from "../../utils";
import Teacher from "../stateless/Teacher";

class AllTeachers extends Component {
    state = {
        hasData: false,
        teachers: [],
        errorMsg: ""
    };

    componentDidMount() {
        aFetch("/secured/teachers").then((srvResponse) => {
            if (srvResponse.success) {
                this.setState({
                    hasData: true,
                    teachers: srvResponse.data
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

            this.state.hasData
                ?
                this.state.teachers.map((teacher) => {
                    return <Teacher
                        key={teacher.id}
                        _id={teacher.id}
                        _fio={teacher.fio}
                        _salary={teacher.salary}
                        _contacts={teacher.contact_info}
                    />
                })
                :
                <h1>{this.state.errorMsg}</h1>
        )
    }
}

export default AllTeachers;