import React, { Component } from 'react'
import KMP_Con from '../images/KMP_Configurations.png'

export class KMP extends Component {
    render() {
        return (
            <div id="KMP">
                <h2>KMP</h2>
                <p>The KMP tab is reserved for deployments slated to use KMP to manage their SMP configuration assets. The tab is not displayed unless the account with which you log in includes the KMPAdministrator system role.</p>
                <img src={KMP_Con}/>
                <p>From the KMP tab, your team can:</p>
                <ul>
                <li>Configure the connection between the SMP installation and the KMP Server</li>
                <li>Check out the deployment's solution from KMP to the SMP installation</li>
                <li>Sync assets such that local assets in the SMP installation and remote assets in KMP become in sync</li>
                <li>Identify local assets that are tracked against the solution checked out</li>
                </ul>
            </div>
        )
    }
}

export default KMP
 