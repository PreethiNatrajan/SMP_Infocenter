import React, { Component } from 'react'
import Group from '../images/Applications_TestGroups.png'
export class Test_Group extends Component {
    render() {
        return (
            <div id="Test_Group">
                <h3>Test Group</h3>
                <p>A set of one or more test modules. Test groups are defined in the application configuration; they are available for execution by a client or an SMP API.</p>
                <p>From the Application -> Test Groups interface, you can create test groups, assign test modules and user roles to them, and define role-based descriptions for them.</p>
                <img src={Group}/>
            </div>
        )
    }
}

export default Test_Group