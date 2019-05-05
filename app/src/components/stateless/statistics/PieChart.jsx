import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import { Pie } from 'react-chartjs-2';

const PieChart = () => {

    const dataPie = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
        {
            data: [300, 50, 100, 40, 120, 24, 52],
            backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360', '#ac64ad'],
            hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774', '#da92db']
        }
        ]
    }

    return (
        <MDBRow className="mb-4">
            <MDBCol md="4" className="mb-4">
                <MDBCard className="mb-4">
                    <MDBCardHeader>Pie chart</MDBCardHeader>
                    <MDBCardBody>
                        <Pie data={dataPie} height={300} options={{responsive: true}} />
                    </MDBCardBody>
                </MDBCard>
                <MDBCard className="mb-4">
                    <MDBCardBody>
                        <MDBListGroup className="list-group-flush">
                            <MDBListGroupItem>
                                Sales
                                <MDBBadge color="success-color" pill className="float-right">
                                    22%
                                    <MDBIcon icon="arrow-up" className="ml-1"/>
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                Traffic
                                <MDBBadge color="danger-color" pill className="float-right">
                                    5%
                                    <MDBIcon icon="arrow-down" className="ml-1"/>
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                Orders
                                <MDBBadge color="primary-color" pill className="float-right">
                                    14
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                Issues
                                <MDBBadge color="primary-color" pill className="float-right">
                                    123
                                </MDBBadge>
                            </MDBListGroupItem>
                            <MDBListGroupItem>
                                Messages
                                <MDBBadge color="primary-color" pill className="float-right">
                                    8
                                </MDBBadge>
                            </MDBListGroupItem>
                        </MDBListGroup>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export default PieChart;