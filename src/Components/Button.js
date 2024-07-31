import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = 
        this.handleClick.bind(this)
    ;
  }

  handleClick() {
    alert('BTN Click');   
  }
  render() {
    return <button onClick={this.handleClick}>Click Me</button>
  }
}


export default Button;