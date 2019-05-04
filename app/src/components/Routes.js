import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import CoursesPage from './pages/CoursesPage';
import TablesPage from './pages/TablesPage';
import NotFoundPage from './pages/NotFoundPage';
import IntroPage from "./pages/IntroPage";
import AllTeachersPage from './pages/AllTeachersPage';
import ChartsPage from "./pages/ChartsPage";
import AllClientsPage from './pages/AllClientsPage';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path='/' exact component={IntroPage} />
        <Route path='/clients' exact component={AllClientsPage} />
        <Route path='/teachers' component={AllTeachersPage} />
        <Route path='/dashboard' component={DashboardPage} />
        <Route path='/courses' exact component={CoursesPage} />
        <Route path='/tables' component={TablesPage} />
        <Route path='/404' component={NotFoundPage} />
        <Route path='/charts' component={ChartsPage}/>
        {/* Handle 404 errors when any of routes did not match */}
        <Route component={NotFoundPage} />
      </Switch>
    );
  }
}

export default Routes;
