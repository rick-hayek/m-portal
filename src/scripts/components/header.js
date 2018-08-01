import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import '../../style/App.css';
import Localization from '../localization';
import * as API from '../api/ajax';

const SystemTitle = ()=>(
    <div className='header-title'>
        {Localization.AppName}
    </div>
);

const UserInfo = ()=>(
    <div className='header-user'>
        <div>
            User Name
        </div>
        <div>
            Log Out
        </div>        
    </div>
);

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