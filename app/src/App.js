import React, { Component } from 'react';
import Routes from '../src/components/Routes';
import TopNavigation from './components/topNavigation';
import SideNavigation from './components/sideNavigation';
import Footer from './components/Footer';
import './index.css';
import { execWhoamiRequest } from "./redux/actions/auth";
import { connect } from "react-redux";

class App extends Component {

  componentDidMount() {
    this.props.execWhoamiRequest();
  }

  render() {
    return (
      <div className="flexible-content">
        <TopNavigation />
        <SideNavigation />
        <main id="content" className="p-5">
          <Routes />
        </main>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userData: state.auth.userData
});

export default connect(
  mapStateToProps,
  { execWhoamiRequest }
)(App);