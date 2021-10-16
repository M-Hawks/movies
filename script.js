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

      const title1 = json.results[0].title;
      var titleExists = document.getElementById("title-list-1");
      if (titleExists) document.getElementById("title-list-1").innerHTML = title1;
      const title2 = json.results[1].title;
      titleExists = document.getElementById("title-list-2");
      if (titleExists) document.getElementById("title-list-2").innerHTML = title2;
      const title3 = json.results[2].title;
      titleExists = document.getElementById("title-list-3");
      if (titleExists) document.getElementById("title-list-3").innerHTML = title3;
      const title4 = json.results[3].title;
      titleExists = document.getElementById("title-list-4");
      if (titleExists) document.getElementById("title-list-4").innerHTML = title4;
      const title5 = json.results[4].title;
      titleExists = document.getElementById("title-list-5");
      if (titleExists) document.getElementById("title-list-5").innerHTML = title5;


      const posterPathList = "https://image.tmdb.org/t/p/w500";
      var poster1 = json.results[0].poster_path;
      var posterExists = document.getElementById("poster-list-1");
      if (posterExists) document.getElementById("poster-list-1").src = posterPathList + poster1;
      poster2 = json.results[1].poster_path;
      var posterExists = document.getElementById("poster-list-2");
      if (posterExists) document.getElementById("poster-list-2").src = posterPathList + poster2;
      poster3 = json.results[2].poster_path;
      var posterExists = document.getElementById("poster-list-3");
      if (posterExists) document.getElementById("poster-list-3").src = posterPathList + poster3;
      poster4 = json.results[3].poster_path;
      var posterExists = document.getElementById("poster-list-4");
      if (posterExists) document.getElementById("poster-list-4").src = posterPathList + poster4;
      poster5 = json.results[4].poster_path;
      var posterExists = document.getElementById("poster-list-5");
      if (posterExists) document.getElementById("poster-list-5").src = posterPathList + poster5;

      var otherExists = document.getElementById("other");
      if (otherExists) document.getElementById("other").innerHTML = "Other Movies";
      var other_list = [];
      otherExists = document.getElementById("other-list");
      if (otherExists)
      {
        for (var i=5; i<json.results.length; i++)
        { other_list[i-5] = " " + json.results[i].title; }
        document.getElementById("other-list").innerHTML = other_list;
      }
    });
});
