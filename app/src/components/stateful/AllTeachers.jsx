import React, { Component } from 'react';
import { aFetch } from "../../utils";
import Teacher from "../stateless/Teacher";
import { MDBRow, MDBBtn, MDBModal, MDBModalHeader, MDBModalBody } from "mdbreact";
import AddTeacher from "./modals/AddTeacher";

class AllTeachers extends Component {
    state = {
        hasData: false,
        teachers: [],
        errorMsg: "",
        modalAdd: false
    };

     //Modal display toggler
     toggle = (nr, id) => () => {
        if(id){
            this.setState({
                currentItem: id
            })
        }

        let modalName = "modal" + nr;
        this.setState({
            [modalName]: !this.state[modalName]
        });
    };

    componentDidMount() {
       this.fetchTeachers();
    }

    render() {
        return (
            <React.Fragment>
                {/* MODALS */}
                <MDBModal
                    toggle={this.toggle("Add")}
                    isOpen={this.state.modalAdd}
                    size="md"
                    position="center"
                >
                    <MDBModalHeader>Add Teacher</MDBModalHeader>
                    <MDBModalBody
                        className="text-center"
                        style={{ background: "#f4eded", color: "#111" }}
                    >
                        <AddTeacher requestRefetch={() => this.fetchTeachers()}></AddTeacher>

                        <MDBBtn outline color="primary" onClick={this.toggle("Add")}>
                            Close
                        </MDBBtn>
                    </MDBModalBody>
                </MDBModal>

                <MDBBtn outline color="success" onClick={this.toggle("Add")}>Add Teacher</MDBBtn>
                <MDBRow className="justify-content-center mt-5">
                    
                    {this.state.hasData
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
                        <h1>{this.state.errorMsg}</h1>}
                </MDBRow>
            </React.Fragment>


        )
    }

    fetchTeachers(){
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
}

export default AllTeachers;