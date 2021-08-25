import './App.css';
import React from 'react';
// import Button from './Button';
// import PlaceholderPost from './PlaceholderPost.jsx';
// import Comment from './Comment';
import Comment2 from './Comment2';
import PlaceholderPostHook from './PlaceholderPostHook';
import CommentHook from './CommentHook';


function App() {
  return (
    <>
      {/* <PlaceholderPost /> */}
      {/* <Comment/> */}
      <PlaceholderPostHook/>
      <Comment2/>
      <CommentHook/>
    </>
  );
}

export default App;
