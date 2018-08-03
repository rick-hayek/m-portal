import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import "../../style/login.css";
import Localization from '../localization';
import AuthMiddleware from './AuthMiddleware';
import {

    Redirect,
    // withRouter
  } from "react-router-dom";

import * as API from '../api/ajax';

import { login } from '../actions';

import { connect } from 'react-redux';

// Login component
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        userName: '',
        password: '',
        redirectToReferrer: false
      }
      // Bindings
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemount = this.handleRemount.bind(this);
    this.onUserNameChange = this.onUserNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
  }

  onUserNameChange(e){
    this.setState({userName: e.target.value});
  }

  onPasswordChange(e){
    this.setState({password: e.target.value});
  }

  handleSubmit(e) {
    var self = this;
    e.preventDefault();
    console.log('try to login ...');
    var {dispatch} = self.props;

    API.login(this.state.userName, this.state.password)
        .then(function(result){
            console.log(JSON.stringify(result));
            if(result.return_code === 1) { // Success
                dispatch(login(result.data));

                self.setState({
                    redirectToReferrer: true
                }); 
            }
            else { // Login failed
                self.setState({
                    redirectToReferrer: false
                }); 
            }
        });

    return false;
  }

  handleRemount(e) {
    this.setState({ redirectToReferrer: false });
    e.preventDefault();
  }

  render() {
    const {from} = this.props.location.state || {from: {pathname: '/'}};
    const {redirectToReferrer} = this.state;
    
    if(redirectToReferrer){
        console.log('Redirecting to referrer.');
        return <Redirect to={from} />;
    }

    return (
        <LoginForm onSubmit={this.handleSubmit} onUserNameChange={this.onUserNameChange} onPasswordChange={this.onPasswordChange} />
    );
  }
}

// Form
class LoginForm extends React.Component {
  render() {
    const {onSubmit, onUserNameChange, onPasswordChange} = this.props;
    return <div className='Modal'>
                <Logo />
                <form onSubmit= { onSubmit }>
                    <LabelledInput type='text' name='username' placeholder={Localization.SignInUserNameHint} onChange={onUserNameChange} icon='user' />
                    <LabelledInput type='password' name='password' placeholder={Localization.SignInPasswordHint} onChange={onPasswordChange} icon='lock' />
                    <button>{Localization.SignInBtn}</button>
                </form>
           </div>
  }
}

// Input field with label
class LabelledInput extends React.Component {
  render() {
    return <div className='Input'>
              <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.placeholder } onChange={this.props.onChange} required autoComplete='false'/>
              {/* <label htmlFor={ this.props.name } ></label> */}
              <Glyphicon glyph={ this.props.icon }/>
           </div>
  }
}

// System logo
class Logo extends React.Component {
  render() {
    return <div className="logo">
              <i className="fa fa-bug" aria-hidden="true"></i> 
              <span>{Localization.AppName}</span>
            </div>
  }
}

const mapStateToProps = (state) => {
  return state.user;
};

export default connect(mapStateToProps)(Login);
