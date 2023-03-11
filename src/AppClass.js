import React, { Component } from 'react';
import BoxClass from "./component/BoxClass";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = { // state 를 한번에 생성
      counter2:0,
      num:1,
      value:0,
    }
  }

  increase = () => {
    this.setState({counter2:this.state.counter2 +1, value:this.state.value +1}) // react set State function
  };

  render() {
    return (
      <div>
        <div>
          <div>state:{this.state.counter2}</div>
          <button onClick={this.increase}>클릭!</button>
          <BoxClass num={this.state.value}/>
        </div>

      </div>
    )
  }
}
