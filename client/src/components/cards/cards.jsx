import Card from "../Card/card";
import "./cards.styles.css";

function Cards () {
    return(
        <div className="card-list">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Cards;