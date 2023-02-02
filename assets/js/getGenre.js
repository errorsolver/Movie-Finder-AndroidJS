const BASE_URL = `https://api.themoviedb.org/3/`;
const API_KEY = `api_key=2687b1e38c449c31c16ae0f7f801fd75`;

export async function getGenre(genresList) {
    let genres = [];
    const URL_genre = `genre/movie/list?`;
    let promise = await fetch(BASE_URL+URL_genre+API_KEY)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        });
    // console.log(`Object[0][1][0].name `, Object.entries(promise)[0][1][0].name); //Done
    Object.entries(promise)[0][1]
        .forEach(e => {
            // console.log(`Object forEach[0][1] `,e);
        genres.push(e);
    });

    genres.forEach(e => {
        // let temp = genres[e].name
        // console.log(`genres fe e: `, e.name);
        // console.log(`genres[0] fe: `, Object(genres[0]));
        genresList.innerHTML += `<li><a href="movies.html" id="${e.id}" onclick="reply_click(this.id)">${e.name}</a></li>`;
    });
}