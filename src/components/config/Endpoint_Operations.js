import React, { Component } from 'react'
import Endpoint from '../images/Applications_EndpointOperations.png'

export class Endpoint_Operations extends Component {
    render() {
        return (
            <div id="Endpoint_Operations">
                <h3>Endpoint Operations</h3>
                <p>Use the Endpoint Operations tab to add, edit, or remove endpoint operations. In the Configuration Manager, you cannot fully configure an endpoint operation without first developing its operation implementation. Afterward, you can associate the implementation's test module with the endpoint operation.</p>
                
                <img src={Endpoint}/>
                <p>In the Configuration Manager, you can create endpoint operations to facilitate the normalization of operations that one or more managers tell endpoints to execute. For example, many operators depend on reboot operations to manage mobile, femtocell, and broadband devices from varying managers.</p>
                <h4>Endpoint operations:</h4>
                <p>The endpoint operation is a data configuration stored in the SMP Repository. The configuration defines the manner in which the Service Management Platform (SMP) is to handle a client request for executing the corresponding operation. The operation is the function or group of procedures that the applicable manager instructs a given endpoint to execute on itself.</p>
                <p>The SMP validates a client request based on the user roles assigned to the endpoint operation and the input parameters and descriptors it provides. All requests must include an endpoint descriptor, but you can configure the endpoint operation to require clients to provide particular input parameters along with a subscriber descriptor and/or user descriptor. After validating a client request, SMP executes the applicable operation implementation.</p>
                <h4>Operation implementations:</h4>
                <p>The operation implementation is comprised of the following elements:</p>
                <ul>
                <li>A model that enables communication with the applicable manager for a given endpoint</li>
                <li>An overlay that defines the result to return upon operation execution on a given endpoint</li>
                <li>A test module that defines how to execute the modeling process</li>
                </ul>
                <p>For the implementation's corresponding endpoint operation, you select the test module in the Implementation Module drop-down list on the Properties tab. This selection determines which operation implementation SMP uses in response to validated client requests.</p>
                
            </div>
        )
    }
}

export default Endpoint_Operations
