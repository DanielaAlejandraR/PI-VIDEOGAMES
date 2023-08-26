const axios = require ("axios");//importo libreria para hacer solicitudes HTTP a API 
const {Videogame, Genre} = require("../db");
const {API_KEY} = process.env//extrae variable de entorno 
const {apiFilter} = require("./apiFilter")//importo función para filtrar respuesta de API 

const getVideoGames = async ()=>{
    const videogameDB = await Videogame.findAll({//Realizo consulta a base de datos para obtener todos los videojuegos 
        include:[{//incluyo generos relacionados  
            model: Genre, attributes: ["name"], through: { attributes:[] }}]
    });
    
    let arrayWithPromises = [] // creo array para almacenar las promesas de las solicitudes  HTTP  a la API
    for(let i =1; i<6; i++){//Itero desde la pagina 1 a 5 en cada iteración agrego promesa(solicitud a API)
    arrayWithPromises = [...arrayWithPromises, axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)]
    }
    
    const resolved = await Promise.all(arrayWithPromises)//Espero a que todas las promesas de las solicitudes a la API se resuelvan, resultado array de respuestas de la API
    const api = resolved.map((vgame)=>vgame.data.results) // Se mapea el array de respuestas
    
    let arrayWithObjects = []//creo array para almacenar objetos de videojuego de la API
    api.forEach(vgame=>vgame.forEach(z=>{// Bucle forEach para recorrer los arrays de videojuegos
        arrayWithObjects.push(z)
    }))

    const apiResponse = apiFilter(arrayWithObjects)

    return [...videogameDB,...apiResponse];
};

module.exports ={ getVideoGames }