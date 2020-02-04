import React, { Component } from 'react'
import Test from '../images/Application_TestModules_MainScreen.png'

export class Test_Module extends Component {
    render() {
        return (
            <div id="Test_Module">
            <div className="Test_Module">
                <h3>Test Module</h3>
                <p>From the Application -> Test Modules interface, you can add, clone, edit, or remove test modules. In the Configuration Manager, you cannot fully configure a test module until the applicable overlay is published.</p>
                <img src={Test}></img>
                <h4>Use Auto-discovery for Result properties:</h4>
                <p>Before selecting a test module for editing, optionally select the check box. In that case and given the test module has been executed previously with the runTimeAutoDiscovery environment property turned on, the test module's Result Props tab automatically includes entries for each of the auto-discovered properties.</p>
                <p>As a result, you can avoid manually creating the entries requiring configuration in the test module. The manual process involves knowing the exact hierarchy and names for result properties in the applicable overlay and its overlay type.</p>
                <h4>Clone:</h4>
                <p>Select the entry for the test module you want to clone; type an ID for the clone in Module ID; and then click the Clone button.</p>
                <p>A preliminary version of the new test module is put in focus for editing. Except for the ID, the values are the same as that for the test module you selected for cloning</p>
                <h4>Edit:</h4>
                <p>Select the entry for the test module you want to edit, and then click the button.</p>
                <p>The selected test module is put in focus for editing</p>
                <h4>Remove:</h4>
                <p>Select the entry for the test module you want to delete, and then click the button. On the confirmation window displayed, click OK.</p>
                <h4>Module ID</h4>
                <p>Type the ID for a new test module, and then click the Add button.</p>
                <p>The new test module is put in focus for editing.</p>
                <h4>Add:</h4>
                <p>Click to create a new test module with the ID entered in Module ID.</p>
                <p>The new test module is put in focus for editing.</p>
                </div>
            </div>
        )
    }
}

export default Test_Module
