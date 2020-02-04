import React, { Component } from 'react'
import Extensions from '../images/Applications_ExtensionsDSAs_Extension.png'
import DSA from '../images/Applications_ExtensionsDSAs_DSAs.png'

export class DSAs extends Component {
    render() {
        return (
            <div id="DSAs">
                <h3>Extensions / DSAs</h3>
                <p>On the Application -> Extensions / DSAs interface, you can manage the SMP extensions and DSAs that have been uploaded to the database.</p>
                <h4>Extensions:</h4>
                <p>The Extensions tab contains an entry for each extension uploaded, including the name of the SMP extension and the name of the corresponding .jar file. An SMP extension is a .jar file with custom classes for use in a model or workflow.</p>
                <img src={Extensions}/>
                <h4>DSA Tab:</h4>
                <p>The DSA tab contains two lists:</p>
                <ul>
                <li>DSA Uploaded list: Each entry represents a DSA added to the current SMP configuration as a .jar file. The name of the DSA and of the .jar file are displayed.</li>
                <li>DSA Configured list: Each entry represents a DSA contained in the SMP.ear file. The DSA names are displayed.</li>
                </ul>

                <img src={DSA}/>
            </div>
        )
    }
}

export default DSAs 