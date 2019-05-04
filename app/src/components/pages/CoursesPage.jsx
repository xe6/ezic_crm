import React from 'react'
import { MDBCol, MDBRow } from 'mdbreact';
import AllCourses from "../stateful/AllCourses";

const CoursesPage = () => {
  return (
    <React.Fragment>
      <MDBRow className="justify-content-center">
        <MDBCol md="6" lg="9">
          <section className="text-center pb-3">
            <MDBRow className="d-flex justify-content-center">
              <AllCourses></AllCourses>
            </MDBRow>
          </section>
        </MDBCol>
      </MDBRow>
    </React.Fragment>
  );
}

export default CoursesPage;