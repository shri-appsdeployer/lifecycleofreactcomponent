import React, { Component } from 'react'

export default class Comp2 extends Component {

  constructor(props){
    super(props);
    this.state={
      name:'ABhiman'
    }
    console.log('comp2 constructor invoked');
  }

  static getDerivedStateFromProps(props,state){
    console.log('comp2 getDeriveStateFromProps invoked')
    console.log(props,state)
    return null
  }

  componentDidMount(){
    console.log('comp2 component did mount invoked');
  }

  render() {
    console.log('comp2 render invoked')
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h2>{this.props.age}</h2>
      </div>
    )
  }
  
}
