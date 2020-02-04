import React, { Component } from 'react'

export class Global extends Component {
    render() {
        return (
            <div id="Global">
                <h2>Global Variable:</h2>
                <p>A global variable is an intermediate storage container for data resulting from an evaluation. Any overlay can write data to or read data from a global variable.</p>
                <p>You can create global variables using Overlay Builder. Within a check, you can read from or write to global variables.</p>
                <p>The system initializes global variables to their default values when it evaluates an overlay. The data in a global variable is not persisted after evaluation; it is available only while an overlay is being evaluated. You can use global variables when one check launches another, to pass information from one check to another and to transform the information. You must copy the information to the overlay's results to persist it.</p>
                <p>It includes,</p>
                <ul>
                <li>Viewing global variables</li>
                <li>Creating global variables</li>
                <li>Reading and writing global variables</li>
                <li>Removing global variables</li>
                </ul>
            </div>
        )
    }
}

export default Global
