import React, { Component } from 'react'
import Check from '../images/Check.png'

export class Checks extends Component {
    render() {
        return (
            <div id="Checks">
                <h2>Checks:</h2>
                <p>A check is a business rule that analyzes a model to address a business problem. Checks are created using expressions or JavaScript code. Checks can have associated actions, which are operations that are performed after a check is evaluated during discovery (in a web application that uses the Motive™ model-based system).</p>
                
                <p>Check includes,</p>
                <ul>
                <li>Creating checks for overlays</li>
                <li>Editing checks in overlays</li>
                <li>Copying checks and actions in overlays</li>
                <li>Formatting checks using expressions</li>
                <li>Formatting checks using JavaScript</li>
                <li>Accessing clusters with JavaScript</li>
                <li>Removing checks from overlays</li>
                </ul>
                <p>Edit check page will look like,</p>
                <img src={Check}/>
            </div>
        )
    }
}

export default Checks
