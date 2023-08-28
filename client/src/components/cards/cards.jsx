import Card from "../Card/card";
import styles from "./Cards.module.css";
import { useSelector } from "react-redux";

const Cards = (props) => {
    const { VG_PER_PAGE } = props;
    const currentVg = useSelector((state) => state.currentVg);
    const currentPageNumber = useSelector((state) => state.currentPageNumber);
  
    const firstVgRenderedIndex = (currentPageNumber - 1) * VG_PER_PAGE; 
    const lastVgRenderedIndex = firstVgRenderedIndex + VG_PER_PAGE - 1; 

    const renderedVg = currentVg.slice(
      firstVgRenderedIndex,
      lastVgRenderedIndex + 1
    );
  
    return (
        <div>
          {typeof currentVg === "string" ? (
            <h1 className={styles.notFoundText}>{currentVg}</h1>
          ) : (
            <div className={styles.mainContainer}>
              {currentVg.length > 0 &&
                renderedVg.map((vgame, index) => (
                  <Card
                    key={index}
                    id={vgame.id}
                    name={vgame.name}
                    image={vgame.image}
                    genres={
                      vgame.genres
                        ? vgame.genres.map((x, index) =>
                            index === vgame.genres.length - 1
                              ? x.name
                              : x.name + " / "
                          )
                        : "undefined"
                    }
                  />
                ))}
            </div>
          )}
        </div>
      );
    };
    
  export default Cards;
  

// const Cards = ({VideoGames}) => {

//     const VgList = VideoGames

//     return(
//         <div className={styles.cardlist}>
//         {VgList?.map(vgame => (
//             <Card 
//             key={vgame.id} 
//             id={vgame.id} 
//             name={vgame.name}
//             image={vgame.image}
//             genres={vgame.genres ? vgame.genres.map((x, index) => (
//                 index === vgame.genres.length - 1 ? x.name : x.name + " / "
//             )) : "undefined"}              
//             />
//         ))}
//         </div>
//     );
// }

// export default Cards;
