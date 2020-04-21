import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props){
      super()
      this.state = {
          color: props.value
      }
  }

change = () => {
    this.setState({
        color: '#333'
    })
}


  
  render() {
    return (
      <div onClick = {this.change}  className="cell" style={{backgroundColor: this.state.color}}>
        
      </div>
    )
  };
  
}
