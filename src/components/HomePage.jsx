// Create a component that holds three links
// Steps to create a component: is to src and component for organization
// Create the functionality of the file
// Import

import React, { Component } from 'react'

export default class HomePage extends Component {
    render() {
        return (
            <>
               <Link to ="/beers">Beers</Link>
               <Link to ="/random-beer">Random Beers</Link>
               <Link to ="/new-beer">New Beers</Link>
            </>
        )
    }
}
