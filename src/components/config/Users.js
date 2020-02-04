import React, { Component } from 'react'
import UserDetails from '../images/Users_UserDetails.png'

export class Users extends Component {
    render() {
        return (
            <div id="Users">
                <h2>Users</h2>
                <p>From the User Details tab, you can add, edit, and delete user accounts for the SMP installation. By default, the grid on the page includes entries for each existing user account.</p>
                <img src={UserDetails}/>
            </div>
        )
    }
}

export default Users
