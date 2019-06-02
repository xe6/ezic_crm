import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBBtn, MDBIcon } from "mdbreact";
import { aFetch } from "../../utils";


class Deal extends Component {


    constructor(props) {
        super(props);

        this.state = {
            hasData: false,
            errorMessage: "",
            id: this.props.match.params.id,
            contact: "",
            extra: "",
            course: "",
            teacher: "",
            client: "",
            employee: "",
            dynamic: {}
        };
    }

    componentDidMount() {
        aFetch(`/secured/deals/${this.state.id}`).then((srvResponse) => {
            if (srvResponse.success) {
                this.setState({
                    hasData: true,
                    id: srvResponse.data.deal_id,
                    contact: srvResponse.data.contact_number,
                    extra: srvResponse.data.extra_info,
                    course: srvResponse.data.course_name,
                    teacher: srvResponse.data.teacher,
                    client: srvResponse.data.client,
                    employee: srvResponse.data.employee_concluded,
                    dynamic: srvResponse.data.dynamic
                })
            } else {
                this.setState({
                    hasData: false,
                    errorMessage: srvResponse.error.message
                })
            }
        })
    }

    render() {
        return (
            this.state.hasData ?
                <MDBContainer>
                    <MDBRow className="text-center">
                        <MDBCol md="6">
                            <form>
                                <p className="h4 text-center py-4">Deal #{this.state.id}</p>
                                <label
                                    htmlFor="defaultFormCardNameEx"
                                    className="grey-text font-weight-light"
                                >
                                    Contact Name
                </label>
                                <input
                                    type="text"
                                    id="defaultFormCardNameEx"
                                    className="form-control"
                                    disabled
                                    value={`${this.state.contact}`}
                                />
                                <br />
                                <label
                                    htmlFor="defaultFormCardEmailEx"
                                    className="grey-text font-weight-light"
                                >
                                    Extra Info
                </label>
                                <hr />
                                <textarea disabled name="defaultFormCardTextAreaEx" id="defaultFormCardTextAreaEx" cols="50" rows="3">
                                    {this.state.extra}
                                </textarea>
                                <br />
                                <label
                                    htmlFor="course"
                                    className="grey-text font-weight-light"
                                >
                                    Course
                </label>
                                <input
                                    type="text"
                                    id="course"
                                    className="form-control"
                                    disabled
                                    value={`${this.state.course}`}
                                />
                                <div className="text-center py-4 mt-3">
                                    <MDBBtn className="btn btn-outline-purple" type="submit">
                                        {this.determineActionAvailable()}
                                        <MDBIcon far icon="paper-plane" className="ml-2" />
                                    </MDBBtn>
                                </div>
                            </form>
                        </MDBCol>
                        <MDBCol md="6" className="text-center">
                            <h3>Staging History</h3>
                            {this.state.dynamic.map((instance) => {
                                return (
                                    <React.Fragment>
                                        <hr />
                                        <p>
                                            Stage: <strong style={
                                                {
                                                    color: this.determineStageColor(instance.stage)
                                                }
                                            }>{instance.stage.toUpperCase()}</strong>
                                            <br />
                                            Stage Date: <strong>{new Date(instance.stage_date).toString().slice(0, 15)}</strong>

                                        </p>

                                        <hr />




                                    </React.Fragment>


                                )
                            })}
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                : <h1>{this.state.errorMessage}</h1>
        )
    }

    determineStageColor(instanceStage) {
        switch (instanceStage) {
            case "new": {
                return "blue"
            }
            case "contract_signed": {
                return "red"
            }
            case "payment": {
                return "purple"
            }
            case "success": {
                return "green"
            }
            default: {
                return "white"
            }
        }
    }

    determineActionAvailable() {
        let currentStage = this.state.dynamic[this.state.dynamic.length - 1].stage;
        switch (currentStage) {
            case "new": return "Sign Contract"
            case "contract_signed": return "Process Payment"
            case "payment": return "Close Deal ✔"
            case "success": return "Closed"
            default: return ""
        }
    }

}

export default Deal;







