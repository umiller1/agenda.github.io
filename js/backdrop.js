let funImage = document.querySelector(".i-cont img");
let funFact = document.querySelector(".b");

if (funImage) {
    funFact.style.backgroundImage = "url('" + funImage.src + "')";
}