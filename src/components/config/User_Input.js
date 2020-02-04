import React, { Component } from 'react'
import User from '../images/Applications_UserInputDefs.png'

export class User_Input extends Component {
    render() {
        return (
            <div id="User_Input">
                <h3>User Input</h3>
                <p>To open the User-Input Definitions window, click User-Input Definitions.</p>
                <img src={User}/>
                <p>A user input definition specifies metadata for a model input common to one or many test modules. For example, your deployment may include several test modules that require the subscriber ID as input. Ultimately, you can leverage the user inputs created to re-use collected values and minimize repeat requests.</p>
                <h4>High-level process for implementing a user input</h4>
                <ul>
                <li><p>From the Application -> User Input Definitions page, add the user input, configure a definition, then click Save Changes for Next Publish.</p>
                <p>In turn, the user input is available for assignment to any of the model inputs in a test module.</p></li>
                <li>Assign the user input to the applicable model inputs within one or more test modules. Optionally, mark the user input as shared.
                <h4>Shared versus non-shared user input</h4>
                <h5>Shared user input</h5>
                <p>During the given SMP session, a shared user input is only requested once. As a result and if the value is cached, the test module is always executed with the cached value.</p>
                <h5>Non-shared user input</h5>
                <p>During a given SMP session, a non-shared user input is always requested. The value provided is not cached for re-use.</p>
                </li>
                </ul>
            </div>
        )
    }
}

export default User_Input 