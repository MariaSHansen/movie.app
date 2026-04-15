"use strict";

// ALT DETTE ER FRA OPGAVE 2 (ARRAYS OG LOOPS)
// console.log("Movie App starter...");

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
        title: "the Matrix",
        year: 2010,
        rating: 8.8,
    },
];

console.log("Første film:", movies[0]);
console.log("Anden film:", movies[1]);

for (const movie of movies) {
    console.log("Titel:", movie.title);
}







