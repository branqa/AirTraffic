import React, { Component } from 'react';
import { Route} from "react-router-dom";
import Welcome from './welcomePage/Welcome';
import Main from './mainPage/Main';
import FlightInfo from './flightInfoPage/FlightInfo';
import Error from './errorPage/Error'

class App extends Component {
  render() {
    return (
      <React.Fragment>
       <Route exact path='/' component={Welcome} />
       <Route  path='/main' component={Main} />
        <Route exact path='/flightinfo/:id' component={FlightInfo} />
       <Route  path='/error' component={Error} />
     </React.Fragment>
    );
  }
}

export default App;
