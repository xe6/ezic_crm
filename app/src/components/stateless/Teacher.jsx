import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn } from "mdbreact";

const Teacher = ({ _id, _fio, _contacts, _salary }) => {
    return (
        <React.Fragment>
            <MDBRow className="justify-content-center">
                <MDBCol sm="12" md="6" lg="3" className="mb-5">
                    <MDBCard>
                        <MDBCardImage className="img-fluid" src={`assets/teachers/${_id}.png`} />
                        <MDBCardBody>
                            <MDBCardTitle className="text-center mb-2 font-bold">{_fio}</MDBCardTitle>
                            <MDBCardTitle sub className="text-center indigo-text mb-2 font-bold">{_salary}</MDBCardTitle>
                            <MDBCardText>
                                <strong className="mb-2">{_contacts}</strong>
                            </MDBCardText>
                            <div className="row justify-content-end pr-1">
                                <MDBBtn size="sm" outline color="primary">More...</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </React.Fragment>
    )
}

export default Teacher;