import React from 'react'
import { MDBCol, MDBRow } from 'mdbreact';
import logo from "../../assets/logo.png";
import icon404 from "../../assets/404.png";


const NotFoundPage =  () => {
  return (
    <React.Fragment>
      <div className="full">
        <MDBRow className="bad-gateway-row">
          <MDBCol md="8">
            <img alt="Error 404" className="img-thumbnail" hieght="200px" width="200px" src={logo}/>
            <h2 className="h2-responsive mt-3 mb-2">404. That's an error.</h2>
            <h4>The requested URL cannot be rendered.</h4>
          </MDBCol>
          <MDBCol md="4">
            <img alt="Error 404" className="img-fluid" src={icon404}/>
          </MDBCol>
        </MDBRow>
      </div>
    </React.Fragment>
  )
}

export default NotFoundPage;