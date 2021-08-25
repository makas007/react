import React from 'react'

class PlaceholderPostHook extends React.Component { 
  constructor() {
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users/1/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState( {data} )
      })
  }

  render() {
    return (
      <>
        <ul>
          {this.state.data.map(item => (
            <div key={item.id}>
              <h2>{item.id} {item.title}</h2>
              <p>{item.body}</p>
            </div>
          ))}
        </ul>
      </>
    )
  }
}

export default PlaceholderPostHook;