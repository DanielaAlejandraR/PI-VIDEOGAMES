import { searchByName } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePageNumber } from "../../redux/actions";

import styles from "./filters.module.css";

const Filters = () =>{

    const [vgName, setVgName] = useState("");//declaro estado local usando el hook useState
    
    const dispatch = useDispatch();//Enviar acciones a Redux

    const handleSearchInput = (event) => {//maneja los cambios en el campo de busqueda 
        const inputValue = event.target.value;
        setVgName(inputValue);
        dispatch(updatePageNumber(1));
    };
    
    const handleSearchSubmit = (event) =>{
        event.preventDefault();
        dispatch(searchByName(vgName));
        setVgName("");
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
        </div>
    );
};

export default Filters;




























// import { getVideoGameByName, resetFilters } from "../../redux/actions";
// import { filterByCreator, filterByGenre } from "../../redux/actions";
// import { sortByAlphabet, sortByRating } from "../../redux/actions";
// import { updatePageNumber } from "../../redux/actions";
// import { useDispatch, useSelector } from "react-redux";
// import { useState } from "react";
// import styles from "./filters.module.css";
// import hardcodedGenres from "../../hardcodedGenres";

// const Filters = () => {
//   /* LOCAL STATE */
//   const [vgName, setVgName] = useState("");
//   const [creator, setCreator] = useState("");
//   const [genre, setGenre] = useState("");
//   const [order, setOrder] = useState("");

//   /* USEDISPATCH */
//   const dispatch = useDispatch();

//   /* GENRES */
//   const genres = useSelector((state) => state.genres);

//   /* HANDLE SEARCH INPUT */
//   const handleSearchInput = (event) => {
//     const inputValue = event.target.value;
//     setVgName(inputValue);
//     dispatch(updatePageNumber(1));
//   };

//   /* HANDLE SEARCH SUBMIT */
//   const handleSearchSubmit = (event) => {
//     event.preventDefault();
//     dispatch(searchByName(vgName));
//     setVgName("");
//     setCreator("");
//     setGenre("");
//     setOrder("");
//     dispatch(updatePageNumber(1));
//   };

//   /* HANDLE FILTER BY CREATOR */
//   const handleFilterByCreator = (event) => {
//     const creator = event.target.value;
//     setCreator takes some time
//     setCreator(creator);
//     creator refers to the updated value inside handleFilterByCreator, not to the localState
//     dispatch(filterByCreator(creator));
//     setVgName("");
//     setOrder("");
//     dispatch(updatePageNumber(1));
//   };

//   /* HANDLE FILTER BY GENRE */
//   const handleFilterByGenre = (event) => {
//     const genre = event.target.value;
//     setGenre(genre);
//     dispatch(filterByGenre(genre));
//     setVgName("");
//     setOrder("");
//     dispatch(updatePageNumber(1));
//   };

//   /* HANDLE SORT */
//   const handleSort = (event) => {
//     const order = event.target.value;
//     setOrder(order);
//     if (order === "a_z" || order === "z_a") {
//       dispatch(sortByAlphabet(order));
//     } else if (order === "ratingAsc" || order === "ratingDesc") {
//       dispatch(sortByRating(order));
//     }
//     dispatch(updatePageNumber(1));
//   };

//   /* HANDLE RESET */
//   const handleResetFilters = (event) => {
//     event.preventDefault();
//     dispatch(resetFilters());
//     setVgName("");
//     setCreator("");
//     setGenre("");
//     setOrder("");
//     dispatch(updatePageNumber(1));
//   };

//   /* RETURN */
//   return (
//     <div className={styles.mainContainer}>
//       {/* SEARCHBAR */}
//       <form className={styles.searchbarContainer} onSubmit={handleSearchSubmit}>
//         <input
//           className={styles.searchInput}
//           type="text"
//           placeholder="Search by name..."
//           value={vgName}
//           onChange={handleSearchInput}
//         />

//         <button className={styles.searchSubmitButton} type="submit">
//           🔍
//         </button>
//       </form>

//       {/* FILTERS AND SORTS */}
//       <div className={styles.filtersAndSortsContainer}>
//         {/* CREATOR */}
//         <select
//           className={styles.creatorSelect}
//           name="filterByCreator"
//           value={creator}
//           onChange={handleFilterByCreator}
//         >
//           <option disabled value="">
//             Creator
//           </option>
//           <option value="all">All</option>
//           <option value="db">Database</option>
//           <option value="api">API</option>
//         </select>

//         {/* GENRE */}
//         <select
//           className={styles.genreSelect}
//           name="filterByGenre"
//           value={genre}
//           onChange={handleFilterByGenre}
//         >
//           <option disabled value="">
//             Genre
//           </option>
//           <option value="allGenres">All genres</option>
//           {genres.map((genre, index) => {
//             return (
//               <option key={index} value={genre}>
//                 {genre}
//               </option>
//             );
//           })}
//         </select>

//         {/* SORT */}
//         <select
//           className={styles.sortSelect}
//           name="Sort"
//           value={order}
//           onChange={handleSort}
//         >
//           <option disabled value="">
//             Sort
//           </option>
//           <option value="a_z">A-Z</option>
//           <option value="z_a">Z-A</option>
//           <option value="ratingAsc">Rating ↑</option>
//           <option value="ratingDesc">Rating ↓</option>
//         </select>

//         {/* RESET */}
//         <button className={styles.resetButton} onClick={handleResetFilters}>
//           Reset
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Filters;
