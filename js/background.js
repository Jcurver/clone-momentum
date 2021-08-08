const images = ["pic2.jpeg","pic3.jpeg","pic4.jpeg","pic5.jpeg","pic8.jpeg"]

const chosenImage = images[Math.floor(Math.random()*images.length)];
const body1 = document.querySelector("body");
const bgImage = document.createElement("img");

const img = document.querySelector("#img");
// img.src = `img/${chosenImage}`;
// img.style.objectfit = "cover";

bgImage.src=`img/${chosenImage}`;

// document.body.appendChild(bgImage);
// bgImage.style.position = "absolute";
// bgImage.style.height = "100vh";
// bgImage.style.zIndex = "1";

body1.style.backgroundImage = `url(img/${chosenImage})`;
body1.style.objectfit = "cover";
