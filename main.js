// when we hover on the artist name, give random rotation
const artists = document.querySelectorAll("section .artists h1");

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

function makeMarquee() {
  const title = "Patti Smith 🍒 ";

  // an array is a list of things
  const marqueeText = new Array(100).fill(title).join("  ");

  // 1. we want to grab out marquee span form the html
  // 2. we want to set our repeating title as the content

  const marquee = document.querySelector(".marquee span");
  marquee.innerHTML = marqueeText;
}

makeMarquee();
