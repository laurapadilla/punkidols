// Select draggable elements
var draggableElems = document.querySelectorAll(".draggable");
var draggies = [];
for (var i = 0, len = draggableElems.length; i < len; i++) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly(draggableElem, {});
  draggies.push(draggie);
}

const modalLinks = document.querySelectorAll("h1.artist-link");
const bodyTag = document.querySelector("body");
let z = 100;

// when we hover on the artist name, add random rotation
modalLinks.forEach((link) => {
  link.addEventListener("mouseover", function () {
    let rotation = 3 * Math.floor(Math.random() * 5) - 5;
    link.style.transform = `rotate(${rotation}deg)`;
  });
});

modalLinks.forEach((link) => {
  link.addEventListener("mouseout", function () {
    link.style.transform = "";
  });
});

// Open modals for each artist
for (var i = 0; i < modalLinks.length; i++) {
  var thisLink = modalLinks[i];
  thisLink.addEventListener(
    "click",
    function () {
      var modal = document.getElementById(this.dataset.modal);
      modal.style.display = "block";
      modal.style.zIndex = z;
      z = z + 1;

      // create random positioning for modals
      const divWidth = modal.getBoundingClientRect().width;
      const divHeight = modal.getBoundingClientRect().height;
      const x = Math.random() * (window.innerWidth - divWidth);
      const y = Math.random() * (window.innerHeight - divHeight);

      modal.style.left = x + "px";
      modal.style.top = y + "px";
    },
    false
  );
}

// Clear all modals
const modals = document.querySelectorAll(".modal");
const clearBtn = document.getElementById("clear");

modals.forEach((modal) => {
  clearBtn.addEventListener("click", function () {
    modal.style.display = "none";
    const audio = document.createElement("audio");
    audio.setAttribute("src", "smw_thud.wav");
    audio.play();
  });
});

// Marquee code
function makeMarquee() {
  const title = "Patti Smith 🍋 ";

  // an array is a list of things
  const marqueeText = new Array(100).fill(title).join("  ");

  // 1. we want to grab out marquee span form the html
  // 2. we want to set our repeating title as the content

  const marquee = document.querySelector(".marquee span");
  marquee.innerHTML = marqueeText;
}

makeMarquee();

// CHERRY CODE
function randomizePosition() {
  // get the dimensions of the viewport and remove the size of the div
  var h = $("div.joan").height() - 40;
  var w = $("div.joan").width() - 40;

  var newh = Math.floor(Math.random() * h);
  var neww = Math.floor(Math.random() * w);

  return [newh, neww];
}

// Move the cherry around div
function animateDiv() {
  var newq = randomizePosition();
  var oldq = $(".cherry").offset();
  var speed = calculateSpeed([oldq.top, oldq.left], newq);

  $(".cherry").animate({ top: newq[0], left: newq[1] }, speed, function () {
    animateDiv();
  });
}

// speed modifier
function calculateSpeed(prev, next) {
  var x = Math.abs(prev[1] - next[1]);
  var y = Math.abs(prev[0] - next[0]);
  var greatest = x > y ? x : y;
  var speedModifier = 0.1;
  var speed = Math.ceil(greatest / speedModifier);
  return speed;
}
animateDiv();

// WAVE ANIMATION
let xs = [];
// x is 0 to 500 px across
for (var i = 0; i < 1500; i++) {
  xs.push(i);
}
let t = 0;
// when we animate, we loop over the animation
function animate() {
  let height = window.innerWidth > 800 ? 40 : 45;
  let points = xs.map((x) => {
    let y = height + 4 * Math.sin((x - t) / 8);
    return [x, y];
  });

  // take every x, turn it into an HTML attribute
  let path =
    "M" +
    points
      .map((p) => {
        return p[0] + "," + p[1];
      })
      .join(" L");
  if (window.innerWidth > 800) {
    document.querySelector("path").setAttribute("d", path);
  } else {
    document.querySelector("#mobile path").setAttribute("d", path);
  }

  // the time moves it around the page
  t++;
  requestAnimationFrame(animate);
}

animate();
