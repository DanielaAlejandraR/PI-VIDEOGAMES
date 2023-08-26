import "./home.styles.css"
import Navbar from "../../components/navBar/navBar";
import Cards from "../../components/cards/cards.component";

function Home () {
    return(
        <div className="home">
            <h2 className="home-title">Home</h2>
            <Navbar/>
            <Cards/>
        </div>
    )
}

export default Home;