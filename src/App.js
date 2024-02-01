import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feedback from "./components/pages/Feedback";
import Cert from "./components/pages/Cert";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import CardDetail from "./components/pages/CardDetail";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Card/:id' element={<CardDetail/>}></Route>
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Cert" element={<Cert />} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
    </>
  );
}

export default App;
