import React, { Component } from 'react'

export class Overlay extends Component {
    render() {
        return (
            <div id="Overlay">
                <h2>Overlay:</h2>
                <p>An overlay evaluates a snapshot (a representation of the state of an application environment at a given time) using a set of checks (conditions about a business issue) that determine the cause of problems and configuration issues for a particular application environment. The overlay then enables users of Motive™ model-based web applications to apply actions that address those issues.</p>
                <p>An overlay is built on top of an application model that defines the hardware and software components, relationships, and dependencies of an application configuration. Each overlay consists of one or more checks that evaluate an application issue. Each check is associated with one or more actions that work to address the issue.</p>
                <p>An overlay has an Overlay Type that defines the results the overlay can produce and how the results should be displayed.</p>
                <p>Overlays help users determine if the current configuration of an environment is conforming to the specifications outlined in the policy</p>
                <p>It is possible of,</p>
                <ul>
                <li>Creating overlays</li>
                <li>Switching between open overlays</li>
                <li>Working with overlays</li>
                <li>Importing and exporting overlays</li>
                <li>Viewing and managing overlay information</li>
                </ul>
            </div>
        )
    }
}

export default Overlay
