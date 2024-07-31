import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        count: props.startingValue
    };
  }

  render() {
    return <div>count:{this.state.count}</div>;
  }
}


export default Counter;