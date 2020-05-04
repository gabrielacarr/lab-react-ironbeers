import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import
import {HomePage} from './'

class App extends Component {
  render() {
    return (
      <div className="App">
       <HomePage/>
       
       <Switch>
         <Route/>

        
       </Switch>
      </div>
    );
  }
}

export default App;
