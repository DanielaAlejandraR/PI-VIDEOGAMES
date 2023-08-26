const { Router } = require("express");
const { getVideoGamesHandler, getVideoGameByIdHandler, postVideogameHandler } = require("../Handlers/videogamesHandlers")

const routerVideoGames = Router();


routerVideoGames.get("/", getVideoGamesHandler); 

routerVideoGames.get("/:id", getVideoGameByIdHandler);//:id param, la existencia de un param me determina una ruta nueva 

routerVideoGames.get("/name", getVideoGamesHandler);

routerVideoGames.post ("/", postVideogameHandler);

module.exports = routerVideoGames;