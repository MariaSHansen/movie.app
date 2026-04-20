"use strict";

console.log("Movie App starter...");

// ALT DETTE ER FRA OPGAVE 2 (ARRAYS OG LOOPS)


// // Man kan også samle sit array i ét array, i stedet for at lave én variabel per film//

// const movies = ["Inception", "The Matrix", "Intersteller", "The Dark Knight", "Pulp Fiction", "Barbie"];

// console.log("Alle film:", movies);

// console.log("Første film:", movies[0]);
// console.log("Anden film:", movies[1]);
// console.log("Sidste film:", movies[3]);

// console.log("Antal film:", movies.length);

// const movieList = document.querySelector("#movie-list");
// console.log(movieList);

// for (const movie of movies) {
//   const html = /* html */ `
//   <article class="movie-card">
//     <div class="movie-info">
//         <h3>${movie}</h3>
//     </div>
//   </article>
//   `;

//   movieList.insertAdjacentHTML("beforeend", html);
// }

// Fra opgave 3.1

// const movie = {
//     title: "Inception", 
//     year: 2010, 
//     rating: 8.8,
// };

// console.log("Title:", movie.title);
// console.log("År:", movie.year);
// console.log("Rating:", movie.rating);

const movies = [
    {
        title: "Inception",
        year: 2010,
        rating: 8.8,
    },
    {
        title: "The Matrix",
        year: 1999,
        rating: 8.7,
    },
    {
        title: "Intersteller",
        year: 2014,
        rating: 8.6,
    },
    {
        title: "The Dark Knight",
        year: 2008,
        rating: 9.0,
    },
];

console.log ("Alle film:", movies);

const movieList = document.querySelector("#movie-list");
console.log(movieList);

function showMovies () {
    movieList.innerHTML = "";

for (const movie of movies) {
    showMovie(movie);
    }
}    

function showMovie(movie) {
    const html = /* html */ `
     <article class="movie-card">
        <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>År: ${movie.year}</p>
        <p>Rating: ${movie.rating}</p>
        </div>
    </article>
`;
    movieList.insertAdjacentHTML("beforeend",html);
}

showMovies();

movies.push({
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
});

showMovies();

