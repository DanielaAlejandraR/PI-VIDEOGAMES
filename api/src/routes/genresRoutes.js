const {Router} =  require("express");
const { getGenresHandler } = require("../Handlers/getGenresHandler");

const genresRouter = Router ();

genresRouter.get("/", getGenresHandler);

module.exports = genresRouter;