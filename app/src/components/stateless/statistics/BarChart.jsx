import React from 'react';
import { MDBCol, MDBCard, MDBCardHeader, MDBCardBody, MDBRow } from 'mdbreact';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ data, period }) => {

    let activeQ = [];
    let enrolledQ = [];
    let goneQ = [];

    if (data) {
        data.map((item) => {
            switch (item.status) {
                case "active":
                    return activeQ.push(item);
                case "enrolled":
                    return enrolledQ.push(item);
                case "gone":
                    return goneQ.push(item);
                default:
                    return null
            }
        });
    } else return <h1>Loading...</h1>

    console.dir(activeQ);


    let dataBar = {
        labels: period ? period.map(item => item.month) : [],
        datasets: [
            {
                label: 'active',
                data: activeQ.map((item) => {
                    return item.quantity
                }),
                backgroundColor: 'rgba(245, 74, 85, 0.5)',
                borderWidth: 1
            }, {
                label: 'enrolled',
                data: enrolledQ.map((item) => {
                    return item.quantity
                }),
                backgroundColor: 'rgba(90, 173, 246, 0.5)',
                borderWidth: 1
            }, {
                label: 'gone',
                data: goneQ.map((item) => {
                    return item.quantity
                }),
                backgroundColor: 'rgba(245, 192, 50, 0.5)',
                borderWidth: 1
            }
        ]
    };

    const barChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                barPercentage: 1,
                gridLines: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)'
                }
            }],
            yAxes: [{
                gridLines: {
                    display: true,
                    color: 'rgba(0, 0, 0, 0.1)'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }

    return (
        <MDBRow className="mb-4">
            <MDBCol md="12" className="mb-4">
                <MDBCard className="mb-4">
                    <MDBCardHeader>Customer statistics</MDBCardHeader>
                    <MDBCardBody>
                        <Bar data={dataBar} height={500} options={barChartOptions} />
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export default BarChart;