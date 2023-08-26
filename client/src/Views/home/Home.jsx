import Navbar from "../../components/Nav/navBar";
import Cards from "../../components/Cards/cards";
import "./home.styles.css"

const Home = () => {
    return(
        <div className="Home">
            <p className="homeTitle">Home Page</p>
            <Navbar/>
            <Cards/>
        </div>
    );
}

export default Home;