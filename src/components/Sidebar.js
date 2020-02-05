import React, { Component } from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
// import StarBorder from '@material-ui/icons/StarBorder';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
// import SMP7 from './SMP7';
// import ModelBuilder from './ModelBuilder';
// import OverlayBuilder from './OverlayBuilder';
// import ConfigManager from './ConfigManager';
// import Workflow from './Workflow';
// import Css from './Css';
import '../App.css'


export class Sidebar extends Component {
    constructor(props)
    {
        super();
        this.state={
            smp7: false,
            smp18: false,
            smp19: false,
            smp7applicationConfig: false,
            smp18applicationConfig: false,
            smp19applicationConfig: false,
            overlayBuilder: false,
            modelBuilder: false,
            smp7configManager: false,
            smp18configManager: false,
            smp19configManager: false,
            smp7workflowBuilder: false,
            smp18workflowBuilder: false,
            smp19workflowBuilder: false,
    }
    
    }
    handleClick=(stateVal)=>{
        this.setState({[stateVal]: !this.state[stateVal]})
    }

    render() {
        
      return (
        <div className="SideBar">
        
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className="root"
          >   
          <ListItemText><Link to='/SMP'>SMP</Link></ListItemText>        
            <ListItem  onClick={this.handleClick.bind(this,'smp7')}>         
              <ListItemText><Link to='/SMP7'>SMP 7</Link></ListItemText>
              {this.state.smp7 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.smp7} timeout="auto" unmountOnExit>
              <List className="tier1" component="div" disablePadding>
                <ListItem button className="nested">
                  <List className="tier2">
                    <ListItem onClick={this.handleClick.bind(this,'modelBuilder')}>         
                      <Link to='/Model_Builder'>ModelBuilder</Link>    
                    </ListItem>
                    <Collapse className="collapse" in={this.state.modelBuilder}>
                      <List>
                        <ListItem><Link to={'/Model'}>Model</Link></ListItem>
                        <ListItem><Link to={'/Components'}>Components</Link></ListItem>
                        <ListItem><Link to={'/OptionSets'}>Option Sets</Link></ListItem>
                        <ListItem><Link to={'/Relationships'}>Relationships</Link></ListItem>
                        <ListItem><Link to={'/ModelTemplates'}>Model Templates</Link></ListItem>
                        <ListItem><Link to={'/PropertyTemplates'}>Property Templates</Link></ListItem>
                      </List>     
                    </Collapse>
                    <ListItem onClick={this.handleClick.bind(this,'overlayBuilder')}>
                      <Link to='/OverlayBuilder'>Overlay Builder</Link>
                    </ListItem>
                    <Collapse className="collapse" in={this.state.overlayBuilder}>
                      <List>
                        <ListItem><Link to={'/Overlay'}>Overlay</Link></ListItem>
                        <ListItem><Link to={'/Checks'}>Checks</Link></ListItem>
                        <ListItem><Link to={'/Actions'}>Actions</Link></ListItem>
                        <ListItem><Link to={'/Global'}>Global</Link></ListItem>
                      </List>     
                    </Collapse>
                    <ListItem onClick={this.handleClick.bind(this, 'smp7configManager')}><Link to='/Config_Manager'>Configurartion Manager</Link></ListItem>
                    <Collapse className="collapse" in={this.state.smp7configManager}>
                      <List className="tier3">
                        <ListItem onClick={this.handleClick.bind(this,'smp7applicationConfig')}><Link to={"Application_Config"}>Application Configuration</Link></ListItem>
                        <Collapse in={this.state.smp7applicationConfig} className="collapse">
                          <List>
                            <ListItem><Link to='/Upload_New_Configuration'>Upload New Configuration</Link></ListItem>
                            <ListItem><Link to='/Application_Properties'>Application Properties</Link></ListItem>
                            <ListItem><Link to='/Role_Based_Properties'>Role Based Properties</Link></ListItem>
                            <ListItem><Link to='/User_Input'>User Input</Link></ListItem>
                            <ListItem><Link to='/Result_Analyses'>Result Analyses</Link></ListItem>
                            <ListItem><Link to='/Test_Module'>Test Module</Link></ListItem>
                            <ListItem><Link to='/Endpoint_Operations'>Endpoint Operations</Link></ListItem>
                            <ListItem><Link to='/Workflow_Modules'>Workflow Modules</Link></ListItem>
                            <ListItem><Link to='/Test_Group'>Test Group</Link></ListItem>
                            <ListItem><Link to='/Startup_Test_Group'>Startup Test Group</Link></ListItem>
                            <ListItem><Link to='/Service_Policies'>Service Policies</Link></ListItem>
                            <ListItem><Link to='/Resource_Files'>Resource Files</Link></ListItem>
                            <ListItem><Link to='/DSAs'>Extensions / DSAs</Link></ListItem>
                          </List>
                        </Collapse>
                        <ListItem><Link to={"Envi_Config"}>Environment Configuration</Link></ListItem>
                        <ListItem><Link to="Version_Manager">Version Manager</Link></ListItem>
                        <ListItem><Link to="CSC_Config">CSC Configuration</Link></ListItem>
                        <ListItem><Link to="KMP">KMP</Link></ListItem>
                        <ListItem><Link to="Users">Users</Link></ListItem>
                        <ListItem><Link to="Schedules">Schedules</Link></ListItem>
                      </List>
                    </Collapse>
                    <ListItem onClick={this.handleClick.bind(this, 'smp7workflowBuilder')}><Link to='/Workflow'>Workflow Builder</Link></ListItem>
                    <Collapse in={this.state.smp7workflowBuilder} className="collapse">
                      <List>
                        <ListItem><Link to="/Business_Process">Business Process Workflow</Link></ListItem>
                        <ListItem><Link to="/Interactive_Procerss">Interactive Workflow</Link></ListItem>
                      </List>
                    </Collapse>
                    <ListItem><Link to='/CSS'>CSC</Link></ListItem>
                  </List>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.handleClick.bind(this,'smp18')}>
            <ListItemText><Link to='/SMP18'>SMP 18</Link></ListItemText>
              {this.state.smp18 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.smp18} timeout="auto" unmountOnExit>
              <List className="tier1" component="div" disablePadding>
                <ListItem button className="nested">
                  <List className="tier2">
                    <ListItem onClick={this.handleClick.bind(this, 'smp18configManager')}><Link to='/Config_Manager'>Configurartion Manager</Link></ListItem>
                    <Collapse className="collapse" in={this.state.smp18configManager}>
                      <List className="tier3">
                        <ListItem onClick={this.handleClick.bind(this,'smp18applicationConfig')}><Link to={"Application_Config"}>Application Configuration</Link></ListItem>
                        <Collapse in={this.state.smp18applicationConfig} className="collapse">
                          <List>
                            <ListItem><Link to='/Upload_New_Configuration'>Upload New Configuration</Link></ListItem>
                            <ListItem><Link to='/Application_Properties'>Application Properties</Link></ListItem>
                            <ListItem><Link to='/Role_Based_Properties'>Role Based Properties</Link></ListItem>
                            <ListItem><Link to='/User_Input'>User Input</Link></ListItem>
                            <ListItem><Link to='/Result_Analyses'>Result Analyses</Link></ListItem>
                            <ListItem><Link to='/Test_Module'>Test Module</Link></ListItem>
                            <ListItem><Link to='/Endpoint_Operations'>Endpoint Operations</Link></ListItem>
                            <ListItem><Link to='/Workflow_Modules'>Workflow Modules</Link></ListItem>
                            <ListItem><Link to='/Test_Group'>Test Group</Link></ListItem>
                            <ListItem><Link to='/Startup_Test_Group'>Startup Test Group</Link></ListItem>
                            <ListItem><Link to='/Service_Policies'>Service Policies</Link></ListItem>
                            <ListItem><Link to='/Resource_Files'>Resource Files</Link></ListItem>
                            <ListItem><Link to='/DSAs'>Extensions / DSAs</Link></ListItem>
                          </List>
                        </Collapse>
                        <ListItem><Link to={"Envi_Config"}>Environment Configuration</Link></ListItem>
                        <ListItem><Link to="Version_Manager">Version Manager</Link></ListItem>
                        <ListItem><Link to="CSC_Config">CSC Configuration</Link></ListItem>
                        <ListItem><Link to="KMP">KMP</Link></ListItem>
                        <ListItem><Link to="Users">Users</Link></ListItem>
                        <ListItem><Link to="Schedules">Schedules</Link></ListItem>
                      </List>
                    </Collapse>
                    <ListItem onClick={this.handleClick.bind(this, 'smp18workflowBuilder')}><Link to='/Workflow'>Workflow Builder</Link></ListItem>
                    <Collapse in={this.state.smp18workflowBuilder} className="collapse">
                      <List>
                        <ListItem><Link to="/Business_Process">Business Process Workflow</Link></ListItem>
                        <ListItem><Link to="/Interactive_Procerss">Interactive Workflow</Link></ListItem>
                      </List>
                    </Collapse>
                    <ListItem><Link to='/CSS'>CSC</Link></ListItem>
                    <ListItem><Link to='/BotBuilder'>Bot Builder</Link></ListItem>
                  </List>
                </ListItem>
              </List>
            </Collapse>
            <ListItem button onClick={this.handleClick.bind(this,'smp19')}>
            <ListItemText><Link to='/SMP19'>SMP 19</Link></ListItemText>
              {this.state.smp19 ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={this.state.smp19} timeout="auto" unmountOnExit>
              <List className="tier1" component="div" disablePadding>
                <ListItem button className="nested">
                  <List className="tier2">
                    <ListItem onClick={this.handleClick.bind(this, 'smp19configManager')}><Link to='/Config_Manager'>Configurartion Manager</Link></ListItem>
                    <Collapse className="collapse" in={this.state.smp19configManager}>
                      <List className="tier3">
                        <ListItem onClick={this.handleClick.bind(this,'smp19applicationConfig')}><Link to={"Application_Config"}>Application Configuration</Link></ListItem>
                        <Collapse in={this.state.smp19applicationConfig} className="collapse">
                          <List>
                            <ListItem><Link to='/Upload_New_Configuration'>Upload New Configuration</Link></ListItem>
                            <ListItem><Link to='/Application_Properties'>Application Properties</Link></ListItem>
                            <ListItem><Link to='/Role_Based_Properties'>Role Based Properties</Link></ListItem>
                            <ListItem><Link to='/User_Input'>User Input</Link></ListItem>
                            <ListItem><Link to='/Result_Analyses'>Result Analyses</Link></ListItem>
                            <ListItem><Link to='/Test_Module'>Test Module</Link></ListItem>
                            <ListItem><Link to='/Endpoint_Operations'>Endpoint Operations</Link></ListItem>
                            <ListItem><Link to='/Workflow_Modules'>Workflow Modules</Link></ListItem>
                            <ListItem><Link to='/Test_Group'>Test Group</Link></ListItem>
                            <ListItem><Link to='/Startup_Test_Group'>Startup Test Group</Link></ListItem>
                            <ListItem><Link to='/Service_Policies'>Service Policies</Link></ListItem>
                            <ListItem><Link to='/Resource_Files'>Resource Files</Link></ListItem>
                            <ListItem><Link to='/DSAs'>Extensions / DSAs</Link></ListItem>
                          </List>
                        </Collapse>
                        <ListItem><Link to={"Envi_Config"}>Environment Configuration</Link></ListItem>
                        <ListItem><Link to="Version_Manager">Version Manager</Link></ListItem>
                        <ListItem><Link to="CSC_Config">CSC Configuration</Link></ListItem>
                        <ListItem><Link to="KMP">KMP</Link></ListItem>
                        <ListItem><Link to="Users">Users</Link></ListItem>
                        <ListItem><Link to="Schedules">Schedules</Link></ListItem>
                      </List>
                    </Collapse>
                    <ListItem onClick={this.handleClick.bind(this, 'smp19workflowBuilder')}><Link to='/Workflow'>Workflow Builder</Link></ListItem>
                    <Collapse in={this.state.smp19workflowBuilder} className="collapse">
                      <List>
                        <ListItem><Link to="/Business_Process">Business Process Workflow</Link></ListItem>
                        <ListItem><Link to="/Interactive_Procerss">Interactive Workflow</Link></ListItem>
                      </List>
                    </Collapse>
                    <ListItem><Link to='/CSS'>CSC</Link></ListItem>
                    <ListItem><Link to='/SiteBuilder'>Site Builder</Link></ListItem>
                  </List>
                </ListItem>
              </List>
            </Collapse>
            
          </List>
            </div>
        )
    }
}

export default Sidebar