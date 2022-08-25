function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

const ul = document.querySelector("#picture");
const url = "data/data.json";
fetch(url)
  .then((resp) => resp.json())
  .then(function (data) {
    let albums = data.albums;
    return albums.map(function (data) {
      let li = createNode("li"),
        img = createNode("img");
      img.src = data.picture;
      li.innerHTML = data.desc;
      append(ul, img);
      append(ul, li);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
