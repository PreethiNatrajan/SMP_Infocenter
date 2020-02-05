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
            <div className="Config">
                <h1>Configuration Manager</h1>
                <p>SMP configuration manager helps you to configure your model and overlay and make it available to CSC and Workflows.</p>
                <p>The Configuration manager will looks like,</p>
                <img src={ConfigMan}/>
                <p>The Content in Configuration Managers are,</p>
                
                
                <ul>
                <li>Application Configuration </li>
                <li> Environment Configuration </li>
                <li> Version Manager </li>
                <li> CSC Configuration </li>
                <li> KMP </li>
                <li> Users </li>
                <li> Schedules </li>
                </ul>
                {/*<Switch>
              <Route exact path='/Application_Config' component={Application_Config} />
              <Route exact path='/Envi_Config' component={Envi_Config} />
              <Route exact path='/Version_Manager' component={Version_Manager} />
              <Route exact path='/CSC_Config' component={CSC_Config} />
              <Route exact path='/KMP' component={KMP} />
              <Route exact path='/Users' component={Users} />
              <Route exact path='/Schedules' component={Schedules} />
               </Switch>*/}
               </div>
             
            </div>
        )
    }
}

export default ConfigManager