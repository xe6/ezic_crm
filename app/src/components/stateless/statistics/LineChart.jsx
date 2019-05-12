import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader } from 'mdbreact';
import { Line } from 'react-chartjs-2';

const LineChart = ({data, period}) => { 

    let newQ = [];
    let successQ = [];

    if (data) {
        data.map((item) => {
            switch (item.stage) {
                case "new":
                    return newQ.push(item);
                case "success":
                    return successQ.push(item);
                default:
                    return null
            }
        });
        console.log(data)
    } else return <h1>Loading...</h1>

    const dataLine = {
        labels: period ? period.map(item => item.month) : [],
        datasets: [
          {
            label: 'New deals',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(66, 215, 244,0.4)',
            borderColor: 'rgba(66, 215, 244,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(66, 215, 244,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(66, 215, 244,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: newQ.map((item) => {
                return item.quantity
            })
          }, {
            label: 'Success deals',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(247, 70, 74,0.4)',
            borderColor: 'rgba(247, 70, 74,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(247, 70, 74,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(247, 70, 74,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: successQ.map((item) => {
                return item.quantity
            })
          }
        ]
    };

    return (
        <MDBCol md="9" className="mb-4">
            <MDBCard className="mb-4">
            <MDBCardHeader>Deals statistics for the last year</MDBCardHeader>
            <MDBCardBody>
                <Line data={dataLine} options={{responsive: true }} />
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
}

export default LineChart;