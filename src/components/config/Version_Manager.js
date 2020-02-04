import React, { Component } from 'react'
import Download from '../images/Versions_Download.png'
import Reset from '../images/Versions_ResetCache.png'
import Version from '../images/Versions_Configuration.png'
import Status from '../images/Versions_CheckServerStatus.png'
import Manage from '../images/Versions_Manage.png'

export class Version_Manager extends Component {
    render() {
        return (
            <div id="Version_Manager">
                <h2>Version Manager</h2>
                <p>From the Versions tab, you can upload, download, and manage configuration versions.</p>
                <p>At login, the active configuration is loaded into the browser session. The active configuration defines the settings applied across servers with other published content (e.g., overlays, workflows).</p>

                <img src={Version}/>
                <h3>Upload New Configuration</h3>
                <p>The prerequisite is a .zip file containing the configuration data for upload. Often the .zip file is created by downloading the active config from another installation.</p>
                <p>The upload process includes three primary steps:</p>
                <ul>
                <li>Plan upload</li>
                <li>Review changes before committing</li>
                <li>Commit changes</li>
                </ul>
                <h3>Download Active Config</h3>
                <img src={Download}/>
                <p>As of SMP 6.1.1, you can perform two types of configuration download:</p>
                <ul>
                <li>Full download of the active configuration: Downloads a copy of the active config along with all other assets currently published in the SMP Database</li>
                <li>Partial download of the active configuration: Creates and downloads a partial copy of the active config that contains only user-selected SMP assets.</li>
                </ul>
                <h3>Config Versions</h3>
                <p>On the Versions -> Config Versions page, the table includes a row for each config version created.</p>
                <img src={Manage}/>
                <p>By default with each publish, a new config version is created and made active. The active version is referred to as the active config; its settings are in effect across servers with other published content (for example, models, overlays, and workflows). From the table, you can:</p>
                <ul>
                <li>Load the settings for a particular version into the pages of the Application tab</li>
                <li>Make active a particular version of the config<p>The row associated with the active config is highlighted with an asterisk (*) next to the version number.</p></li>
                <li>Delete a particular version of the config except for the version that is the active config.</li>
                </ul>
                <h3>Reset Cache</h3>
                <p>This section of the application allows you to empty (clean) the cache. The system caches model discovery scripts and configuration values to improve performance, so you should clear the cache when models or overlays have changed.</p>
                <img src={Reset}/>
                <h3>Check Server Status</h3>
                <p>From the Versions -> Check Server Status page, confirm whether the same config version is published across servers. Keep in mind that the page lacks entries for server instances that are not currently running.</p>
                <img src={Status}/>

            </div>
        )
    }
}

export default Version_Manager 