//fetching news api using jquery
let res = $.get({
  type: "GET",
  url: "http://localhost/fswo5/news.php",
  async: false,
}).responseText;
//parsing sting into json object
const news = JSON.parse(res);
//this fuction will create all news cards
const newsCard = () => {
  let newsList = "";
  news.map(
    (newss, i) =>
      (newsList += `<div class="card mb-4 mt-3 shadow-lg p-3 mb-5 bg-body rounded" style="max-width: 1000px">
        <div class="row ">
          <div class="col-md-4">
            <img
              src="${newss.img_url}"
              class="card-img"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${newss.title}</h5>
              <p class="card-text">
              ${newss.text}
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>`)
  );

  return newsList;
};
//this will add all the cards on the page
document.getElementById("news").innerHTML = newsCard();
