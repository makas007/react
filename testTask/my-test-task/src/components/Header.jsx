import React from "react";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import News from './News';
import Profile from './Profile';
import Login from "./Login";

function Header() {
  const flag = useSelector(state => state.storeData.flag);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function goLogin() { 
    navigate('/login', {replace: true})
  }
  function checkLogin() { 
    flag ? navigate('/profile') : goLogin();
    console.log(flag);
  }

   return (
    <div className="my-header">
      <nav>
        <Link to="/">Main</Link> |{" "}
        <Link to="/news">News</Link> |{" "}
        <a href='' onClick={checkLogin}>Profile</a>
      </nav>
      <Routes>
        <Route path="news" element={<News />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
    </Routes>
    </div>
  )
}



export default Header;