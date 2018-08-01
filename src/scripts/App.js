import React, { Component } from 'react';
import logo from '../img/logo.svg';
import '../style/App.css';
// import {Route} from 'react-router';
import {Link, Route} from 'react-router-dom';
import Login from './components/login';
import Navigator from './components/navigator';
import Header from './components/header';
import ProtectedRoute from './components/protectedRoute';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

class MainSys extends Component{
  render(){
    return (
      <div>
        <Header />
        <Navigator />
        <Route path='/sys' Component={Home} />
      </div>
    );
  }
}

class App extends Component {

  render() {

    return (
      <div className="App">
        <Route path='/login' component={Login} />
        <Route exact path='/' component={MainSys} />
        {/* <ProtectedRoute exact path='/' component={Home}/> */}
      </div>
    );
  }
}

export default App;
