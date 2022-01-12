
import './App.css';
import Header from './components/Header.jsx';
import {Route, Router, Routes, Link, Switch} from "react-router-dom";
import News from './components/News';
import Profile from './components/Profile';

function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App;
