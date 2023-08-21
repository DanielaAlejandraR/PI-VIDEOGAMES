const { Videogame, Genre } = require("../db"); // Importamos modelos 
const { API_KEY } = process.env; // variable de entorno API_KEY, clave para hacer solicitudes 
const axios = require("axios");// para realizar solicitudes HTTP a API


const getVideogameById = async (id) => {//Definimos función asincrónica para obtener info sobre un videojuego segun el ID 

    let videogameDB // Dreclaramos variable para almacenar info del videojuego
    if(isNaN(id)){ //Verificamos si el id no es un numero,videojuego en BD 
        let vgameDB = await Videogame.findByPk(id, {//Utilizo modeLo videogame para  buscar un videojuego en la BD segun id 
            include:[Genre], //incluimos los generos 
        });

        if(vgameDB){// verifico si vgameDB tiene un valor, osea que se encontró un videojuego con ID proporcionado en BD 

            videogameDB ={ //Si encuentro videojuego en BD Creamos un objeto con las siguientes propiedades 
            id: vgameDB.dataValues?.id,
            name: vgameDB.dataValues?.name,
            genres: vgameDB.dataValues.genres?.map((genre) => genre.name),
            platforms: vgameDB.dataValues?.platforms,
            released: vgameDB.dataValues?.released,
            image: vgameDB.dataValues?.img,
            rating: vgameDB.dataValues?.rating,
            description: vgameDB.dataValues?.description,
        }//accedemos a datavalues para obtener las propiedades especificas del modelo, los métodos opcionales ? para manejar casos en los que algunas propiedades fallen 
        return videogameDB; // devolvemos el objeto que contiene los datos del videojuego obtenidos de la BD 
        }
        }else{//si el id es un numero iniciamos else para obtener info de videojuego desde API 
            let vgameApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
            vgameApi = vgameApi.data;// accedemos a propiedad data de respuesta vgameApi

            const videogameApi = {//creamos objeto con info obenida de API 
                id: vgameApi.id,
                name: vgameApi.name,
                genres: vgameApi.genres?.map((genre) => genre.name),
                platforms: vgameApi.platforms?.map(plat => plat.platform.name),
                released: vgameApi.released,
                image: vgameApi.background_image,
                rating: vgameApi.rating,
                description: vgameApi.description,
        }
        return videogameApi;// devuelvo objeto con info de videojuego de API
    }
}

module.exports = {
    getVideogameById
}