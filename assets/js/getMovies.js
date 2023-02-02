import {reply_click} from "./replyClick";
console.log("rc: ", reply_click);

export async function getMovieByGenre(genre_id) {
    const URL_Discover = `discover/movie?`;
    const URL_Genre = `&sort_by=popularity.desc&page=1&with_genres=`+genre_id;
    // https://api.themoviedb.org/3/discover/movie?api_key=<<api_key>>&sort_by=popularity.desc&page=1&with_genres=1&with_watch_monetization_types=flatrate

    let promise = await fetch(BASE_URL + URL_Discover + API_KEY + URL_Genre)
        .then(response => {
            if (response.ok) {
                return response.json()
            }
        });
    console.log(`getMovieByGenre promise `,promise);
}