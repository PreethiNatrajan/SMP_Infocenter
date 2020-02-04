import React, { Component } from 'react'
import CSC from './images/CSC.png'
import Session from './images/create_session_prompts.png'

export class Css extends Component {
    render() {
        return (
            <div className="CSC">
                <h1>CSC</h1>
                <p>CSC(Customer Service Console) is an SMP browser-based application in which CSRs create sessions to assist subscribers. The console has several customer assistance facilities in which to run deployment-specific content, such as diagnostics, operations, and interactive workflows.</p>
                <img width={1100} src={CSC}/>
                <h3>Creating a session</h3>
                <p>Immediately following login or after clicking the End Session button, the console prompts for subscriber information with which to create a new session. For example, the prompts look like this in the default console configuration.</p>
                <img src={Session}/>
                <h5>To create a new session immediately after login</h5>
                <ul>
                <li>In the subscriber information fields, type or select values for the account for which to create the session.<p>In a pre-customized deployment:
                    <ul>
                    <li>In Subscriber ID, type any value that represents a hypothetical subscriber (for example, 123).</li>
                    <li>In External Case ID, type any value that represents a hypothetical case ID for the session (for example, 677).</li>
                    <li>In Custom Field, leave the field empty.</li>
                    </ul>
                </p></li>
                <li>Click the Create Session button.<p>The console validates the subscriber information entered. If valid, it creates the session and kicks off the startup group. The facilities licensed and configured for appearance are rendered on the page. For more information, see Console facilities. The full console page is displayed with the Dashboard tab tab in focus by default.</p>
                <p>The values you entered in the previous step are rendered in the console as follows:</p>
                <ul><li>Subscriber ID -> in first part of context string displayed in the upper-left corner of the Session bar</li>
                <li>The External Case ID -> in a ToolTip on the applicable session node on the Account Activity tab. For example, pause on the Current Session node.</li>
                </ul></li></ul>
                <h5>To end a session</h5>
                <p>In the upper-right corner of the Menu bar, click the End Session button.</p>
            </div>
        )
    }
}

export default Css
