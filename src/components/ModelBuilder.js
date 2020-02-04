import React, { Component } from 'react'
import Model from './model/Model'
import Components from './model/Components'
import ModelBuilder3 from './images/ModelBuilder3.png'
import OptionSets from './model/OptionSets'
import Relationships from './model/Relationships'
import ModelTemplates from './model/ModelTemplates'
import PropertyTemplate from './model/PropertyTemplate'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


export class ModelBuilder extends Component {
    render() {
        const {match} = this.props;
        return (
            <div id="Model_Builder">
            <div className="Model">
            <br/>
                <h1>MODEL BUILDER</h1>
                <p>Model Builder enables you to create models that capture the hardware and software components and dependencies of the IT infrastructure of a mission-critical application or business process, which is referred to as an application configuration.</p>
                
                <p>The models you create are consumed by Overlay Builder users (who create overlays that help users identify and address issues within their application environment) and by Motive™ model-based web application users (who use models and overlays to resolve application environment issues).</p>
                
                <p>The distinction between models and overlays allows you to keep the models of your business separate from the business logic, which you can store in overlays. Thus, changes can be made to the data aggregation and component modeling layers with minimal effect on the business logic. And you can create multiple overlays for a single model, making it easy to add new business processes.</p>
                <p>Using Model Builder, you can create and maintain:</p>
                <p>Model Builder will look like:</p>
                <img width={1100} src={ModelBuilder3}/>               
                
            </div>
            </div>
        )
    }
}

export default ModelBuilder