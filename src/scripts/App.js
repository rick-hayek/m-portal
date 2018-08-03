import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
// import {Route} from 'react-router';
import {Link, Route} from 'react-router-dom';
import Login from './components/login';
import Navigator from './components/navigator';
import Header from './components/header';
import ProtectedRoute from './components/protectedRoute';
import RouteConfig from './components/route';

import * as API from './api/ajax';

const Home = () => (
  <div>
    <a href='#' onClick={function(){API.getTaskList('');}}> Get Task</a>
  </div>
);

class MainSys extends Component{
  render(){
    return (
      <div className='data-area' style={{position: 'relative', top:'60px', left:'200px', overflowX: 'hidden'}}>
        <Route exact path={RouteConfig.SystemOverview} component={Home} />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorized: false,
    };
  }

  render() {
    // If unauthorized, go to login
    // let app = this.state.authorized
    //   ? 
    // else go to referrer
    return (
      <div className="App">
        <Route path={RouteConfig.Login} component={Login} />
        {/* <Route exact path='/' component={MainSys} /> */}
        {/* <ProtectedRoute exact path='/' component={Home}/> */}
        <Header />
        <Navigator />
        <MainSys />
      </div>
    );
  }
}

export default App;
