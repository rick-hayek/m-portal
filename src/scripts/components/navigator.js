import React, { Component } from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon, PanelGroup, Panel} from 'react-bootstrap';
import '../../style/navigator.css';
import Localization from '../localization';
import ClientRoute from './route';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
  } from "react-router-dom";


export default class Navigator extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          activeKey: undefined
        };
      }
    
      handleSelect(activeKey) {
        this.setState({ activeKey });
      }

    render(){
        const Menus = [
            {   name: Localization.SystemOverview, 
                path: ClientRoute.SystemOverview, 
                icon: 'th-list',
                subMenu: [] 
            },
            {   name: Localization.StrategyManagement, 
                path: undefined, 
                icon: 'folder-close',
                subMenu: [
                    { name: Localization.StrategyList, path: ClientRoute.StrategyList },
                    { name: Localization.StrategyConfig, path: ClientRoute.StrategyConfig },
                ] 
            },
            {   name: Localization.ResourceManagement, 
                path: undefined, 
                icon: 'th-large',
                subMenu: [
                    { name: Localization.ResourceManagement, path: ClientRoute.ResourceManagement }
                ] 
            },
            {   name: Localization.TaskManagement, 
                path: undefined, 
                icon: 'briefcase',
                subMenu: [
                    { name: Localization.TaskList, path: ClientRoute.TaskList },
                    { name: Localization.TaskView, path: ClientRoute.TaskView },
                    { name: Localization.TaskConfig, path: ClientRoute.TaskConfig },
                ] 
            },
            {   name: Localization.TaskMonitoring, 
                path: undefined, 
                icon: 'eye-open',
                subMenu: [
                    { name: Localization.TaskStatus, path: ClientRoute.TaskStatus },
                    { name: Localization.TaskLog, path: ClientRoute.TaskLog },
                    { name: Localization.TaskAlarm, path: ClientRoute.TaskAlarm },
                ] 
            },
            {   name: Localization.DataStatistic, 
                path: undefined, 
                icon: 'signal',
                subMenu: [
                    { name: Localization.DataOverview, path: ClientRoute.DataOverview },
                    { name: Localization.HistoricData, path: ClientRoute.HistoricData },
                ] 
            },
            {
                name: Localization.SystemManagement,
                path: undefined,
                icon: 'wrench',
                subMenu: [
                    { name: Localization.SystemManagement, path: ClientRoute.SystemManagement },
                    { name: Localization.UserManagement, path: ClientRoute.UserManagement },
                ]
            },
            {
                name: 'login',
                path: '/login',
                icon: '',
                subMenu: []
            }
        ];
        
        let navItems = Menus.map(function (item, index) {
            return <NivgatiorItem ekey={index.toString()} heading={item.name} icon={item.icon} headingTo={item.path} subItems = {item.subMenu} key={index.toString()} />
        });

        return (
            <div className='navigator'>
                {/* <Navbar fluid className='sidebar' inverse>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">User Name</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>

                <Navbar.Collapse>
                    <Navbar.Text className='userMenu'>
                        <Navbar.Link href="#"><Glyphicon glyph="home"/></Navbar.Link>
                        <Navbar.Link href="#"><Glyphicon glyph="log-out"/></Navbar.Link>
                    </Navbar.Text>
                    <Nav>
                        <NavDropdown eventKey={1} title="Item 1" id='drop1'>
                            <MenuItem eventKey={1.1} href="#">Item 1.1</MenuItem>
                        </NavDropdown>
                        <NavItem eventKey={2}>Item 2</NavItem>
                        <NavItem eventKey={3}>Item 3</NavItem>
                    </Nav>
                </Navbar.Collapse>
                </Navbar> */}
                <div className='group'>
                    <PanelGroup
                        accordion
                        id="accordion-controlled-example"
                        activeKey={this.state.activeKey}
                        onSelect={this.handleSelect}
                        
                    >
                        {navItems}
                    </PanelGroup>
                </div>
            </div>
        );
    }
}

class CustomNavItem extends Component {
    constructor(props){
        super(props);
    }

    handleClick(to){
        this.props.history.push(to);
    }

    render() {
        let self = this;
        let {ekey, heading, icon, headingTo, subItems} = this.props;
        let subMenu = subItems.map(function(m,i){
            let ikey = m.name + i.toString()+ekey.toString();
            return <NavItem eventKey={ikey} key={ikey} onClick={self.handleClick.bind(self, m.path)}>{m.name}</NavItem>
        });
        
        let onHeadingClick = !!headingTo ? self.handleClick.bind(self, headingTo): undefined;
        
        let panelBody = (!!subMenu && subMenu.length > 0) 
            ? <Panel.Body collapsible>
                <Nav>
                    {subMenu}
                </Nav>
              </Panel.Body>
            : undefined;

        return (
            <div className='nav-parent'>
                <Glyphicon glyph= {icon} />
                <Panel eventKey={ekey} onClick={onHeadingClick}>
                    <Panel.Heading>
                        <Panel.Title toggle>{heading}</Panel.Title>
                    </Panel.Heading>
                    {panelBody}
                </Panel>
            </div>
            );
    }
}

const NivgatiorItem = withRouter(CustomNavItem);