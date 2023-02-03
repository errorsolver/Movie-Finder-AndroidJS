let movies_id = document.getElementById(`movies`);

if (movies_id != null) {
    let genreId
    function reply_click(id) {
        genreId = id
        console.log(id);
        console.log(genreId);

        // if (movies_id) {
            alert(id);
            getGenre(genreId);
            // genreId = id
        // }
    }
    console.log(`movies id found`);
    getMovieByGenre(genreId);
}

async function getMovieByGenre(genreId) {
    console.log("genreId: ", genreId);
    const URL_Discover = `discover/movie?`;
    const URL_Genre = `&sort_by=popularity.desc&page=1&with_genres=` + genreId;
    // https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&sort_by=popularity.desc&page=1&with_genres=1&with_watch_monetization_types=flatrate

    let promise = await fetch(BASE_URL + URL_Discover + API_KEY + URL_Genre)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        });
    console.log(`getMovieByGenre promise `, promise);
}