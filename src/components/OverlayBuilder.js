import React, { Component } from 'react'
import Overlay from './overlay/Overlay'
import Checks from './overlay/Checks'
import Actions from './overlay/Actions'
import Global from './overlay/Global'
import OverlayFamily from './images/OverlayFamily.png'
import OverlayBuild from './images/OverlayBuild.png'

export class OverlayBuilder extends Component {
    render() {
        return (
            <div id="OverlayBuilder">
            <div className="Overlay">
            <br/>
                <h1>OVERLAY BUILDER</h1>
                <p>Overlay Builder is a Motive desktop application which enables you to create overlays that help users address issues within their application environment. Overlays are available within the Motive model-based web applications to users who support application environments.</p>
                <p>Overlay Builder will look like,</p>
                <img width={1100} src={OverlayBuild}/>
                <h2>Overlays</h2>
                <p>Overlays are well suited to storing the business logic of an application. An overlay draws its data from a model, and many overlays can use the same model. By storing your business logic in an overlay, you keep it separate from your model of your systems, so that models and business logic can be changed and managed separately.</p>
                <p>As a user of Overlay Builder, you should be a technical application expert with a broad and deep understanding of the business and operational issues pertaining to the application. You will create and maintain the technical support processes for applications.</p>
                <p>Create a new Overlay using the below Dailog box</p>
                <img src={OverlayFamily}/>
                <p>Using Overlay Builder, you will create and maintain:</p>
                <ul>
                <li>Overlay that help users address issues with their application environment.</li>
                <li>Checks that provide the information necessary to identify a problem.</li>
                <li>Actions that define the operations that may be performed to address the problem.</li>
                <li>Global that define values used by checks to store and transform data</li>
                </ul>
                </div>
            </div>
        )
    }
}

export default OverlayBuilder