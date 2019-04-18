import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import TablesPage from './pages/TablesPage';
import NotFoundPage from './pages/NotFoundPage';
import IntroPage from "./pages/IntroPage";

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={IntroPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/profile' component={ProfilePage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/404' component={NotFoundPage} />
        {/* Handle 404 errors when any of routes did not match */}
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
