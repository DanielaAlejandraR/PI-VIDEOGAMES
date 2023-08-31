import { filterByCreator, filterByGenre, searchByName, sortByAlphabet, sortByRating, resetFilters } from "../../redux/actions";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePageNumber} from "../../redux/actions";

import styles from "./filters.module.css";

const Filters = () =>{

    const [vgName, setVgName] = useState("");//declaro estado local usando el hook useState
    const [genre, setGenre] = useState("");
    const [creator, setCreator] = useState("");
    const [order, setOrder] = useState("");

    
    const dispatch = useDispatch();//Enviar acciones 
    
    const genres = useSelector((state) => state.genres);

    const handleSearchInput = (event) => {//maneja los cambios en el campo de busqueda 
        const inputValue = event.target.value;
        setVgName(inputValue);
        dispatch(updatePageNumber(1));
    };
    
    const handleSearchSubmit = (event) =>{//Se llama cuando se envia formulario
        event.preventDefault();//previene recargar pag
        dispatch(searchByName(vgName));//Envia accion de busqueda a store de Redux utilizando metodo searchByName, vgName almacena nombrenombre de Vg a buscar
        setVgName("");//restablecer campo de entrada despues de la busqueda
        setGenre("");
        setCreator("");
        setOrder("");
        dispatch(updatePageNumber(1));//envia acción para
    };

    const handleFilterByGenre = (event) => {
        const genre = event.target.value;
        setGenre(genre);
        dispatch(filterByGenre(genre));
        setVgName("");
        dispatch(updatePageNumber(1));
    }

    const handleFilterByCreator = (event) => {
        const creator = event.target.value;
        setCreator(creator);
        dispatch(filterByCreator(creator));
        setVgName("");
        setOrder("");
        dispatch(updatePageNumber(1));
    }

    /* HANDLE SORT */
  const handleSort = (event) => {
    const order = event.target.value;
    setOrder(order);
    if (order === "a_z" || order === "z_a") {
      dispatch(sortByAlphabet(order));
    } else if (order === "ratingAsc" || order === "ratingDesc") {
      dispatch(sortByRating(order));
    }
    dispatch(updatePageNumber(1));
  };

  /* HANDLE RESET */
  const handleResetFilters = (event) => {
    event.preventDefault();
    dispatch(resetFilters());
    setVgName("");
    setCreator("");
    setGenre("");
    setOrder("");
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

        <div className={styles.filtersAndSortsContainer}>

        {/* GENRE */}
        <select className={styles.genreSelect}
            name="filterByGenre"
            value={genre}
            onChange={handleFilterByGenre}
        >
            <option disabled value="">Genre</option>
            <option value="allGenres">All Genres</option>
            {genres.map((genre, index) =>{
                return(
                    <option key={index} value={genre}>{genre}</option>
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
            <option disabled value="">Creator</option>
            <option value="all">All</option>
            <option value="db">Database</option>
            <option value="api">API</option>
        </select>

       {/* SORT */}
       <select
          className={styles.sortSelect}
          name="Sort"
          value={order}
          onChange={handleSort}
        >
          <option disabled value="">
            Sort
          </option>
          <option value="a_z">A-Z</option>
          <option value="z_a">Z-A</option>
          <option value="ratingAsc">Rating ↑</option>
          <option value="ratingDesc">Rating ↓</option>
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


