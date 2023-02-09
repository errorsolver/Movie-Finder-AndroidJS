console.time()

const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = `api_key=2687b1e38c449c31c16ae0f7f801fd75`;

let genresList = document.getElementById(`genres`);

if (genresList != null) {
    getGenre(genresList);
}

async function getGenre(genresList) {
    let genres = [];
    const URL_genre = `genre/movie/list?`;

    let promise = await fetch(BASE_URL+URL_genre+API_KEY)
        .then(response => {
            if (response.ok) {
                return response.json()
            }else{
                console.error(response.status)
            }
        });

    Object.entries(promise)[0][1]
        .forEach(e => {
        genres.push(e);
    });

    genres.forEach(e => {
        genresList.innerHTML += `<li><a href="movies.html" id="${e.id}" onclick="reply_click(this.id)">${e.name}</a></li>`;
    });
}

console.timeEnd()
console.timeStamp()