import React, { Component } from 'react'
import App_Pro from '../images/Applications_ApplicationProps.png'

export class Application_Properties extends Component {
    render() {
        return (
            <div id="Application_Properties">
            <div className="Properties">
                <h3>Application Properties</h3>
                <p>To open the Application Properties window, click Application Properties.</p>
                <img src={App_Pro}></img>
                <p>In the Application Properties window, you can configure the following types of properties:</p>
                <ul>
                <li>SMP properties - properties created in the database with other core configuration data at installation time; built-in properties have system-wide effects</li>
                <li>Acceptable Application Thresholds - threshold allowances</li>
                <li>Custom properties - deployment-specific properties (name/value pairs) that your team creates as needed</li>
                </ul>
                </div>
            </div>
        )
    }
}

export default Application_Properties