import React, { Component } from 'react'
import Action from '../images/Action.png'

export class Actions extends Component {
    render() {
        return (
            <div id="Actions">
                <h2>Actions:</h2>
                <p>An overlay action (the operation triggered when a check returns a particular value) defines an operation to be performed within or originating from a Motive™ model-based web application, based on the outcome of a check evaluation. For example, when a check fails, you could send an email to an administrator or run a command. One or more actions can be associated with each check in an overlay.</p>
                
                <p>Action includes,</p>
                <ul>
                <li>Adding actions to checks in overlays</li>
                <li>Editing actions in overlays</li>
                <li>Copying checks and actions in overlays</li>
                <li>Removing actions from checks in overlays</li>
                <li>Managing action templates</li>
                <li>Understanding the provided actions</li>
                </ul>
                <p>Edit Action page will look like,</p>
                <img src={Action}/>
            </div>
        )
    }
}

export default Actions
