const { Genre } = require("../db");// importo modelo 
const { API_KEY } = process.env;// Extraigo variable de entorno utilizando destructuring
const axios = require("axios");//Para hacer solicitudes HTTP

const getGenres = async () => {// defino funcion asincrona para obtener info sobre generos desde API
    
        let genreApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
        genreApi = genreApi.data.results;//asigno el array de resultados de la API a la variable 
        genreApi = genreApi?.map((genre) => {//Utilizo el operador opcional (?.) para verificar si genreApi existe antes de mapearlo. Con map transformo la información en un objeto que contiene solo el nombre del género.
            return {
                name: genre.name, 
            }
        });
        for (const genre of genreApi) {
            await Genre.findOrCreate({
                where: {
                    name: genre.name,
                },
            });
        }
        const genres = await Genre.findAll({attributes: ['name']});//busco todos los generos en BD
        
        const genreNamesOnly = genres.map((genre) => genre.name);
        
        return genreNamesOnly;
    }

module.exports = { getGenres};
