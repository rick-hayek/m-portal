import React, { Component } from 'react';
import {Nav, NavItem, Navbar, NavDropdown, MenuItem, Glyphicon, PanelGroup, Panel} from 'react-bootstrap';
import '../../style/navigator.css';
import Localization from '../localization';
import ClientRoute from './route';


const Menus = [
    {   name: Localization.SystemOverview, 
        path: ClientRoute.SystemOverview, 
        subMenu: [] 
    },
    {   name: Localization.StrategyManagement, 
        path: undefined, 
        subMenu: [
            { name: Localization.StrategyList, path: ClientRoute.StrategyList },
            { name: Localization.StrategyConfig, path: ClientRoute.StrategyConfig },
        ] 
    },
    {   name: Localization.ResourceManagement, 
        path: undefined, 
        subMenu: [
            { name: Localization.ResourceManagement, path: ClientRoute.ResourceManagement }
        ] 
    },
    {   name: Localization.TaskManagement, 
        path: undefined, 
        subMenu: [
            { name: Localization.TaskList, path: ClientRoute.TaskList },
            { name: Localization.TaskView, path: ClientRoute.TaskView },
            { name: Localization.TaskConfig, path: ClientRoute.TaskConfig },
        ] 
    },
    {   name: Localization.TaskMonitoring, 
        path: undefined, 
        subMenu: [
            { name: Localization.TaskStatus, path: ClientRoute.TaskStatus },
            { name: Localization.TaskLog, path: ClientRoute.TaskLog },
            { name: Localization.TaskAlarm, path: ClientRoute.TaskAlarm },
        ] 
    },
    {   name: Localization.DataStatistic, 
        path: undefined, 
        subMenu: [
            { name: Localization.DataOverview, path: ClientRoute.DataOverview },
            { name: Localization.HistoricData, path: ClientRoute.HistoricData },
        ] 
    },
];

export default class Navigator extends Component{
    constructor(props, context) {
        super(props, context);
    
        this.handleSelect = this.handleSelect.bind(this);
    
        this.state = {
          activeKey: '1'
        };
      }
    
      handleSelect(activeKey) {
        this.setState({ activeKey });
      }

    render(){
        return (
            <div id="sidebar-menu" className='navigator'>
                <Navbar fluid className='sidebar' inverse >
                    <Nav>
                        <NavItem eventKey={1}>Item 1</NavItem>
                        <NavItem eventKey={2}>Item 2

                        </NavItem>
                        <NavItem eventKey={3}>Item 3</NavItem>
                    </Nav>
                </Navbar>
                <div className='group'>
                <PanelGroup
                    accordion
                    id="accordion-controlled-example"
                    activeKey={this.state.activeKey}
                    onSelect={this.handleSelect}
                    
                >
                    <Panel eventKey="1">
                    <Panel.Heading>
                        <Panel.Title toggle>Panel heading 1</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>Panel content 1</Panel.Body>
                    </Panel>
                    <Panel eventKey="2">
                    <Panel.Heading>
                        <Panel.Title toggle>Panel heading 2</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body collapsible>Panel content 2</Panel.Body>
                    </Panel>
                </PanelGroup>
                </div>
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