const { getVideoGames } = require ("../controllers/getAllVideogames");
const { getVideoGameById } = require ("../controllers/getVideogameById.js");
const { getVideoGameByName } = require ("../controllers/getVideogamesByName");
const { postNewVideogame } = require ("../controllers/postVideogame");

//------------------------ALL- NAME---------------------------

const getVideoGamesHandler = async (req, res) => {// Defino función asincrona que maneja solicitudes
    try {
        const name = req.query.name//Extrae valor de parametro de consulta name de la URL 
        const response = name? await getVideoGameByName(name) : await getVideoGames();//Si name tiene un valor se llama la función, si no se proporciona un nombre se llama a la otra función de all
        res.status(200).json(response);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
};

//--------------------------------ID-------------------------

const  getVideoGameByIdHandler = async (req, res) => {
    const id = req.params.id;// parametro de ruta id de la URL  
    const source = isNaN(id)? "DB" : "API";//si es numero valido
    try {
        const videogameId = await getVideoGameById(id, source) //se llama a función para obtener info según id y fuente determinada 
        res.status(200).json(videogameId)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
};

//-------------------------------POST--------------------

const postVideogameHandler = async (req, res) => {
    const { name, description, platforms, image, releaseDate, rating, genres } = req.body;//información necesaria para  para crear nuevo videojuego 
    try{
        if ( !name || !description || !platforms || !image || !releaseDate ||  !rating || !genres ) {//verifico campos necesarios
            throw Error('Missing game info!')
        } else {
            const gameToAdd = await postNewVideogame({ name, description, platforms, image, releaseDate, rating, genres})// si todos los campos estan invoco funcion con todos los datos del nuevo juego
        return res.status(200).json(gameToAdd);
    }
    }catch (error){
        res.status(400).json({error: error.message});
    }
};

module.exports={ getVideoGamesHandler,  getVideoGameByIdHandler,  postVideogameHandler }