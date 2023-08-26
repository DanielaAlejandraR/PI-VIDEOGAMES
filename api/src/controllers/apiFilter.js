const apiFilter =  (array) =>{

    const clear = array.map((el) => {
        if(!el.name){return}

        const platformsArray = el.platforms
        const platArray = platformsArray ? platformsArray.map(x=>x.platform.name) : []

        const apiGenres = el.genres ? el.genres.map(x=>{
            return {name: x.name}
        }) : [{name:"no genres"}]

        const imagen = "https://media.istockphoto.com/id/1303938743/es/foto/blanco-la-mejor-almohadilla-de-juego-flotando-sobre-fondo-blanco-idea-conceptual-m%C3%ADnima.jpg?s=612x612&w=0&k=20&c=_yJ_TOpSKZUu0dN7de7BCq--NFagk9xxRNUfiRVt06g="


        return {
            id: el.id ? el.id : "undefined ID",
            name: el.name ? el.name : "undefined NAME",
            image: el.background_image ? el.background_image : imagen,
            description: el.description ? el.description : "undefined DESCRIPTION",
            released: el.released ? el.released : "undefined RELEASED",
            rating: el.rating ? el.rating : "undefined RATING",
            platforms: platArray,
            genres: apiGenres
        }
    })
    return clear
}

module.exports = {apiFilter}