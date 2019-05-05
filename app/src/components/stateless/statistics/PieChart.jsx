import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon } from 'mdbreact';
import { Pie } from 'react-chartjs-2';

const PieChart = ({data}) => {
    console.log("PIE CHART - ", data)
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
            </MDBCol>
        </MDBRow>
    );
}

export default PieChart;