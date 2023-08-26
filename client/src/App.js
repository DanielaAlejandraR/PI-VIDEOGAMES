import './App.css';
import {Routes, Route, useLocation} from "react-router-dom";

import Home from "./Views/home/Home.jsx";
import Form from './Views/form/Form';
import Detail from './Views/detail/detail.component';
import LandingPage from './Views/landingPag/landingPage.jsx';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <div className="App">
      
      {!((useLocation()).pathname === "/") && <NavBar path="/:"/>}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
        <Route path="/create" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
