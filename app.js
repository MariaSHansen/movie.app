"use strict";

console.log("Movie App starter...");

// Man kan også samle sit array i ét array, i stedet for at lave én variabel per film//

const movies = ["Inception", "The Matrix", "Intersteller", "The Dark Knight", "Pulp Fiction", "Barbie"];

console.log("Alle film:", movies);

console.log("Første film:", movies[0]);
console.log("Anden film:", movies[1]);
console.log("Sidste film:", movies[3]);

console.log("Antal film:", movies.length);

const movieList = document.querySelector("#movie-list");
console.log(movieList);

for (const movie of movies) {
  const html = /* html */ `
  <article class="movie-card">
    <div class="movie-info">
        <h3>${movie}</h3>
    </div>
  </article>
  `;

  movieList.insertAdjacentHTML("beforeend", html);
}









