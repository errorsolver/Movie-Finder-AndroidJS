import {getGenre} from "./getGenre.js";
import {getMovieByGenre} from "./getMovies.js";

var genresList = document.getElementById(`genres`);
if (genresList != null) {
    console.log("GenreList found: ", genresList);
    getGenre(genresList);
}

var movies_id = document.getElementById(`movies`);
if (movies_id) {
    console.log(`movies id found`);
    getMovieByGenre(28);
}

















// ------------------------
// function toggle_popover() {
//     $('#popover').popover('toggle');
// }