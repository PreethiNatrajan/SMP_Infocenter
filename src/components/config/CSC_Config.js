import React, { Component } from 'react'
import CSC from '../images/CSC_Configuration.png'
export class CSC_Config extends Component {
    render() {
        return (
            <div id="CSC_Config">
                <h2>CSC Configuration</h2>
                <p>The active configuration defines the settings applied across servers with other published content. At login, the active configuration is loaded by default.</p>
                <img src={CSC}/>
                <p>Before moving to another page, click the Save Changes for Next Publish button at the top of the page. Unsaved changes are discarded upon leaving the page.</p>
                <p>To make saved changes active, click the Publish Application Configuration button.</p>
                <p>From the CSC Configuration tab, your team can:</p>
                <ul>
                <li>Configure the CSC Dashboard.<p>From the Dashboard tab, you can configure:</p>
                <ul><li>What information is displayed in the CSC Dashboard.</li><li>Which workflows can be launched from the CSC Dashboard's Troubleshooting pane.</li></ul>
                </li>
                <li>Configure the CSC Network Map.<p>The Network Map tab contains the following underlying tabs:</p>
                <ul><li>Initial Configuration: Contains settings for the initial network map configuration in CSC.</li><li>Action Links: Contains a list of devices for which actions are performed in CSC.</li></ul>
                </li>
                <li>Add, delete, and edit .</li>
                </ul>

            </div>
        )
    }
}

export default CSC_Config
