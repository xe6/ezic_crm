import React from 'react';
import { MDBRow, MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';

const BadgesStats = ({data}) => {
    console.log("BADGES - ", data)
    return (
        <MDBRow className="mb-4">
            <MDBCol md="4" className="mb-4">
                <MDBCard className="mb-4">
                    <MDBCardHeader>Rivals' average prices</MDBCardHeader>
                    <MDBCardBody>
                        <MDBListGroup className="list-group-flush">
                            {   data ? 
                                    data.map(course => {
                                        return  <MDBListGroupItem>
                                                    {course.course_name}
                                                    <MDBBadge color="danger-color" pill className="float-right">
                                                        {course.avg_sum}
                                                        <MDBIcon icon="arrow-up" className="ml-1"/>
                                                    </MDBBadge>
                                                </MDBListGroupItem>
                                    })
                                : ""
                            }
                        </MDBListGroup>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export default BadgesStats;