// when we hover on the artist name, give random rotation
const artists = document.querySelectorAll("section .artists h3");

artists.forEach((artist) => {
  artist.addEventListener("mouseover", function () {
    let rotation = 3 * Math.floor(Math.random() * 5) - 5;
    artist.style.transform = `rotate(${rotation}deg)`;
  });
});

artists.forEach((artist) => {
  artist.addEventListener("mouseout", function () {
    artist.style.transform = "";
  });
});
