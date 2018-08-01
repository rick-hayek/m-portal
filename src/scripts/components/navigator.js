import React, { Component } from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
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