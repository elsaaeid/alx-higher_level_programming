// Fetch the movie titles from the SWAPI URL
// list them in the <ul> element with the ID "list_movies"
$.get("https://swapi-api.alx-tools.com/api/films/?format=json", (data) => {
  // Loop through the results and append each movie title to the <ul> element
  data.results.forEach((movie) => {
    $("#list_movies").append($("<li>").text(movie.title));
  });
});
