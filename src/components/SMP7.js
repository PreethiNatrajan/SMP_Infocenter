import React, { Component } from 'react'
import ModelBuilder from './ModelBuilder'
import OverlayBuilder from './OverlayBuilder'
import ConfigManager from './ConfigManager'
import Workflow from './Workflow'
import Css from './Css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

export class SMP7 extends Component {
    handleClick=()=>{
        console.log("clicked");
    }
    render() {
        return (
            <Router>
            <div id="SMP7">
            <div className="SMP7">
            <h1>SMP 7</h1>
            <p>Service Management Platform (SMP) is a comprehensive toolset and action engine for customer experience management.</p>
            <h3>The Content of SMP7 are,</h3>
            <ul>
                <li>Model Builder</li>
                <li>Overlay Builder</li>
                <li>Configuration Manager</li>
                <li>Workflow</li>
                <li>Css</li>
            </ul>
            </div>
            </div>
            </Router>
        )
    }
}

export default SMP7