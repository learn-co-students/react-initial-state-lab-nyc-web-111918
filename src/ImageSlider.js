import React, {Component} from 'react';
// your Bomb code here!
export default class ImageSlider extends Component{
  constructor(props){
    super(props)
    this.state={
      currentSlideIndex: 0
    }
  }

  render(){
    return <p>I am on slide {this.state.currentSlideIndex}</p>
  }
}
// your ImageSlider code here!
