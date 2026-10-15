const images = ["hello.png", "uspslabel.png", "usps2.jpeg", "usps3.webp", "andre.png", 
    "andre2.png", "subvertising.png", "nyfuckery.png", "iceout.png", "sesmanhattan.png", 
    "LM.png","blueguy.png", "pridesticker.png" "zohransticker.png"];
let i = 0;

function addImage(x, y) {
    const nextImage = images[i];

    const img = document.createElement("img");
    img.src = nextImage;
    img.style.left = x + "px";
    img.style.top = y + "px";

    document.body.appendChild(img);

    i = (i + 1) % images.length;
}

document.addEventListener("pointerup", function(event) {
    addImage(event.pageX, event.pageY);
});
