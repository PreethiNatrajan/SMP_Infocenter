import React, { Component } from 'react'
import ConfigMan from './images/Applications_Configuration.png'
import Application_Config from './config/Application_Config'
import Envi_Config from './config/Envi_Config'
import Version_Manager from './config/Version_Manager'
import CSC_Config from './config/CSC_Config'
import KMP from './config/KMP'
import Users from './config/Users'
import Schedules from './config/Schedules'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Application_Properties from './config/Application_Properties'

export class ConfigManager extends Component {
    render() {
        return (
            <div id="Config_Manager">
                <h1>Configuration Manager</h1>
                <p>SMP configuration manager helps you to configure your model and overlay and make it available to CSC and Workflows.</p>
                <p>The Configuration manager will looks like,</p>
                <img src={ConfigMan}/>
                <p>The Content in Configuration Managers are,</p>
                
                
               {/* <ul>
                <li><Link to={'/Application_Config'} className="nav-link"> Application Configuration </Link></li>
                <li><Link to={'/Envi_Config'} className="nav-link"> Environment Configuration </Link></li>
                <li><Link to={'/Version_Manager'} className="nav-link"> Version Manager </Link></li>
                <li><Link to={'/CSC_Config'} className="nav-link"> CSC Configuration </Link></li>
                <li><Link to={'/KMP'} className="nav-link"> KMP </Link></li>
                <li><Link to={'/Users'} className="nav-link"> Users </Link></li>
                <li><Link to={'/Schedules'} className="nav-link"> Schedules </Link></li>
                </ul>
                <Switch>
              <Route exact path='/Application_Config' component={Application_Config} />
              <Route exact path='/Envi_Config' component={Envi_Config} />
              <Route exact path='/Version_Manager' component={Version_Manager} />
              <Route exact path='/CSC_Config' component={CSC_Config} />
              <Route exact path='/KMP' component={KMP} />
              <Route exact path='/Users' component={Users} />
              <Route exact path='/Schedules' component={Schedules} />
               </Switch>*/}
              
             
            </div>
        )
    }
}

export default ConfigManager