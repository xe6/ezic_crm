import React from "react";
import { MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBView, MDBMask, MDBCardFooter, MDBIcon } from "mdbreact";

const Course = ({ _id, _name, _status, _price}) => {
    return (
        <React.Fragment>
            <MDBCol lg="6" xl="5" className="mb-3">
                <MDBCard className="d-flex mb-5">
                    <MDBView>
                        <img src="https://mdbootstrap.com/img/Mockups/Horizontal/6-col/pro-profile-page.jpg" alt="Project" className="img-fluid" />
                        <MDBMask overlay="white-slight" />
                    </MDBView>
                    <MDBCardBody>
                        <MDBCardTitle className="font-bold mb-3">
                            <strong>{_name}</strong>
                        </MDBCardTitle>
                        <MDBCardText>{_status}</MDBCardText>
                        <MDBCardText>{_price}</MDBCardText>
                    </MDBCardBody>
                    <MDBCardFooter className="links-light profile-card-footer">
                        <span className="right">
                            <a className="p-2" href="#">
                                Show More
                      <MDBIcon icon="image" className="ml-1" />
                            </a>
                        </span>
                    </MDBCardFooter>
                </MDBCard>
            </MDBCol>
        </React.Fragment>
    )
}

export default Course;







