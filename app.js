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
    image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    image: "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
  },
  {
    title: "Intersteller",
    year: 2014,
    rating: 8.6,
    image: "https://i.ebayimg.com/images/g/S3IAAOSwqkxlZ~Ho/s-l1200.jpg",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
  },

  {
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSS_64tdfszF9nzm-DLay7QatkHeoxlHu6ZttqnYXNKCoL9FnXyJ-0dgYaNFg&usqp=CAc",
  }
];


const movieList = document.querySelector("#movie-list");

showMovies ();

function showMovies () {
    movieList.innerHTML = "";

for (const movie of movies) {
    showMovie(movie);
    }
}    

function showMovie(movie) {
    const highlightClass = movie.rating > 8.5 ? "movie-card--highlight" : "";

    const html = /* html */ `
     <article class="movie-card ${highlightClass}">
        <img class="movie-image" src="${movie.image}" alt="${movie.title}">
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

