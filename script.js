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

      const title = json.results[0].title;
      var elementExists = document.getElementById("title");
      if (elementExists) document.getElementById("title").innerHTML = title;

      const posterPath = "https://image.tmdb.org/t/p/w500" + json.results[0].poster_path;
      elementExists = document.getElementById("poster");
      if (elementExists) document.getElementById("poster").src = posterPath;

      const overview = json.results[0].overview;
      elementExists = document.getElementById("overview");
      if (elementExists) document.getElementById("overview").innerHTML = overview;

      const release_date = json.results[0].release_date;
      elementExists = document.getElementById("release_date");
      if (elementExists) document.getElementById("release_date").innerHTML = "This was released: " + release_date;

      var title_list = "";
      const posterPathList = "https://image.tmdb.org/t/p/w500";
      titleExists = document.getElementById("title-list");
      if (titleExists)
      {
        for (var i=0; i<json.results.length; i++)
        {
          if (json.results[i].poster_path != null) { title_list += json.results[i].title + "<br />" + "<img src="+posterPathList+json.results[i].poster_path+">" + "<br />"; }
          else { title_list += json.results[i].title + "<br />"; }
        }
        document.getElementById("title-list").innerHTML = title_list;
      }
    });
});
