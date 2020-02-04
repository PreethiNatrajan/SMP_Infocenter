import React, { Component } from 'react'
import ModelBuilder from './ModelBuilder'
import OverlayBuilder from './OverlayBuilder'
import ConfigManager from './ConfigManager'
import Workflow from './Workflow'
import Css from './Css'
import BotBuilder from './BotBuilder'

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


export class SMP18 extends Component {
    render() {
        return (
            <Router>
            <div id="SMP18">
            <div className="SMP18">
            <h1>SMP 18</h1>
            <p>Service Management Platform (SMP) is a comprehensive toolset and action engine for customer experience management.</p>
            <h3>The Content of SMP18 are,</h3>
            <ul>
                <li>Configuration Manager</li>
                <li> Workflow</li>
                <li> Css</li>
                <li> Bot Builder</li>
            </ul>
            </div>
            </div>
            </Router>
        )
    }
}

export default SMP18
