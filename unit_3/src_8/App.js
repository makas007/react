import React from 'react';
import './App.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: {},
      count: 0
    }
  }

  h1 = React.createElement('h1', {}, 'unit_08')
  h2 = React.createElement('h2', {
    'style': {
      'color': 'orange'
    }
  }, 'header2')
  p = React.createElement('p', {
    'style': {
      'color': 'red'
    }
  }, 'this is p')
  p1 = React.createElement('p', {}, 'hi')
  p2 = React.createElement('p', {}, 'world')
  div = React.createElement('div', {
    'className': 'text-grey'
  }, this.p1, this.p2)
  myInput = React.createElement('input', {})
  myBtn = React.createElement('button', {}, this.p1 )
  

  render(){
    return (
      <>
        {this.h1}
        {this.h2}
        {this.p}
        {this.div}
        {this.myInput}
        {this.myBtn}
        <ul>
          {}
        </ul>
      </>
    )
  }
}

export default App;
