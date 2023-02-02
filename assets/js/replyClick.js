// import {
//     getGenre
// } from "./getGenre"

export function reply_click(id) {
    console.log(id);
    if (movies_id) {
        alert(id);
        getGenre(id);
    }
}