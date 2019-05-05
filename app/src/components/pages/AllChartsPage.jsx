import React, {Component} from "react";
import Chart1 from "./sections/ChartSection1";
import Chart2 from "./sections/ChartSection2"
import { aFetch } from "../../utils";
// import AllCharts from "../stateful/AllChats";

class AllChartsPage extends Component {
    
    componentDidMount() {
        aFetch("/secured/charts").then(res => console.log(res.data))
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="tc">
                    <Chart1/>
                    <Chart2/>
                </div>
            </React.Fragment>
        );
    }
};

export default AllChartsPage;