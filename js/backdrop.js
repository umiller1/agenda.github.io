let funImage = document.querySelector(".img-cont img");
let funFact = document.querySelector(".contain.b");

if (funImage) {
    funFact.style.backgroundImage = "url('" + funImage.src + "')";
}
