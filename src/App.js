import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
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
          <div>
          {/*<ToggleButton/>*/}
          </div>
          <div className="logo"><a href="/"> SMP</a></div>
          <div className="spacer"></div>
          
          
          
          </div>
          </nav>
          <div className="sample">
          {/*<Sidebar/>*/}
        
          <Switch>
              <Route path='/' component={Home} />
          </Switch>
          </div>
          </div>
         
      </Router>
      
  );
}

export default App;