var showMovieInfo;
var movie ={
title: "The Dark Knight",
actors:" Christian Bale, Heath Ledger, Aaron Eckhart",
directors: "Christopher Nolan"
};

showMovieInfo = function () {
  console.log("Movie information for " + movie.title);
  console.log("------------------------------");
  console.log("Actors: " + movie.actors);
  console.log("Directors: " + movie.directors);
  console.log("------------------------------");
};
showMovieInfo();