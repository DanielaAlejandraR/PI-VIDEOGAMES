import styles from "./pagination.module.css";
import { useDispatch, useSelector } from "react-redux"; //Gestionar estado global 
import { updatePageNumber } from "../../redux/actions";

const Pagination = (props) => {

    const dispatch = useDispatch();

    // Obtiene el número de página actual del estado global
    const currentPageNumber = Number(
        useSelector((state) => state.currentPageNumber)
    );

    let { numberOfPages } = props;

    // Crea un array con números de página para generar los botones
    const pageNumbersArray = [];
    for (let i = 1; i <= numberOfPages; i++) {
    pageNumbersArray.push(i);
    }

   //función se llama cuando el usuario hace clic en el botón para ir a la primera página
    const handleFirstPage = () => {
        if (currentPageNumber > 1) {
        dispatch(updatePageNumber(1));
        }
    };
    
    const handlePrev = () => {
        if (currentPageNumber > 1) {
        dispatch(updatePageNumber(currentPageNumber - 1));
    }
    };

    const handleNext = () => {
        if (currentPageNumber < numberOfPages) {
        dispatch(updatePageNumber(currentPageNumber + 1));
    }
    };

  //Esta función se llama cuando el usuario hace clic en el botón para ir a la última página.
    const handleLastPage = () => {
        if (currentPageNumber < numberOfPages) {
        dispatch(updatePageNumber(numberOfPages));
    }
    };

  //  Esta función se llama cuando el usuario hace clic en uno de los botones de número de página.
    const handleUpdatePageNumber = (event) => {
        const clickedPageNumber = event.target.value;
        dispatch(updatePageNumber(clickedPageNumber));
    };

    return(
        <div className={styles.mainContainer}>

            <div className={styles.arrows}>
        <button className={`${styles.button}${styles.arrowButton}${currentPageNumber === 1 ? styles.disabled : ""}`}
                onClick={handleFirstPage}
                disabled={currentPageNumber === 1}>{"<<"}</button>   

        <button className={`${styles.button}${styles.arrowButton}${currentPageNumber === 1 ? styles.disabled : ""}`}
            onClick={handlePrev}
            disabled={currentPageNumber === 1}>{"<"}</button>

        </div>
        
        {pageNumbersArray.map((pageNumber) => {

        return (
        <button
            className={`${styles.pageButtonLargeDevice} ${styles.button} ${pageNumber === currentPageNumber
                ? styles.isActive
                : ""}`}
            key={pageNumber}
            value={pageNumber}
            onClick={handleUpdatePageNumber}
            >{pageNumber}</button>
        );})}

        <div className={`${styles.pageButtonSmallDevice} ${styles.isActive}`}>
                {`${currentPageNumber} / ${numberOfPages}`}
              </div>

              {/* ARROWS */}
              <div className={styles.arrows}>
                <button className={`${styles.button}${styles.arrowButton}
                                ${
                                  currentPageNumber === numberOfPages
                                    ? styles.disabled
                                    : ""
                                }`}
                  onClick={handleNext}
                  disabled={currentPageNumber === numberOfPages}
                >{">"}</button>

                <button
                  className={`${styles.button}${styles.arrowButton}${
                                  currentPageNumber === numberOfPages
                                    ? styles.disabled
                                    : ""
                                }`}
                  onClick={handleLastPage}
                  disabled={currentPageNumber === numberOfPages}
                > {">>"}</button>
              </div>
            </div>
          );
          };

export default Pagination;