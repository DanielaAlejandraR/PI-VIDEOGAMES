const axios = require ("axios"); // para realizar solicitudes HTTP a API
const {Videogame, Genre} = require("../db");
const {API_KEY} = process.env;// variable de entorno API_KEY, clave para hacer solicitudes 
const {apiFilter} = require("./apiFilter");

const getVideoGameById = async (id, source)=>{//parametros son id y fuente de la que se obtendra la info 
    if(source === "API"){//si la fuente de información es API 
        const response = (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data// Extraen datos de respuesta 
        const videogameApi = await apiFilter([response])//filtrar información obtenida de API 
        return videogameApi[0]//Devuelve primer elemento del array 
    }else{
    const videogameDB = await Videogame.findOne({// si la fuente es DB, para obtener un solo videojuego de BD
        where: {id:id},
        include:[{//incluir información de generos asociados 
        model: Genre, attributes: ["name"], through: {attributes:[]}}]
    })
    return videogameDB
    }
};

module.exports = {getVideoGameById}