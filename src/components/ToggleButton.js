import React, { Component } from 'react'
import '../App.css';
export class ToggleButton extends Component {
    render() {
        return (
            <div>
            <button className="toggle_button">
            <div className="toggle_button_line"/>
            <div className="toggle_button_line"/>
            <div className="toggle_button_line"/>
            </button>
                
            </div>
        )
    }
}

export default ToggleButton
