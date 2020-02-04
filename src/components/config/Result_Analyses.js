import React, { Component } from 'react'
import Result from '../images/Applications_ResultAnalyses.png'
export class Result_Analyses extends Component {
    render() {
        return (
            <div id="Result_Analyses">
                <h3>Result Analyses</h3>
                <p>Use the Result Analyses interface to assign priority to the result analyses configured in test modules. The priority determines the order in which the results returned appear in the consuming application.</p>
                <img src={Result}/>
                <h4>Understanding priority for result analyses</h4>
                <p>As result analyses are configured on the Result Analyses tab for a test module, the application assigns them default priority values. In turn, the requesting application displays the results returned based on priority. For example, a result with a higher priority appears in the consuming application ahead of any results with a lower priority.</p>
                <p>Default priority for a result analysis. Until your team changes priority on result analyses, the default priority values apply. By default, the first result analysis saved to a configuration is assigned priority 9999, the highest priority value. Also by default, result analyses saved in subsequent configurations are assigned the most recent priority value decreased by 1 (for example, 9998, 9997, 9996, and so on).</p>
                <p>We can also change the priority</p>
            </div>
        )
    }
}

export default Result_Analyses
