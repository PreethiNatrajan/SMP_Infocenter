import React, { Component } from 'react'
import Role from '../images/Applications_Role-BasedProps.png'
export class Role_Based_Properties extends Component {
    render() {
        return (
            <div id="Role_Based_Properties">
                <h3>Role Based Properties</h3>
                <p>To open the Role-Based Properties window, click Role-Based Properties.</p>
                <img src={Role}></img>
                <p>A configuration that provides the mechanism for using SMP to determine permissions on an external entity not created and managed within the platform. Each role-based property includes assignment of one or more user roles. Only those users with accounts including at least one of the assigned roles are permitted to use the resources associated with the role-based property.</p>
                <p>When an application requests the list of role-based properties, SMP returns the information about the properties including which roles are permitted to use the associated resources. In turn, your applications team can map individual role-based properties with particular user interfaces and then use the list returned by SMP to determine which interfaces to expose.</p>
                <p>Role-based property configurations are not accessible through a web service, which is unlike the configurations for test groups, test modules, and endpoint operations; those are accessible from applicable web services provided with SMP.</p>
                <h4>Example:</h4>
                <p>Example. To determine which set of resource links to surface in a help desk application, create two role-based properties, Tier1Links and Tier2Links. The hypothetical properties both include a user role named Tier1role, while the Tier2Links property only includes the user role Tier2role. Given all of the resource links are mapped to the Tier2Links property, a user with the Tier2role would see the full set of resource links; however, a user with the Tier1role would see a subset of the resource links, including only those mapped to the Tier1Links property.</p>
                
            </div>
        )
    }
}

export default Role_Based_Properties 