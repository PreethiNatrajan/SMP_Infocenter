import React, { Component } from 'react'
import Startup from '../images/Applications_StartupTestGroups.png'

export class Startup_Test_Group extends Component {
    render() {
        return (
            <div id="Startup_Test_Group">
                <h3>Startup Test Group</h3>
                <p>A startup test group is a test group slated for automatic execution at session creation in an SMP-based console (for example, the Customer Service Console).</p>
                
		<img src={Startup}/>
                <p>Typically, the test groups assigned as startup test groups are configured with:</p>
                <ul>
                <li>User roles for a particular user type<p>For example: CSRs who handle Tier 1 calls</p></li>
                <li>Test modules that return results helpful in most SMP sessions for the applicable user type<p>For example: checks on outages, account status, and overall service quality</p></li>

                </ul>
            </div>
        )
    }
}

export default Startup_Test_Group
