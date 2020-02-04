import React, { Component } from 'react'
import Image from './images/Workflow_Builder.jpg'
import Business_Process from './workflow/Business_Process'
import Interactive_Procerss from './workflow/Interactive_Procerss'

export class Workflow extends Component {
    render() {
        return (
            <div id="Workflow">
                <h1>Workflow Builder</h1>
                <p>Browser-based tool for authoring, updating, and publishing interactive workflows and business process workflows.</p>
                <img src={Image}/>
                <p>The Workflow builder will integrate the details of Overlay and Model builder.</p>
               
            </div>
        )
    }
}

export default Workflow