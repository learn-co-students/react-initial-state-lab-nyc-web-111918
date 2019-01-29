import React, {Component} from 'react';
// your Bomb code here!
export default class Bomb extends Component{
  constructor(props){
    super(props)
    this.state={
      secondsLeft: props.initialCount
    }
  }
  bombText(t){
    if(t>0){
      return `${t} seconds left before I go boom!`
    }else{
      return "Boom!"
    }
  }
  render(){
    return <p>{this.bombText(this.state.secondsLeft)}</p>
  }

}
