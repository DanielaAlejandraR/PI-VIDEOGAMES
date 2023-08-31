import Cards from "../../components/Cards/cards";
import Filters from "../../components/Filters/Filters.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { useEffect} from "react"; //hook para realizar acciones en diferentes momentos del ciclo de vida del componente
import { useDispatch, useSelector} from "react-redux";//hooks de react para conectar con redux
import { getVideoGames, getGenres} from "../../redux/actions";

import styles from "./Home.module.css";

const Home = () => {
    const dispatch = useDispatch();//para enviar action a mi store

    //const VideoGames = useSelector((state) =>state.VideoGames);//quiero que estes suscrito a cualquier cambio que ocurra en el estado, estado global 
    const genres = useSelector((state) => state.genres);
    const currentVg = useSelector((state) => state.currentVg);
    
    useEffect(() => {//si queremos que nuestra action sea ejecutada en el momento del mount, en el momento que se carga por primera vez 
    dispatch(getVideoGames());
    if (!genres.length) dispatch(getGenres());
},[dispatch, genres])

    const VG_PER_PAGE = 15;
    const currentVgLength = currentVg.length;
    const numberOfPages = Math.ceil(currentVgLength / VG_PER_PAGE);

    return (
    <div className={styles.mainContainer}>
        <Filters />
        <div className={styles.mobileSecondPagination}>
            <Pagination numberOfPages={numberOfPages} />
        </div>
        <Cards VG_PER_PAGE={VG_PER_PAGE} />
        <div className={styles.mobileSecondPagination}>
            <Pagination numberOfPages={numberOfPages} />
        </div>
    </div>
    )};
    

export default Home;

