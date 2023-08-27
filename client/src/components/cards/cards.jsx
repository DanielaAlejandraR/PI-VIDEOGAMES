import Card from "../Card/card";
import styles from "./Cards.module.css";


const Cards = ({VideoGames}) => {

    const VgList = VideoGames

    return(
        <div className={styles.cardlist}>
        {VgList?.map(vgame => (
            <Card 
            key={vgame.id} 
            id={vgame.id} 
            name={vgame.name}
            image={vgame.image}
            genres={vgame.Genres}
            />
        ))}
        </div>
    );
}

export default Cards;