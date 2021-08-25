import React, {useState, useEffect} from "react"
import CommentsListHook from './CommentsListHook'

function Comment2Hook() {
  const [userId, setUserId] = useState(1)
  const [data, setData] = useState([])

  let selectHandler = (e) => {
    setUserId(e.target.value)
  }
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setData(data)
      })
  },[userId])

   return (
    <>
      <p>Choose post ID:</p>
      <select onChange={selectHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <div>
        <CommentsListHook data={data}/>
      </div>
    </>
  )
}
export default Comment2Hook;