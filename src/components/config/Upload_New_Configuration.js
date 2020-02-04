import React, { Component } from 'react'
import Plan from '../images/Applications_PlanUpload.png'
import Upload from '../images/Application_upload_progress.png'

export class Upload_New_Configuration extends Component {
    render() {
        return (
            <div id="Upload_New_Configuration">
                <h3>Upload New Configuration</h3>
                <p>     The prerequisite is a .zip file containing the configuration data for upload. Often the .zip file is created by downloading the active config from another installation.</p>
                <h4>Plan Upload:</h4>
                <p>     To open the Plan Upload window, click Upload New Configuration The Plan Upload screen displays.</p>
                <img src={Plan}/>
                <h5>Browse:</h5>
                <p>     Click the button and then browse to the .zip file containing the data for upload.</p>
                <h5>Merge active config with config in .zip file:</h5>
                <p>     Select to create a new active config by combining the unique items from the config directory of the .zip file and the former active config (for example, test modules and workflow modules).</p>
                <p>     In addition, copy all items from other directories in the .zip file into the database (for example, models, overlays, and workflows).</p>
                <p>     Merge conflicts. By default, the .zip file data is set to take precedence over corresponding items in the database. Before committing the plan from next page, you can change the precedent for all conflicts or only change it for particular conflicts.</p>
                <p>     The Merge active config with config in .zip file option is selected by default.</p>
                <h5>Replace active config with config in .zip file:</h5>
                <p>     Select to create a new active config by including only the items in the config directory of the .zip file without any items from the former active config.</p>
                <p>     In addition, copy all items from other directories in the .zip file into the database (for example, models, overlays, and workflows).</p>
                <p>     Merge conflicts. With replace, all merge conflicts are ignored with no opportunity to change precedence before committing the plan from next page.</p>
                <h5>Description:</h5>
                <p>     Type a string to describe the upload plan.</p>
                <h5>Upload:</h5>
                <p>     The Review Changes Before Committing page is displayed.</p>
                <h5>Cancel:</h5><p>      Click to abandon upload plan.</p>
                <p>     The main page of the Application tab is displayed</p>
                <h4>Review Changes Before Committing:</h4>
                <p>During the automated check process, details return in expandable sections. Each section represents one of the directories included in the .zip file. For example: Configuration, Glossary Updates, Models, OptimalSettings, Overlays, Resources, Services, and Workflows.</p>
                <p>Before committing, review the details in each section, especially if merge conflicts and/or errors are indicated.</p>
                <img src={Upload}/>
                <h4>Commit Changes:</h4>
                <p>During the automated commit process, details return in expanded sections to indicate progress made. As commits for a section complete, the section is collapsed except when errors occur, in which case the section remains expanded. Most sections represent one of the directories included in the .zip file. For a description per section, see the table below.</p>
                <p>After the commit process completes for all sections, the final overall status is displayed at the top of the page. When Failed is displayed, review section details to determine which items were not saved to the database.</p>
                <p>When ready to return to other tasks, click the Back to Application link at the bottom of the page.</p>
            </div>
        )
    }
}

export default Upload_New_Configuration
