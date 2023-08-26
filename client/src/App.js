import {Routes, Route} from "react-router-dom";

import Home from './Views/Home/home.jsx';
import Form from './Views/Create/create.jsx';
import Detail from './Views/Detail/detail.jsx';
import LandingPage from './Views/Landing/landingPage.jsx';
// import NavBar from './components/navBar/navBar';
//import './App.css';

function App() {
    return (
    <div className="App">
       {/* {!((useLocation()).pathname === "/") && <NavBar path="/:"/>} */}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/> 
        <Route path="/create" element={<Form/>}/>
      </Routes>
    </div>
    );
}

export default App
