const URLS = [
  { url: "https://anitaku.pe/home.html", cssSelector: ".name", index: 0 },
  { url: "https://jnovels.com", cssSelector: ".post-title", index: 4 },
  {
    url: "http://www.vn-meido.com/k1/index.php?board=17.0",
    cssSelector: ".preview a",
    index: 4,
  },
];

function fetchHtml({ url, cssSelector, index }) {
  console.log(url);
  fetch(url, {
    method: "GET",
    referrerPolicy: "unsafe-url",
  })
    .then((response) => response.text())
    .then((body) => {
      const document = new DOMParser().parseFromString(body, "text/html");
      const value = document.querySelectorAll(cssSelector)[index].textContent;
      console.log(value);
    })
    .catch(console.error);
}

URLS.forEach(fetchHtml);
