import React, { Component } from 'react'

export class Components extends Component {
    render() {
        return (
            <div id="Components">
                <h2>Components:</h2>
                <p>A component is a logical or physical hardware or software element within an application configuration, such as a web server or the Microsoft® Windows® XP operating system. Components are created based on component types that group the components into like categories, such as Database or File Server, so that they share the same icon in the model and users can associate them easily. Components are associated with each other using relationships, which define how the components depend on one another.</p>
                <p>Each component can contain:</p>
                <ul>
                <li>Properties and the discovery scripts used to find their values.</li>
                <li>Capabilities that define how data is found during discovery. Capabilities are bound to components to define the underlying data source protocols used to retrieve data during discovery.</li>
                </ul>
                <p>Multiple components can be grouped together using:</p>
                <ul>
                <li>Option sets that act as placeholders for one of the two or more components (options) that they contain.</li>
                <li>Clusters that group two or more identical components.</li>
                </ul>
                <p>A component (or a group of components and their relationships) can be reused in other models if it is saved as a model template.</p>
                <p>The Components pane, which lists all the components in the current model, contains name, description, and type information for each component. You can right-click on the headings in this pane to show or hide information. You can also sort by name and type in ascending or descending order by clicking the associated headings in the pane. Model Builder does not display this pane by default. To show this pane, from the Model menu, click Show Components List.</p>
                <p>It is possible for us to create, copy, edit and remove the component from the Model Builder</p>
                <h3>Cluster:</h3>
                <p>A cluster is a group of two or more identical components or option sets used to define when multiple instances of a component or option set are possible in an application configuration. Each component or option set (instance) in a cluster has the same properties, although the values of these properties, which are determined during discovery, may vary by instance.</p>
                <p>For example, if your application can have multiple client computers with the same requirements, you could create a single component called Client and designate it as a cluster component. Each individual client computer found during discovery is considered a cluster instance.</p>
                <p>When you create a cluster, you must:</p>
                <ul>
                <li>Write a cluster discovery script.</li>
                <li>Create a cluster instance identifier property.</li>
                <li>Identify a unique name for each cluster instance.</li>
                <li>Set the scope of each property in the cluster.</li>
                </ul>
                
            </div>
        )
    }
}

export default Components
