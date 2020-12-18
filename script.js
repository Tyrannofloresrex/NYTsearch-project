console.log("this is linked");

// variables
var apiKey = "XDYe3JhDujiJEfHHkmrijdblWWqX58GH";
var search = $("#searchTerm");
var start = $("#startYear");
var end = $("#endYear");
var results = $("resultNum");

var queryURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=" +
  search +
  "&begin_date=" +
  start +
  "&end_date=" +
  end +
  "&api-key=" +
  apiKey +
  "=" +
  results;

// Calvin-Work =======================

$("#searchButton").click(function (event) {
  $.get(queryURL).then(
    function (response) {
      console.log(`articles: ${response}`);
    } // var articlesList =
  );
});
