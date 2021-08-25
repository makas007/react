import React from 'react'

class CommentsListHook extends React.Component {
  constructor(props) {
    super();
    this.state = {
       
    }
  }
  render() {
    return (
      <>
        <div>
        <div>
          <button onClick={this.onlyEven}>Only even comments</button>
        </div>
        {this.props.map((el, index) => (
          <section key={el.id}>
            <p><b>{index + 1}. {el.email}</b></p>
            <p>{el.body}</p>
          </section>
        ))}
        </div>
      </>
    )
  }
}
export default CommentsListHook;