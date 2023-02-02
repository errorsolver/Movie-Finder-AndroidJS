import {getGenre} from "./getGenre.js";
import {reply_click} from "./replyClick";

// import("./getGenre.js").then(GetGenre =>{
//     console.log(GetGenre);
//     const getGenre = new GetGenre()
// })

// async function getGenre(id) {
//     const URL_genre = `genre/movie/list?`;
//     let promise = await fetch(BASE_URL+URL_genre+API_KEY)
//         .then(response => {
//             if (response.ok) {
//                 return response.json()
//             }
//         });
//     // console.log(`Object[0][1][0].name `, Object.entries(promise)[0][1][0].name); //Done
//     Object.entries(promise)[0][1]
//         .forEach(e => {
//             // console.log(`Object forEach[0][1] `,e);
//         genres.push(e);
//     });

//     genres.forEach(e => {
//         // let temp = genres[e].name
//         // console.log(`genres fe e: `, e.name);
//         // console.log(`genres[0] fe: `, Object(genres[0]));
//         genresId.innerHTML += `<li><a href="./movies.html" id="${e.id}" onClick="reply_click(this.id)">${e.name}</a></li>`;
//     });
// }

var genresList = document.getElementById(`genres`);
if (genresList != null) {
    console.log("GenreList found: ", genresList);
    getGenre(genresList);
}

var movies_id = document.getElementById(`movies`);
if (movies_id) {
    console.log(`movies id found`);
    // getGenre(genresList);
}

console.log("rc: ", reply_click);

















// ------------------------
function toggle_popover() {
    $('#popover').popover('toggle');
}