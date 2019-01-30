// your Bomb code here!
import React, { Component } from 'react';

export default class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    secondsLeft: props.initialCount
    };
  }

  boom = () =>{
    if (this.state.secondsLeft === 0){
      console.log(this.state.secondsLeft);
      return 'Boom!'
    } else {
      return `${this.state.secondsLeft} seconds left before I go boom!`
    }
  }

  render() {
    return (
        <div>
          <span>{this.boom()}</span>
        </div>
    )
  }
}
