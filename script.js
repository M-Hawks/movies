document.getElementById("movieSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("movieInput").value;

  const url = "https://api.themoviedb.org/3/search/movie?api_key=6b33c7bf2d0169a646f34a5f0595b9f3&language=en-US&query=" + value + "&page=1&include_adult=false";

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
      console.log(json.results[0].title);
      console.log(json.results[0].overview);

      const posterPath = "https://image.tmdb.org/t/p/w500" + json.results[0].poster_path;
      document.getElementById("poster").src = posterPath;
    });

});