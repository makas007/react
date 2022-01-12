import React from "react";
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { changeFlag } from '../store/storeData';



function Login() {
  const [currentLogin, setCurrentLogin] = useState(null);
  const [currentPass, setCurrentPass] = useState(null);
  const login = useSelector(state => state.storeData.login);
  const password = useSelector(state => state.storeData.pass);
  const flag = useSelector(state => state.storeData.flag);
  const dispatch = useDispatch();
  

  const navigate = useNavigate();

  function getLoginValue(e) {
    setCurrentLogin(e.target.value);
  }
  function getPassValue(e) {
    setCurrentPass(e.target.value);
  }
  function checkLogin() {
    if(currentLogin === login && currentPass === password){
      navigate('/profile');
      dispatch(changeFlag())
    } else { 
      alert ('Имя пользователя или пароль введены не верно')
    }
    
    
  }
   return (
    <div>
      <p><b>login:</b><br></br>
        <input type='text' onChange={getLoginValue}></input>
      </p>
      <p><b>password:</b><br></br>
        <input type='text' onChange={getPassValue}></input>
      </p>
      <button onClick={checkLogin}>login</button>
    </div>
  )
}
export default Login;