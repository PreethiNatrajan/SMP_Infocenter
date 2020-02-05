import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
// import Versions from './components/Versions';
// import About from './components/About';
// import Contact from './components/Contact';
// import Sidebar from './components/Sidebar';
// import ToggleButton from './components/ToggleButton';
// import SideDrawer from './components/SideDrawer';
// import Datasource from './components/Datasource';
// import Model from './components/Model';
// import Overlay from './components/Overlay';
// import Config from './components/Config';
// import Workflow from './components/Workflow';
// import Css from './components/Css';

function App() {
  return (
    <Router>
        <div>
        
        
          <nav className="nav_bar" >
          
          <div className="navUlStyle">
          {/*<div>
          <ToggleButton/>
          </div>*/}
          
          <div className="logo"><a href="/SMP"> SMP Infocenter</a></div>
          <div className="spacer"></div>
          <div className="versions"><ul>
          <li><a href="/"></a></li>
          
          </ul></div>
          
          
          </div>
          </nav>
          <div className="sample">
          {/*<Sidebar/>*/}
        
          <Switch>
              <Route path='/' component={Home} />
              {/*<Route path='/versions' render={() => (
                <div>
                <h1>Versions</h1>
                <h3>The versions of SMP are,</h3>
               <ul className="right">
              
               <li>SMP 7</li>
               <li>SMP 18</li>
               <li>SMP 19</li>
               </ul>
            </div>
              )}/>*/}
              <Route path='/SMP' render={() => (
                <div>
                  <h2>SMP</h2>
                  <p>Service Management Platform (SMP) is a comprehensive toolset and action engine for customer experience management. With SMP, service providers gain the following:</p>
                  <ul className="right-container-list">
                  <li>A unified platform including a flexible integration framework, test and diagnostic capabilities, a scalable workflow solution for interaction with customers, and completion of business processes involving multiple parties.</li>
                  <li>Omni-channel platform delivering integrated customer experiences across multiple support channels, such as assisted service, self service, interactive voice response (IVR), and field technician channels.</li>
                  <li>The opportunity to extend and control the service delivery ecosystem as a part of leveraging existing investment in device management; operations support systems (OSS) and business support systems (BSS); network management systems (NMS) and element management systems (EMS); and customer consoles.</li>
                  <li>Integrated tools in which IT developers and business analysts author, publish, and execute service troubleshooting and management logic.</li>
                  </ul>
                  <h3>The versions of SMP are,</h3>
               <ul >
              
               <li>SMP 7</li>
               <li>SMP 18</li>
               <li>SMP 19</li>
               </ul>
                </div> 
              )}/>
          </Switch>
          </div>
          </div>
         
      </Router>
      
  );
}

export default App;