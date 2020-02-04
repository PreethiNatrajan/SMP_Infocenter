import React, { Component } from 'react'
import Service from '../images/Applications_ServicePolicies.png'

export class Service_Policies extends Component {
    render() {
        return (
            <div id="Service_Policies">
                <h3>Service Policies</h3>
                <p>A service policy is a behavior triggered by an event, rather than manually started by a human. You can use the Service Policies section of the application to map service policies to specific actions which trigger them.</p>
                <img src={Service}/>   
            </div>
        )
    }
}

export default Service_Policies
