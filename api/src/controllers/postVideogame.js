const { Videogame, Genre } = require("../db");

const postNewVideogame = async({name, description, platforms, image, releaseDate, rating, genres})=>{//Defino función asincrona que acepta objeto desestructurado con las propiedades
    const [newVideoGame, created] = await Videogame.findOrCreate({//utilizo modelo Videogame y su metodo findOrCreate para buscar un VG por nombre, si no se encuentra se crea con los valores en el objeto default 
        where: {name},//especifico filtro busqueda 
        defaults: { name, description, platforms, image, releaseDate, rating }
    })//el resultado sera un array con dos elementos newVideoGame y Created(booleano)

    if(created === true){// si se creo el videojuego como se determino 
        for(let i = 0; i<genres.length; i++){//recorro generos en arreglo genres
        const genreId = (await Genre.findOne({//utilizo find one para encontrar el genero correspondiente por su nombre 
        where:{
        name:genres[i]
        }
        })).id
        await newVideoGame.addGenre(genreId)//Asocio genero a Vg creado 
        }
        return Videogame.findOne({//busco nuevamente  vieojuego creado por ID y
        where:{id: newVideoGame.id},
        include:[//incluyo  generos asociados 
        {model: Genre, attributes: ["name"], through: {attributes:[]}}]
        })
}
}
module.exports = {postNewVideogame};