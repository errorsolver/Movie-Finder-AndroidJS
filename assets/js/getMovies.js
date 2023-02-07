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

    mList.forEach(async res => {
        // console.log("res", res);
        let detail = Object.entries(res)

        console.log("detail: ", detail);
        // let movieId = detail[3]

        // detail.forEach(det => {
        // let key = det[0]
        // let value = det[1]

        let movieId = detail[3]
        let title = detail[5]
        let synopsis = detail[6]
        // console.log(key, ": ", value)
        // console.log("movieId: ", movieId[1])
        let imageLink = await getImage(movieId[1])
        console.log("imageLink: ",imageLink);
        // console.log("getImage:: ",await getImage(movieId[1]))

        moviesList.innerHTML +=
            `<div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${imageLink}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${synopsis}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                    </div>
                </div>
            </div>`

        //     `<div class="card" style="width: 18rem;">
        //     <img src="..." class="card-img-top"alt="...">
        //     <div class="card-body">
        //       <h5 class="card-title">${title}</h5>
        //       <p class="card-text container vertical-scrollable w-100">${synopsis}</p>
        //       <a href="#" class="btn btn-primary">Go somewhere</a>
        //     </div>
        //   </div>`

        // `<div>
        // <a href="movies.html" id="${movieId}" onclick="reply_click(this.id)">
        //     ${title}
        // </a>
        // ${synopsis}
        // <div>`;

        // console.log("Movie: ", detail[det][1][0], detail[det][1][1]);
        // });
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
                console.log(`getImage error: `, response.status)
            }
        })
    console.log(`getImage promise: `, promise);
    // sortAspect(promise)
    console.log(`getImage entries: `, Object.entries(promise));

    let imageDetail = Object.entries(promise)
    console.log("imageDetail: ",imageDetail);
    console.log("imageDetail[3]: ",imageDetail[3]);
    console.log("imageDetail[3][1]: ",imageDetail[3][1]);
    let posterList = imageDetail[3][1]

    let link =[]
    await posterList.forEach(e => {
        console.log('e: ',e);
        console.log('Object.entries(e): ',Object.entries(e));
        console.log('Object.entries(e): ',Object.entries(e)[1]);
        console.log('Object.entries(e): ',Object.entries(e)[1][1]);
        console.log('Object.entries(e) 1250: ',Object.entries(e)[1][1].hasOwnProperty(1250)); //
        console.log('e indexof: ',Object.entries(e).indexOf("height"));
        if(Object.entries(e)[1][1]){ // == '1250'
            console.log("OK: ",Object.entries(e)[3][1]);
            link.push(Object.entries(e)[3][1])
        }
    });

    console.log("link: ",link);
    return IMAGE_URL+link[1]

    // async function showImage(link){
    //     let promise = await fetch(IMAGE_URL+link[1])
    //         .then(e =>{
    //             console.log("promise link img: ", e);
    //         })
    // }
    // showImage(link)

    // console.log(`getImage: `, await promise);
    // return promise
}

// function sortAspect(imageObject) {
//     let toSearch = 750
//     for (var i = 0; i < imageObject.length; i++) {
//         for (key in imageObject[i]) {
//             if (imageObject[i][key].indexOf(toSearch) != -1) {
//                 results.push(imageObject[i]);
//             }
//         }
//     }
// }