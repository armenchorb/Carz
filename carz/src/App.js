import React, { Component } from 'react';
import './App.css';
import Register from './components/Register/register';
import AppNavbar from './components/AppNavbar/AppNavbar';
import Carousel from './components/Carousel/Carousel';
import Groups from './components/Groups/Groups';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Home from './containers/Home';

import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Switch>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/login" exact component={LogIn}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
    );
  }
}

export default App;
