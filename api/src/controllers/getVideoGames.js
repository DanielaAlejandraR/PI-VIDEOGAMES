const axios = require ("axios");
const { Videogame, Genre } = require("../db");
require('dotenv').config();
const { API_KEY } = process.env;


const getVideoGames = async ()=>{
    
    const  dbData = await Videogame.findAll({
        include:[{
            model: Genre, 
            attributes: ["name"], 
            through: { attributes: []}
        }]
    });

    const dbVideoGames =  dbData.map((vg) =>{
        const { id, name, background_image, platforms, released, rating, Genres } = vg;
        return {
            id, 
            name, 
            background_image, 
            /* platforms, */
            /* released, */ 
            rating,
            genres: Genres.map(genre => genre.name)
        }
    });


    const BASE_API_URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

    const numberOfResultsPerPage = 15;            
    const numberOfResultsExpected = 100;           
    const numberOfRequestsRequired = Math.ceil(numberOfResultsExpected/numberOfResultsPerPage);        // Math.ceil(150/15) 10

    
    const apiPromises = [];
    for (let page = 1; page <= numberOfRequestsRequired; page++) {
        apiPromises.push(axios.get(`${BASE_API_URL}&page_size=${numberOfResultsPerPage}&page=${page}`)); 
    };
    
    const promisesResults = await Promise.all(apiPromises);        
    const apiVgUnflattened = promisesResults.map(apiResponse => apiResponse.data.results);   
    const apiVgRaw = apiVgUnflattened.flat(1); //aplana a 1 nivel

    let apiVideogamesClean = apiVgRaw.map((vg) => {
        const { id, name, background_image, /* platforms,  */released, rating, genres } = vg;
        return {
            id, 
            name, 
            background_image, 
            /* platforms: parent_platforms.map(parent_platform => parent_platform.platform.name), */
            /* released, */ 
            rating,
            genres: genres.map(genre => genre.name),
        };
    });

    apiVideogamesClean = apiVideogamesClean.slice(0, numberOfResultsExpected);

    const allVideoGames = [...dbVideoGames, ...apiVideogamesClean];
    
    return allVideoGames;
};

module.exports = getVideoGames; 