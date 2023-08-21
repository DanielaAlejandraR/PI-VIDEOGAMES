//Este modulo si interactua con el modelo
require('dotenv').config();
const { Videogame, Genre } = require("../db");
const axios = require("axios");
const { API_KEY } = process.env;


const getDbVideogames = async () => {
    let dbVideogames = await Videogame.findAll({
        include:{
            model: Genre,// incluir los registros de género relacionados con cada registro de videojuego
            attributes: ['name'],//solo incluir el atributo "name" de los registros de género
            through: {//no incluir ningún atributo de tabla intermedia
                attributes:[],
            },
        },
    });

    return dbVideogames.map((dbVideogame) => ({
        id: dbVideogame.id,
        name: dbVideogame.name,
        description: dbVideogame.description,
        platforms: dbVideogame.platforms,
        image: dbVideogame.image,
        releaseDate: dbVideogame.releaseDate,
        rating: dbVideogame.rating,
        genres: dbVideogame.genres?.map((genre) => genre.name),
    }));
}

const getApiVideogames = async () => {
    const { data } = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
        return data.results.map((apiVideogame) => ({
            id: apiVideogame.id,
            name: apiVideogame.name,
            description: apiVideogame.description,
            platforms: apiVideogame.platforms.map((platform) => platform.platform.name),
            image: apiVideogame.image,
            releaseDate: apiVideogame.releaseDate,
            rating: apiVideogame.rating,
            genres: apiVideogame.genres.map((genre) => ({
                name: genre.name, id: genre.id }))
    }))
}

 //   const getDbVideogames = async (name, email, phone) => 
  //  await User.create({name, email, phone}) // user.create me devueleve una promesa, cpn await espero que promesa se resuelva 

module.exports = { getDbVideogames, getApiVideogames };


