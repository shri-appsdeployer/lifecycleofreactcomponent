import React, { Component } from 'react'
import Comp2 from './Comp2';

export default class Comp1 extends Component {

  constructor(props){
    super(props);
    this.state={
      name:'shrinivas'
    }
    console.log('comp1 constructor invoked');
  }

  static getDerivedStateFromProps(props,state){
    console.log('comp1 getDeriveStateFromProps invoked')
    console.log(props,state)
    return null
  }

  componentDidMount(){
    console.log('comp1 component did mount invoked');
  }

  render() {
    console.log('comp1 render invoked')
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.props.age}</h2>
        <Comp2 age='24'/>
      </div>
    )
  }

}
