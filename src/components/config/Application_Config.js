import React, { Component } from 'react'
import Upload_New_Configuration from './Upload_New_Configuration'
import Application_Properties from './Application_Properties'
import Role_Based_Properties from './Role_Based_Properties'
import User_Input from './User_Input'
import Result_Analyses from './Result_Analyses'
import Test_Module from './Test_Module'
import Endpoint_Operations from './Endpoint_Operations'
import Workflow_Modules from './Workflow_Modules'
import Test_Group from './Test_Group'
import Startup_Test_Group from './Startup_Test_Group'
import Service_Policies from './Service_Policies'
import Resource_Files from './Resource_Files'
import DSAs from './DSAs'
import './Config.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';



export class Application_Config extends Component {
    render() {
        return (
            <div id="Application_Config">
            <div className="App_Config">
                <h2>Application Configuration</h2>
                <p>On the Application tab, you can edit settings in the loaded config version. At login, the settings for the active config are loaded. The values in the active config are applied across servers as a part of the overall application configuration.</p>
                <p>In an SMP installation, the application configuration is comprised of two major parts:</p>
                <ul>
                
                <li>Active config. Collection of settings and content instructions the server is to apply in the runtime environment (for example, test modules and workflow modules).</li>
                <li>Config items are items your team can create from the Application tab of Configuration Manager. Upon saving and publishing from there, a new version of the config is created and made active.</li>
                <li>Content. Individual items on which settings in the active config depend for execution (for example, models, overlays, and workflows) and other resources on which the content itself depends</li>
                </ul>
                <p>In general, content items are items that your team authors from applicable SMP tools, such as Model Builder, Overlay Builder, and Workflow Builder.</p>
                </div>
            </div>
            
        )
    }
}

export default Application_Config