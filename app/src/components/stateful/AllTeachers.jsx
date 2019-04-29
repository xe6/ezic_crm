import React, { Component } from 'react';
import { jFetch } from "../../utils";

class AllTeachers extends Component {
    state = {
        teachers: []
    };

    componentDidMount() {
        jFetch("/secured/teachers").then((res) => {
            console.log(res);
            this.setState({
                teachers: res
            });
        });   
    }

    render() {
        return (
            <h1>Teachers Here</h1>
        )
    }
}

export default AllTeachers;