import { searchByName, filterByGenre, filterByCreator, resetFilters} from "../../redux/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePageNumber } from "../../redux/actions";

import styles from "./filters.module.css";

const Filters = () =>{

    const [vgName, setVgName] = useState("");//declaro estado local usando el hook useState
    const [genre, setGenre] = useState("");
    const [creator, setCreator] = useState("");

    const dispatch = useDispatch();//Enviar acciones a Redux

    const genres = useSelector((state) => state.genres);

    const handleSearchInput = (event) => {//maneja los cambios en el campo de busqueda 
        const inputValue = event.target.value;
        setVgName(inputValue);
        dispatch(updatePageNumber(1));
    };
    
    const handleSearchSubmit = (event) =>{
        event.preventDefault();
        dispatch(searchByName(vgName));
        setVgName("");
        setGenre("");
        setCreator("");
        dispatch(updatePageNumber(1));
    };

    const handleFilterByGenre = (event) => {
        const genre = event.target.value;
        setGenre(genre);
        dispatch(filterByGenre(genre));
        setVgName("");
        setCreator("");

        dispatch(updatePageNumber(1));
    }

    const handleFilterByCreator = (event) => {
        const creator = event.target.value;
        // setCreator takes some time
        setCreator(creator);
        // creator refers to the updated value inside handleFilterByCreator, not to the localState
        dispatch(filterByCreator(creator));
        setVgName("");
        dispatch(updatePageNumber(1));
        };

        const handleResetFilters = (event) => {
            event.preventDefault();
            dispatch(resetFilters());
            setVgName("");
            setCreator("");
            setGenre("");
            dispatch(updatePageNumber(1));
        };


    return(
        <div className={styles.mainContainer}>
            <form className={styles.searchbarContainer} onSubmit={handleSearchSubmit}>
            <input className={styles.searchInput}
                type="text"
                placeholder="Search by name..."
                value={vgName}
                onChange={handleSearchInput}
            />
            
            <button className={styles.searSubmitButton}
                type="submit"> Search</button>
            </form>

{/* FILTER GENRES */}
        <div className={styles.filtersAndSortsContainer}>
            <select className={styles.genreSelect}
            name="filterByGenre"
            value={genre}
            onChange={handleFilterByGenre}
            >
            <option disabled value="">Genre</option>
            <option value="allGenres">All genres</option>
            {genres.map((genre, index) => {
            return (
                <option key={index} value={genre}>
                {genre}
                </option>
            );
            })}
            </select>

            {/* CREATOR */}
        <select
          className={styles.creatorSelect}
          name="filterByCreator"
          value={creator}
          onChange={handleFilterByCreator}
        >
          <option disabled value="">
            Creator
          </option>
          <option value="all">All</option>
          <option value="db">Database</option>
          <option value="api">API</option>
        </select>

         {/* RESET */}
        <button className={styles.resetButton} onClick={handleResetFilters}>
          Reset
        </button>
        </div>
        </div>
    );
};

export default Filters;


