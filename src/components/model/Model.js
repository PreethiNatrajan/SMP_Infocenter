import React, { Component } from 'react'
import ModelBuilder1 from '../images/ModelBuilder1.jpg'
import ModelBuilder2 from '../images/ModelBuilder2.jpg'


export class Model extends Component {
    render() {
        return (
            <div id="Model">
            <h2>Model:</h2>
                <p>A model is an abstract representation that defines an application configuration, which is the IT infrastructure (including hardware and software components, relationships and dependencies) of a mission-critical application or business process.</p>
                <img src={ModelBuilder1}></img>
                <p>Models establish general information about an application configuration and provide a reusable structure on which many business operations can be performed.</p>
                <p>Multiple Model use the same environment but provides different perspectives of that environment</p>
                <img src={ModelBuilder2}></img>
                <p>Models are comprised of:</p>
                <ul>
                <li>Components (and optionally option sets) and the relationships between them.</li>
                <li>Capabilities that define how to retrieve data during discovery. Capabilities are bound to components to define the data source protocols used to retrieve data during discovery.</li>
                <li>Properties and the discovery scripts used to find their values.</li>
                </ul>
            </div>
        )
    }
}

export default Model
