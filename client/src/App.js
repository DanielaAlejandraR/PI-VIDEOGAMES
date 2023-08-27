import {Routes, Route} from "react-router-dom";

import LandingPage from './Views/Landing/LandingPage.jsx';
import Home from './Views/Home/Home.jsx';
import Detail from './Views/Detail/detail.jsx';
import Create from './Views/Create/create.jsx';
import Error404 from './Views/Error404/Error404.jsx';
// import Nav from './components/Nav/navBar.jsx';
// import Footer from "./components/Footer/Footer.jsx";
// import Filters from "./components/Filters/Filters.jsx";
// import Pagination from "./components/Pagination/Pagination.jsx";

import './App.css';

const App = () => {
  //const location = useLocation();//hook para obtener la ubicación actual de la aplicación.
  // const renderNavAndFooter = location.pathname !== '/';

    return (
    <div className="App">
      {/* {renderNavAndFooter && <Nav />} */}
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/detail/:id" element={<Detail/>}/> 
        <Route path="/create" element={<Create/>}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
      {/* {renderNavAndFooter && <Footer />} */}
      {/* solo se rendericen si renderNavAndFooter es true, es decir, si la ubicación actual no es la raíz */}
    </div>
    );
}

export default App;
