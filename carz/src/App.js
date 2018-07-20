import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import SignUp from './components/SignUp/SignUp';
import LogIn from './components/LogIn/LogIn';
import Home from './containers/Home';

import { Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/signup" exact component={SignUp}/>
            <Route path="/login" exact component={LogIn}/>
            <Route path="/" component={Home}/>
          </Switch>
        </div>
        </Provider>
    );
  }
}

export default App;
