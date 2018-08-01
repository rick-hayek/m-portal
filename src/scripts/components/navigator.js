import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import '../../style/navigator.css';

export default class Navigator extends Component{

    render(){
        return (
            <div className='navigator'>
                <Navbar>
                    <Nav>
                        <NavItem>
                            ME
                        </NavItem>
                        <NavItem>
                            YOU
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

class CustomNavItem extends Component {
    render() {

        return(
            <div>
            </div>
        );
    }
}