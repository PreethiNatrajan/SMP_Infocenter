import React, { Component } from 'react'
import Resource from '../images/Applications_ResourceFiles.png'

export class Resource_Files extends Component {
    render() {
        return (
            <div id="Resource_Files">
                <h3>Resource Files</h3>
                <p>On the Application -> Resource Files interface, the table includes entries for each of the product and custom resource files in the SMP Database. Settings from the files listed are in effect. From the interface, you can add and delete resource files. Also, you can view image resource files and edit text resource files.</p>
                <img src={Resource}/>
            </div>
        )
    }
}

export default Resource_Files
