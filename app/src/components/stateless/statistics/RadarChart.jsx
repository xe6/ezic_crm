import React from 'react';
import { MDBCol, MDBCard, MDBCardBody, MDBCardHeader, MDBRow } from 'mdbreact';
import { Radar } from 'react-chartjs-2';

const RadarChart = () => {
    
    const dataRadar = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
            {
              label: '#1',
              backgroundColor: 'rgba(245, 74, 85, 0.5)',
              data: [65, 59, 80, 81, 56, 55, 40]
            },
            {
              label: '#2',
              backgroundColor: 'rgba(90, 173, 246, 0.5)',
              data: [12, 42, 121, 56, 24, 12, 2]
            },
            {
              label: '#3',
              backgroundColor: 'rgba(245, 192, 50, 0.5)',
              data: [2, 123, 154, 76, 54, 23, 5]
            }
          ]
    };

    return (
        <MDBRow className="mb-4">
            <MDBCol md="12" lg="4" className="mb-4">
                <MDBCard className="mb-4">
                <MDBCardHeader>Radar chart</MDBCardHeader>
                <MDBCardBody>
                    <Radar data={dataRadar}  height={300} options={{responsive: true }} />
                </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    );
}

export default RadarChart;