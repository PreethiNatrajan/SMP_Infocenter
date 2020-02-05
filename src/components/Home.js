import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import '../App.css';

import SMP7 from './SMP7';
import SMP18 from './SMP18';
import SMP19 from './SMP19';
import {Grid} from '@material-ui/core';
import Sidebar from './Sidebar';
import ModelBuilder from './ModelBuilder';
import OverlayBuilder from './OverlayBuilder';
import ConfigManager from './ConfigManager';
import Workflow from './Workflow';
import Css from './Css';
import Model from './model/Model';
import Components from './model/Components';
import OptionSets from './model/OptionSets';
import Relationships from './model/Relationships';
import ModelTemplates from './model/ModelTemplates';
import PropertyTemplate from './model/PropertyTemplate';
import Overlay from './overlay/Overlay';
import Checks from './overlay/Checks';
import Actions from './overlay/Actions';
import Global from './overlay/Global';
import Application_Config from './config/Application_Config';
import Envi_Config from './config/Envi_Config';
import Version_Manager from './config/Version_Manager';
import CSC_Config from './config/CSC_Config';
import KMP from './config/KMP';
import Users from './config/Users';
import Schedules from './config/Schedules';
import Upload_New_Configuration from './config/Upload_New_Configuration';
import Application_Properties from './config/Application_Properties';
import Role_Based_Properties from './config/Role_Based_Properties';
import User_Input from './config/User_Input';
import Result_Analyses from './config/Result_Analyses';
import Test_Module from './config/Test_Module';
import Endpoint_Operations from './config/Endpoint_Operations';
import Workflow_Modules from './config/Workflow_Modules';
import Test_Group from './config/Test_Group';
import Startup_Test_Group from './config/Startup_Test_Group';
import Service_Policies from './config/Service_Policies';
import Resource_Files from './config/Resource_Files';
import DSAs from './config/DSAs';
import Business_Process from './workflow/Business_Process';
import Interactive_Procerss from './workflow/Interactive_Procerss';
import BotBuilder from './BotBuilder';
import SiteBuilder from './SiteBuilder';

class Home extends Component {
    
  render() {
    const {match}  =this.props;
    return (
     
      <div className="home"> 
      <Grid container>
        <Grid item md={3} lg={3} xl={2}>
          {/* <ul>
            <li><Link to={'/SMP'}>SMP</Link></li>
            <li><Link to={'/SMP7'}>SMP7</Link></li>
            <li><Link to={'/SMP18'}>SMP 18</Link></li>
            <li><Link to={'/SMP19'}>SMP 19</Link></li>
          </ul> */}
          <div className="SideNav">
          <Sidebar />
          </div>
        </Grid>
        <Grid item md={9} lg={9} xl={10}>
        <div className="Common">
         <Switch>
            <Route path="/SMP" render={() => (
              <div>
                <h2>SMP</h2>
                <p>Service Management Platform (SMP) is a comprehensive toolset and action engine for customer experience management. With SMP, service providers gain the following:</p>
                <ul className="right-container-list">
                <li>A unified platform including a flexible integration framework, test and diagnostic capabilities, a scalable workflow solution for interaction with customers, and completion of business processes involving multiple parties.</li>
                <li>Omni-channel platform delivering integrated customer experiences across multiple support channels, such as assisted service, self service, interactive voice response (IVR), and field technician channels.</li>
                <li>The opportunity to extend and control the service delivery ecosystem as a part of leveraging existing investment in device management; operations support systems (OSS) and business support systems (BSS); network management systems (NMS) and element management systems (EMS); and customer consoles.</li>
                <li>Integrated tools in which IT developers and business analysts author, publish, and execute service troubleshooting and management logic.</li>
                </ul>
                <p>The versions of SMP are,</p>
                <ul>
                <li>SMP 7</li>
                <li>SMP 18</li>
                <li>SMP 19</li>
                </ul>
              </div> 
            )}/>
          <Route path='/SMP7' component={SMP7} />
          <Route path='/SMP18' component={SMP18}/>
          <Route path='/SMP19' component={SMP19}/>
          <Route exact path='/Model_Builder' component={ModelBuilder}/>
          <Route path='/OverlayBuilder' component={OverlayBuilder}/>
          <Route path='/Config_Manager' component={ConfigManager}/>
          <Route path='/Workflow' component={Workflow}/>
          <Route path='/Css' component={Css}/>
          <Route path='/BotBuilder' component={BotBuilder}/>
          <Route path='/SiteBuilder' component={SiteBuilder}/>
          
          <Route path={`/Model`} component={Model}/>
                <Route path={`/Components`} component={Components}/>
                <Route path={`/OptionSets`} component={OptionSets}/>
                <Route path={`/Relationships`} component={Relationships}/>
                <Route path={`/ModelTemplates`} component={ModelTemplates}/>
                <Route path={`/PropertyTemplates`} component={PropertyTemplate}/>

                <Route path={'/Overlay'} component={Overlay} />
                        <Route path={'/Checks'} component={Checks} />
                        <Route path={'/Actions'} component={Actions} />
                        <Route path={'/Global'} component={Global} />
                <Route path={'/Application_Config'}>
                    <Application_Config/>
                </Route>
                <Route  path={'/Envi_Config'}>                
                  <Envi_Config/>
                </Route>
                <Route path={'/Version_Manager'}>
                  <Version_Manager/>
                </Route>
                <Route path={'/CSC_Config'}>
                  <CSC_Config/>
                </Route>
                <Route path={'/KMP'}>
                  <KMP/>
                </Route>
                <Route path={'/Users'}>
                  <Users/>
                </Route>
                <Route path={'/Schedules'}>
                  <Schedules/>
                </Route>


                <Route path='/Upload_New_Configuration' component={Upload_New_Configuration}/>
              <Route path='/Application_Properties' component={Application_Properties}/>
              <Route path='/Role_Based_Properties' component={Role_Based_Properties}/>
              <Route path='/User_Input' component={User_Input}/>
              <Route path='/Result_Analyses' component={Result_Analyses}/>
              <Route path='/Test_Module' component={Test_Module}/>
              <Route path='/Endpoint_Operations' component={Endpoint_Operations}/>
              <Route path='/Workflow_Modules' component={Workflow_Modules}/>
              <Route path='/Test_Group' component={Test_Group}/>
              <Route path='/Startup_Test_Group' component={Startup_Test_Group}/>
              <Route path='/Service_Policies' component={Service_Policies}/>
              <Route path='/Resource_Files' component={Resource_Files}/>
              <Route path='/DSAs' component={DSAs}/>

              <Route path='/Business_Process' component={Business_Process} />
              <Route path='/Interactive_Procerss' component={Interactive_Procerss} />

          </Switch>
          </div>  
  
        </Grid>
      </Grid>
          
      </div>
         
    );
  }
}

export default Home;