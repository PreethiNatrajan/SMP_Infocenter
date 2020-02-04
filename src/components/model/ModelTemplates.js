import React, { Component } from 'react'

export class ModelTemplates extends Component {
    render() {
        return (
            <div id="ModelTemplates">
                <h2>Model Templates:</h2>
                <p>A model template is a portion of a model that is saved for reuse in other models. Model templates can include any elements in a model: components, option sets, relationships, and properties.</p>
                <p>For example, if your applications often use Solaris, you could create a Solaris template that includes a component with the appropriate properties and discovery scripts. Each time you need to add a Solaris component to a model, it would be readily available and you would not have to repeat the same tasks.</p>
                <p>Model templates can also include multiple model components. For example, if your applications often include both a server machine and a client machine, you can create a model template that includes all related components, properties, and relationships. Then, when you need to add this client and server combination to your model, you can add all these elements at once instead of one at a time.</p>
                <p>We can create a template, view template information, showing and hiding template, removing the template.</p>
            </div>
        )
    }
}

export default ModelTemplates
