const {Router} = require("express");
const { getVideoGamesHandler } = require("../Handlers/videogamesHandlers")
const routerVideoGames = Router();


routerVideoGames.get("/", getVideoGamesHandler); 

// usersRouter.get("/:id", getUserHandler);//:id param, la existencia de un param me determina una ruta nueva 

// usersRouter.post ("/", createUsersHandler);

module.exports = routerVideoGames;