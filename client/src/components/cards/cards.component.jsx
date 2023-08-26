import Card from "../card/card.component";
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