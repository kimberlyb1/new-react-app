import React from "react";


class Greeting extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <h1>Hello,{this.props.name}</h1>
    }
}
export default Greeting;