
import './App.css';
import Header from './components/Header';
import { Route, Routes } from "react-router-dom";
import Currencies from "./components/Currencies";
import Main from "./components/Main";
import Layout from './components/Layout';
import Home from './components/Home'


function App() {
  return (
    <>
    <Layout/>
      <Routes>
        <Route path="/" element={<Layout/>}/>
          <Route index element={<Main/>} />
          <Route path="currencies" element={<Currencies/>} />
        <Route/>
      </Routes>
    </>
  );
}

export default App;
