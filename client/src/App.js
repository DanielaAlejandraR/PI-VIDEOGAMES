import {Routes, Route, useLocation} from "react-router-dom";
import LandingPage from './Views/Landing/LandingPage.jsx';
import Home from './Views/Home/Home.jsx';
import Detail from "./Views/Detail/Detail.jsx";
import Create from './Views/Create/create.jsx';
import Error404 from './Views/Error404/Error404.jsx';
import Nav from './components/Nav/navBar.jsx';
// import About from "./Views/About/about.jsx";
// import Loading from "./components/Loading/Loading.jsx";
import Filters from "./components/Filters/Filters.jsx";
import Pagination from "./components/Pagination/Pagination.jsx";

import './App.css';

const App = () => {
    return (
    <div className="App">
      {!((useLocation()).pathname === "/") && <Nav path="/:"/>}

      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/> 
        <Route path="/create" element={<Create/>}/>
        {/* <Route path="/about" element={<About />} /> 
        <Route path="/devloading" element={<Loading />} /> */}
        <Route path="/devfilters" element={<Filters />} />
        <Route path="/devpagination" element={<Pagination />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
    );
}

export default App;
