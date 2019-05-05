import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from 'mdbreact';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = () => {

    const dataDoughnut = {
        labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
        datasets: [{
            data: [300, 50, 100, 40, 120],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
        }]
    };

    return (
        <MDBRow className="mb-4">
            <MDBCol md="12" lg="4" className="mb-4">
                <MDBCard className="mb-4">
                <MDBCardHeader>Doughnut chart</MDBCardHeader>
                <MDBCardBody >
                    <Doughnut data={dataDoughnut}  height={300} options={{responsive: true }} />
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export default DoughnutChart;