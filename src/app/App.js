import React, { Component } from 'react';
import { Route } from "react-router-dom";
import Welcome from './welcomePage/Welcome';
import Main from './mainPage/Main';
import FlightInfo from './flightInfoPage/FlightInfo';
import Error from './errorPage/Error';
import SameFlightList from './mainPage/SameFlightList'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/main' component={Main} />
        <Route exact path='/flightinfo/:id' component={FlightInfo} />
        <Route exact path='/main/prevlist' component={SameFlightList} />
        <Route path='/error' component={Error} />
      </React.Fragment>
    );
  }
}

export default App;
