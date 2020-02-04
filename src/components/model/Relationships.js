import React, { Component } from 'react'

export class Relationships extends Component {
    render() {
        return (
            <div id="Relationships">
                <h2>Relationships:</h2>
                <p>A relationship defines the dependency between two components and is based on a relationship type. Relationships help users understand how components are related to one another.</p>
                <p>The Relationships pane, which lists all the relationships in the current model, contains information about the type of relationship and components involved for each relationship. You can right-click on the headings in this pane to show or hide information. Model Builder does not display this pane by default. To show this pane, from the Model menu, click Show Components List.</p>
                <p>It is possible for us to create and remove the relationships between the components in Model Builder.</p>
            </div>
        )
    }
}

export default Relationships
