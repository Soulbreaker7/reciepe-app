var images = ["banner1.jpeg", "banner2.jpeg", "banner4.jpg", "banner5.jpg", "banner6.jpg", "banner7.jpg", "banner8.jpg"];
var bg = document.getElementById("frontpage");
function changeBackgroundImage() {
  var randomIndex = Math.floor(Math.random() * images.length);
  bg.style.backgroundImage = "url(images/" + images[randomIndex] + ")";
}
window.addEventListener("load", changeBackgroundImage);

// console.log(document.getElementById("frontpage"));








