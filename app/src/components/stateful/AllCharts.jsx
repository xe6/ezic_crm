import React, {Component} from "react";
import BarChart from "../stateless/statistics/BarChart";
import DoughnutChart from "../stateless/statistics/DoughnutChart";
import LineChart from "../stateless/statistics/LineChart";
import PieChart from "../stateless/statistics/PieChart";
import BadgesStats from "../stateless/statistics/BadgesStats";
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
                <BarChart data = {this.state.statistics.clients} period = {this.state.statistics.months}/>
                <BadgesStats data={this.state.statistics.rivals}/>
                <DoughnutChart data={this.state.statistics.managers}/>
                <LineChart data={this.state.statistics.deals}/>
                <PieChart data={this.state.statistics.leaving}/>
            </React.Fragment>
        );
    }
};

export default AllCharts;