import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBRow } from 'mdbreact';
import { Bar } from 'react-chartjs-2';

const BarChart = ({data}) => {
    console.log("BAR CHART - ",data)
    const dataBar = {
        labels: ['Dec','Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
        {
            label: 'active',
            data: data,
            backgroundColor: 'rgba(245, 74, 85, 0.5)',
            borderWidth: 1
        }, {
            label: 'enrolled',
            data: data,
            backgroundColor: 'rgba(90, 173, 246, 0.5)',
            borderWidth: 1
        }, {
            label: 'gone',
            data: data,
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
            <MDBCol md="8"className="mb-4">
                <MDBCard className="mb-4">
                    <MDBCardBody>
                        <Bar data={dataBar} height={500} options={barChartOptions} />
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export default BarChart;