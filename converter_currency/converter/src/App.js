
import './App.css';
import { Route, Routes } from "react-router-dom";
import Currencies from "./components/Currencies";
import Main from "./components/Main";
import Layout from './components/Layout';



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
