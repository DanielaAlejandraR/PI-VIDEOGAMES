import Cards from "../../components/Cards/cards";
import { useEffect} from "react"; //hook para realizar acciones en diferentes momentos del ciclo de vida del componente
import { useDispatch, useSelector} from "react-redux";//hooks de react para conectar con redux
import { getVideoGames } from "../../redux/actions";

import styles from "./Home.module.css";

const Home = () => {
    const dispatch = useDispatch();//para enviar action a mi store
    const VideoGames = useSelector((state) =>state.VideoGames);//quiero que estes suscrito a cualquier cambio que ocurra en el estado, estado global 
    

useEffect(() => {//si queremos que nuestra action sea ejecutada en el momento del mount, en el momento que se carga por primera vez 
    dispatch(getVideoGames());
},[dispatch ])

//const VG_PER_PAGE = 8;

    return(
        <div className={styles.homeTitle}>
            <p className={styles.Home}>Home Page</p>
            
            {/* <Cards VG_PER_PAGE={VG_PER_PAGE} /> */}
            <Cards VideoGames={VideoGames}></Cards>
        </div>
    );
}

export default Home;