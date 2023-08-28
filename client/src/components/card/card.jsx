import styles from "./Card.module.css";
import { NavLink } from "react-router-dom";


const Card = ({ id, name, image, genres}) => {
  return (
    <NavLink to={`/detail/${id}`} className={styles.NavLink}>
    <div className={styles.cardcontainer}>
      <img className={styles.image}src={image} alt={name}/>
      <h1 className={styles.title}>{name}</h1>
      <h3 className={styles.genres}>{genres}</h3>
    </div>
    </NavLink>
  );
};

export default Card;
