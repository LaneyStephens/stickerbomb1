const images = ["sticker1.webp", "anotherimage.webp"];
let i=0
function addImage(x,y) {

const nextimage = images[i];

const img = document.createElement("img");
img.setAttribute("src", nextimage);
img.style.left = x + "px";
img.style.top = y + "px";

document.body.appendChild(img);
i = i + 1
if (i >= images.length) { i=0
}

document.addEventListener("touchend", function(event) {
    event.preventDefault();
    placeimage(event.pageX, event.pageY);

)}