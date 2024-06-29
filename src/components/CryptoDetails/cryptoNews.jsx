import { useEffect } from "react";
function CryptoNews() {
  async function getData() {
    const apikey = "96ec0253aa1f135abeaa31bdf8d019ec";
    const url =
      "https://gnews.io/api/v4/search?q=crypto&lang=en&country=us&max=10&apikey=" +
      apikey;

    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const articles = data.articles;

        for (let i = 0; i < articles.length; i++) {
          // articles[i].title
          console.log("Title: " + articles[i]["title"]);
          // articles[i].description
          console.log("Description: " + articles[i]["description"]);
          // You can replace {property} below with any of the article properties returned by the API.
          // articles[i].{property}
          // console.log(articles[i]['{property}']);

          // Delete this line to display all the articles returned by the request. Currently only the first article is displayed.
          break;
        }
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return <></>;
}

export default CryptoNews;
