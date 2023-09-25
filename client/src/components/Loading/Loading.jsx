import styles from "./Loading.module.css";
import loadingGif from "../../assets/giphy.gif"

const Loading = () => {
    return (
            <img className={styles.gif} src={loadingGif} alt="Loading" />
    );
};

export default Loading;
