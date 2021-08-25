import React, {useEffect, useState} from 'react'

function CommentHook() {
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
      <select onChange={selectHandler}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
      </select>
      <div>
        {data.map((item, i) => (
          <div key={item.id}>
            <h2>{i+1}.{item.email}</h2>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}
export default CommentHook;