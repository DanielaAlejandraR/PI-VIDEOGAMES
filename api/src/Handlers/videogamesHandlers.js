const  getVideoGames = require ("../controllers/getVideoGames");
const  getVideoGameById = require ("../controllers/getVideogameById.js");
const  getVideoGameByName = require ("../controllers/getVideogamesByName");
const  postVg = require ("../controllers/postVideogame");

//------------------------ALL- NAME-

const getVideoGamesHandler = async (req, res) => {
    try {
        const name = req.query.name//Extrae valor de parametro de consulta name de la URL 
        const videoG = name? await getVideoGameByName(name) : await getVideoGames();
        res.status(200).send(videoG);
    } catch (error) {
        res.status(400).send({error: error.message});
    }
};

//--------------------------------ID-

const  getVideoGameByIdHandler = async (req, res) => {
    try {
        let id = req.params.id;
        const videoG = await getVideoGameById(id);
        res.status(200).send(videoG);   
    } catch (error) {
        res.status(404).send({error: error.message});
    };
};

//-------------------------------POST-

const postVideogameHandler = async (req, res) => {
    try{
        const { name, background_image, platforms, released, rating, description, genres } = req.body;//información necesaria para  para crear nuevo videojuego 
        const vgCreated = await postVg(name, background_image, platforms, released, rating, description, genres);
        return res.status(200).send(vgCreated);
    }catch (error){
        res.status(400).json({error: error.message});
    }
};

module.exports = { getVideoGamesHandler,  getVideoGameByIdHandler,  postVideogameHandler };