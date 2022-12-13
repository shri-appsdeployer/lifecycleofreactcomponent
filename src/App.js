import React, { Component } from 'react'
import Comp1 from './components/Comp1'

export default class App extends Component {
  
  render() {
    return (
      <div>
        <h1>App</h1>
        <Comp1 age='20'/>
      </div>
    )
  }
}
