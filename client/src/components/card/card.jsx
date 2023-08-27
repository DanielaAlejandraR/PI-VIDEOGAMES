import styles from "./Card.module.css";

const Card = ({ name, image, genres = []}) => {
  return (
    <div className={styles.cardcontainer}>
      <h1 className={styles.title}>{name}</h1>
      <img className={styles.image}src={image} alt={name}/>
    <ul>
      {genres.map((genre, index) => (
        <li className={styles.genres} key={index}>{genre.name}</li>
      ))}
    </ul>
    </div>
  );
};

export default Card;
