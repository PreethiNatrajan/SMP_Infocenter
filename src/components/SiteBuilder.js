import React, { Component } from 'react'

export class SiteBuilder extends Component {
    render() {
        return (
            <div id="SiteBuilder">
                <h1>Site Builder</h1>
                <p>The Nokia Site Builder introduces a different approach for implementing customer service applications. Users can define their own applications by creating site definitions. A site definition includes pages and widgets that determine the behavior of the application, and attributes such as logos that determine the look and feel of the application. A sample Customer Service Portal (CSP) application, which is provided with SMP, is able to render a site definition, resulting in the final application as designed by the user. All changes to the site can be done through configuration. Also, a user can create sites that do not require a deployment with SMP. In an upgrade scenario, the Service Portal can be updated without changing the customer's site definitions and design choices.</p>
                <ul>
                <li>Sites</li>
                <li>Pages</li>
                <li>Widgets</li>
                <li>Shared Assets</li>
                <li>Localization</li>
                </ul>
                <h3>Sites:</h3>
                <p>The Sites dashboard allows you to duplicate, create, edit, and delete sites.</p>
                <p>A site is an individual portal intended for a specific set of users to provide some type of customer support. Sites are defined in the Site Builder and are accessible to the applicable users through the Service Portal Engine. Each saved site specifies the properties of a site, its pages, and its resources such as system and custom images. Pages are made up of one or more widgets.</p>
                <p>SMP provides an out-of-the-box site intended for agents who assist subscribers--Customer Service Portal (CSP)--along with CSP pages and widgets that your team can clone (duplicate), configure, and use.</p>
                <p>Your team may use some of the provided assets as a starting point for creating a site for another purpose. Also, you may opt to start from scratch and create your own widgets, pages, and site.</p>
                <h3>Pages:</h3>
                <p>The Pages dashboard allows you to duplicate, create, edit, and delete pages.</p>
                <p>A page is an individual component of a site that has a defined layout and toolbar along with references to one or more widgets. A page is intended for a specific set of users to provide some type of customer support. Pages are defined in the Site Builder and are accessible to applicable users through the Service Portal Engine.</p>
                <p>SMP provides an out-of-the-box site intended for agents who assist subscribers--Customer Service Portal (CSP)--along with CSP pages and widgets that your team can clone (duplicate), configure, and use.</p>
                <p>Your team may use some of the provided assets as a starting point for creating a page for another purpose. Also, you may opt to start from scratch and create your own widgets, pages, and site.</p>
                <h3>Widgets:</h3>
                <p>The Widgets dashboard allows you to duplicate, create, edit, and delete widgets.</p>
                <p>A widget is used on a page to perform a specific task such as calling workflows and service operations to display information (tables, graphs, and charts) for a specific type of customer support for a specific set of users. Widgets are defined in the Site Builder and are accessible to applicable users through the Service Portal Engine. Each widget has a definition, properties, icons, and executions.</p>
                <p>SMP provides an out-of-the-box site intended for agents who assist subscribers--Customer Service Portal (CSP)--along with CSP pages and widgets that your team can clone (duplicate), configure, and use.</p>
                <p>Your team may use some of the provided assets as a starting point for creating a widget for another purpose. Also, you may opt to start from scratch and create your own widgets, pages, and site.</p>
                <h3>Shared Assets:</h3>
                <p>The Shared Assets dashboard allows you to add and delete shared assets. These shared assets include:</p>
                <ul>
                <li>Icons</li>
                <li>Logos</li>
                <li>Translation files (locales)</li>
                </ul>
                <p>The Shared Assets dashboard also allows you to edit translation files.</p>
                <h3>Localization:</h3>
                <p>This chapter describes how I18N locales work with the Site Builder and the Service Portal. A locale is a key-value mapping that is associated with a locale (English, French, and so on) and a resource (site, widget, or shared asset). This chapter describes the Default locale and then describes the different capabilities and use cases for:</p>
                <ul>
                <li>
                Shared asset locale</li>
                <li>Widget locale</li>
                <li>Precedence</li>
                </ul>
            </div>
        )
    }
}

export default SiteBuilder
