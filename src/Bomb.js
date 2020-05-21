// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
constructor(props) {
  super(props)
  console.log(props);
  this.state = {
    secondsLeft: props.initialCount
  }
  console.log(this.state);
}

bombTicker = (time) => {
  if (time > 0) {
    return `${time} seconds left before I go boom!`
  } else {
    return 'Boom!'
  }
}



render() {
    return (
      <div>
      {this.bombTicker(this.state.secondsLeft)}
      </div>
    )
  }
}

export default Bomb
