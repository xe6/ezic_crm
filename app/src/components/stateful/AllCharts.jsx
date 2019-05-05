import React, {Component} from "react";
import BarChart from "../stateless/statistics/BarChart";
import DoughnutChart from "../stateless/statistics/DoughnutChart";
import LineChart from "../stateless/statistics/LineChart";
import PieChart from "../stateless/statistics/PieChart";
import RadarChart from "../stateless/statistics/RadarChart";
import { aFetch } from "../../utils";

class AllCharts extends Component {
    state = {
        hasData: false,
        statistics: {},
        errorMsg: ""
    };

    componentDidMount() {
        aFetch("/secured/charts").then((srvResponse) => {
            if (srvResponse.success) {
                this.setState({
                    hasData: true,
                    statistics: srvResponse.data
                });
                console.log(this.state.statistics)
            } else {
                this.setState({
                    hasData: false,
                    errorMsg: srvResponse.error
                })
            }

        });
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="tc">
                    <BarChart/>
                    <DoughnutChart/>
                    <LineChart/>
                    <PieChart/>
                    <RadarChart/>
                </div>
            </React.Fragment>
        );
    }
};

export default AllCharts;