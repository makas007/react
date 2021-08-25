import React from "react";

class Homework1 extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.s2 = 201;
    this.state = {
      s1: props.p1
    }
  }

  didMount = () => {
    this.s2 ++;
    this.setState(() => this.s1++)
  }

  render() {
    return (
      <><button onClick={this.didMount} >click</button>
        <p>{this.state.s1}</p>
        <p>{this.s2}</p>
      </>
    )
  }
}

export default Homework1;