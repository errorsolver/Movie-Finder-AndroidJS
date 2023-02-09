let moviesList = document.getElementById(`movies`);
let genreId = localStorage.getItem("genreId")

if (moviesList != null) {
    getMovieByGenre(genreId);
}

async function getMovieByGenre(genreId) {
    const BASE_URL = `https://api.themoviedb.org/3/`;
    const URL_Discover = `discover/movie?`;
    const API_KEY = `api_key=2687b1e38c449c31c16ae0f7f801fd75`;
    const URL_Genre = `&sort_by=popularity.desc&page=1&with_genres=` + genreId;

    let promise = await fetch(BASE_URL + URL_Discover + API_KEY + URL_Genre)
        .then(response => {
            if (response.ok) {
                return response.json()
            }else{
                console.error(response.status)
            }
        });

    let detailList = Object.values(promise);

    let currentPage = detailList[0]
    let mList = detailList[1]
    let totalPages = detailList[2]
    let totalMovies = detailList[3]

    let detailMovie = mList[1][0]

    mList.forEach(async res => {
        let detail = Object.entries(res)

        let movieId = detail[3][1]
        let title = detail[5][1]
        let synopsis = detail[6][1]
        
        let imageLink = await getImage(movieId)

        moviesList.innerHTML +=
            `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${imageLink}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title" id="${movieId}" onclick="reply_click(this.id)">${title}</h5>
                        <p class="card-text">${synopsis}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>`
    });
}

async function getImage(movieId) {
    let BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/images?api_key=2687b1e38c449c31c16ae0f7f801fd75`
    const IMAGE_URL = `https://image.tmdb.org/t/p/w185`

    let promise = await fetch(BASE_URL)
        .then(response => {
            if (response.ok) {
                return (response.json());
            } else {
                console.error(`getImage error: `, response.status)
            }
        })

    let imageDetail = Object.entries(promise)
    let posterList = imageDetail[3][1]

    let link =[]
    await posterList.forEach(e => {
        if(Object.entries(e)[1][1]){
            link.push(Object.entries(e)[3][1])
        }
    });
    return IMAGE_URL+link[1]
}