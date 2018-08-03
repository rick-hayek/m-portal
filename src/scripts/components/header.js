import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem, Glyphicon } from 'react-bootstrap';
import '../../style/header.css';
import Localization from '../localization';
import * as API from '../api/ajax';

import {
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";

import { connect } from 'react-redux';

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
        let name =  this.props.user && this.props.user.user_name;

        return (
            <div className='header-user'>
                <div>
                    {name}
                </div>
                <div>
                    {/* <Button onClick={ this.onLogout } bsSize='sm'><Glyphicon glyph='log-out' /></Button> */}
                    <a onClick = {this.onLogout} ><Glyphicon glyph='log-out' /></a>
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

class Header extends Component{
    render(){
        let {user} = this.props;
        return (
            <div className='header'>
                <SystemTitle />
                <TopNav />
                <UserInfo user={user} />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
       user: state.user
    };
};

export default connect(mapStateToProps)(Header);