import React, { Component } from 'react';

class AwesomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {likesCount: 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike() {
    this.setState((prevState, props) => ({
      likesCount:prevState.likesCount++
    }));
  }

  render() {
    return ( 
      <div>
        Likes : <span>{this.state.likesCount}</span>
        <div>
          <button onClick={this.onLike}>Like me</button></div>
        </div>
    );
  }
}

export default AwesomeComponent;
