import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from 'mdbreact';
import { Doughnut } from 'react-chartjs-2';

const DoughnutChart = ({data}) => {
    
    const dataDoughnut = {
        labels: data ? data.map(item => {
            return item.fio
        }) : [],
        datasets: [{
            data: data ? data.map(item => {
                return item.deals_quantity
            }) : [],
            backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
            hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
        }]
    };

    return (
            <MDBCol md="5" className="mb-4">
                <MDBCard className="mb-4">
                <MDBCardHeader>Success deals made by managers for the last 3 months</MDBCardHeader>
                <MDBCardBody >
                    <Doughnut data={dataDoughnut}  height={300} options={{responsive: true }} />
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
    );
}

export default DoughnutChart;