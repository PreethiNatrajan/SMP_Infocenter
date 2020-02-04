import React, { Component } from 'react'
import Envi from '../images/Environment_Configuration.png'
import EnviPro from '../images/Environment_EnvProperties.png'

export class Envi_Config extends Component {
    render() {
        return (
            <div id="Envi_Config">
                <h2>Environmental Configuration</h2>
                <p>From the Environment tab, the settings you publish take effect immediately. The environment configuration is not versioned, and most of its settings cannot be imported or exported with the exception of environment properties.</p>
                <img src={Envi}/>
                <h3>Environment Properties</h3>
                <p>Environment properties allow you to set values that vary from one database environment to another.</p>
                <img src={EnviPro}></img>
                <p>They differ from general properties in the following ways:</p>
                <ul>
                <li>The properties are not tied to a version of the application configuration. They are stored separately in the database; whatever values are saved last for these properties are used for every configuration.</li>
                <li>Similarly, environment properties are not exported or imported with a version of the application configuration. Instead, you can export and import the environment properties for a database as a separate set of properties.</li>
                
                </ul>
                <p>These properties allow you to maintain differences between two databases when you are testing changes in one database and then moving them to another database when they are ready for use.</p>
                <p>For example, if you have a development database and a production database, you can use environment properties to set values which differ across the two databases. Properties set via environment properties do not get copied across when you import values from one database to another. This prevents development-specific properties from overwriting production properties when you do an import.</p>
                <p>Example uses for these properties include:</p>
                <ul>
                <li>The user name to access a specific database.</li>
                <li>The name or location of a data source.</li>
                </ul>
            </div>
        )
    }
}

export default Envi_Config