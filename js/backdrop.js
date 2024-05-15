let funImage = document.querySelector(".img-cont img");
let funFact = document.querySelector("#fun");

if (funImage) {
    funFact.style.backgroundImage = "url('" + funImage.src + "')";
}
