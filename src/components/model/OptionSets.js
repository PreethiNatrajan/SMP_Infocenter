import React, { Component } from 'react'
import OptionSet from '../images/OptionSet.jpg'

export class OptionSets extends Component {
    render() {
        return (
            <div id="OptionSets">
                <h2>Option Sets</h2>
                <p>An option set is a collection of options (individual components) in which only one option is valid for a given application environment. For example, if your application configuration supports a web server with either Apache® or IIS, you could add an option set for your web server.</p>
                <img src={OptionSet}/>
                <p>Option sets:</p>
                <ul>
                <li>Can contain common properties and the discovery scripts used to find the values of these properties. (The options in the option set can contain properties as well, just as any other component can.)</li>
                <li>Must contain a selector script that determines (during the discovery process) which option within the collection is valid for a given application environment.</li>
                
                </ul>
                <p>Optionally, you can set a default option. If none of the other options in the set return true, the option that is set as the default will be selected automatically.</p>
                <p>In addition, an option set can return no valid options during discovery. When this happens, the option set will not be available in the snapshot.</p>
                <p>It is possible for us to create, view content, remove option sets, edit option sets and selector, and setting to default options.</p>
            </div>
        )
    }
}

export default OptionSets
