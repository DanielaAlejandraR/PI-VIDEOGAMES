const {Router} =  require("express");
const postsRouter = Router();

postsRouter.get ("/", (req, res) => {
    res.send("Estoy en posts");
});

postsRouter.post("/", (req, res) => {
    res.send("NIY: CREACIÓN DE UN POST");
});

module.exports = postsRouter;