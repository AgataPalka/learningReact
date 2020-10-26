import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {MapContainer} from './MapContainer';
/*import {Layout} from './components/Layout';*/




class App extends Component {
  render() {
    return (
<React.Fragment>
 
  <Router>
    <Switch>
        <Route exact path = '/' component={Home} />
        <Route exact path = '/About' component={About} />
        <Route exact path = '/MapContainer' component={MapContainer} />
    </Switch>
  </Router>
  

</React.Fragment>
    );
  }
}

export default App;

