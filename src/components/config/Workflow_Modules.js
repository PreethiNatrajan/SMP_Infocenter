import React, { Component } from 'react'
import Workflow from '../images/Applications_WorkflowModules.png'

export class Workflow_Modules extends Component {
    render() {
        return (
            <div id="Workflow_Modules">
                <h3>Workflow Modules</h3>
                <p>From the Application -> Workflow Modules interface, you can add, edit, or remove workflow modules. In the Configuration Manager, you cannot fully configure a workflow module until the applicable workflow is published. Workflows are authored and published from the Workflow Builder.</p>
                <img src={Workflow}/>
                <p>A workflow module is a configuration a client application can use for executing a particular workflow, either an interactive workflow or a business process workflow, that is published to the SMP Database. The workflow module defines several key properties in addition to the following:</p>
                <ul>
                <li>Which user roles are permitted to use the module</li>
                <li>Any metadata attributes for providing additional information to client users</li>
                </ul>
            </div>
        )
    }
}

export default Workflow_Modules
