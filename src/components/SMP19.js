import React, { Component } from 'react'
import Workflow_Modules from './config/Workflow_Modules'
import OverlayBuilder from './OverlayBuilder'
import ConfigManager from './ConfigManager'
import Workflow from './Workflow'
import Css from './Css'
import SiteBuilder from './SiteBuilder'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export class SMP19 extends Component {
    render() {
        return (
            <Router>
            <div id="SMP7">
            <div className="SMP7">
            <h1>SMP 7</h1>
            <p>Service Management Platform (SMP) is a comprehensive toolset and action engine for customer experience management.</p>
            <h3>The Content of SMP7 are,</h3>
            <ul>
                <li>Configuration Manager</li>
                <li>Workflow</li>
                <li>CSC</li>
                <li>Site Builder</li>
            </ul>
            </div>
            </div>
            </Router>
        )
    }
}

export default SMP19
