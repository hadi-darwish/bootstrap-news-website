//fetching news api using jquery
let res = $.get({
  type: "GET",
  url: "http://localhost/fswo5/news.php",
  async: false,
}).responseText;
//parsing sting into json object
const news = JSON.parse(res);
