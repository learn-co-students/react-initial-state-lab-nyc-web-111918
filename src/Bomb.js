// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
  constructor(prop){
    super(prop)
    this.state = {
      secondsLeft: prop.initialCount
    }
  }
  bombtimerChecker(){
    if (this.state.secondsLeft == 0){
      return "Boom!"
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    return (
      <div>{this.bombtimerChecker()}</div>
    );
  }

}

export default Bomb;
