console.log("Local Storage, getMovies: ", localStorage.getItem("genreId"));
let moviesList = document.getElementById(`movies`);
let genreId = localStorage.getItem("genreId")

if (moviesList != null) {
    // let genreId
    function reply_click(id) {
        // genreId = id
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
    const BASE_URL = `https://api.themoviedb.org/3/`;
    const API_KEY = `api_key=2687b1e38c449c31c16ae0f7f801fd75`;
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

    let detailList = Object.values(promise);

    // console.log("obj ",obj); // 1. value, 2. totalPage, 3. totalResult
    // console.log("obj 1 Movie: ",obj[1]);
    // console.log("obj 1 Detail Movie",obj[1][0]);
    // let movie = obj[1][0];

    // let detail = Object.entries(Object.entries(movie))

    let currentPage = detailList[0]
    let mList = detailList[1]
    let totalPages = detailList[2]
    let totalMovies = detailList[3]

    let detailMovie = mList[1][0]



    mList.forEach(res => {
        console.log(res);
        let detail = Object.entries(res)
        console.log(detail);
        detail.forEach(det => {
            let key = det[0]
            let value = det[1]
            console.log(key, ": ", value)

            moviesList.innerHTML +=
            `<li>
                <a href="movies.html" id="${detail[3]}" onclick="reply_click(this.id)">
                    ${key}: ${value}
                </a>
            </li>`;
            
            // console.log("Movie: ", detail[det][1][0], detail[det][1][1]);
        });
    });
}