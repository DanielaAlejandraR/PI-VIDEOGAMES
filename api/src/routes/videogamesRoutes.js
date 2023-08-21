const { Router } = require("express");
const { getVideoGamesHandler, getVideoGamesByIdHandler } = require("../Handlers/videogamesHandlers")

const routerVideoGames = Router();


routerVideoGames.get("/", getVideoGamesHandler); 

routerVideoGames.get("/:id", getVideoGamesByIdHandler);//:id param, la existencia de un param me determina una ruta nueva 

// usersRouter.post ("/", createUsersHandler);

module.exports = routerVideoGames;