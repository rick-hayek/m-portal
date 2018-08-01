import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import '../../style/App.css';
import Localization from '../localization';
import * as API from '../api/ajax';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

const SystemTitle = ()=>(
    <div className='header-title'>
        {Localization.AppName}
    </div>
);

class User extends Component{ 
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }
    onLogout(e){
        var self = this;
        e.preventDefault();
        API.logout()
        .then(function(result){
            console.log('user is log out');
            self.props.history.push('/login');
        });
    }

    render(){
        return (
            <div className='header-user'>
                <div>
                    User Name
                </div>
                <div>
                    <a onClick = {this.onLogout} >Log Out</a>
                </div>        
            </div>
        );
    }
}

const UserInfo = withRouter(User);

const TopNav = ()=>(
    <div className='header-nav'>
        <div>
            Overview
        </div>
        <div>
            Task
        </div>
        <div>
            Reporting
        </div>
        <div>
            System Management
        </div>        
    </div>
);

export default class Header extends Component{
    render(){
        return (
            <div className='header'>
                <SystemTitle />
                <TopNav />
                <UserInfo />
            </div>
        );
    }
};