// your Bomb code here!
import React from 'react'

class Bomb extends React.Component {
  constructor(props) {
    super(props);
    this.state={secondsLeft: props.initialCount}
  }

  render() {
    let text;

    if (this.state.secondsLeft > 0) {
      text = <p>{this.state.secondsLeft} seconds left before I go boom!</p>
    } else {
      text = <p>Boom!</p>
    }

    return (
      <div>
        {text}
      </div>
    )
  }
}

export default Bomb
