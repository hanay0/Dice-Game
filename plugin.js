/* creating first variable "random number" */
var randomNumber1 = (Math.floor(Math.random()* 6)+ 1);

var randomImage ="images/" + "dice" + randomNumber1 + ".png"; /* combine random number to be an image number */
/* var randomSrc = "images/" + randomImage; */

/* var firstImage = document.querySelectorAll("img")[0]; */
var firstImage = document.querySelector(".img1");

firstImage.setAttribute("src", randomImage);


// second image on the right
var randomNumber2 = (Math.floor(Math.random()* 6) + 1)
var randomImage2 ="images/" + "dice" + randomNumber2 + ".png";
var secondImage = document.querySelector(".img2");

secondImage.setAttribute("src", randomImage2);


//changing the text of h1 which shows a text of the winning player

if(randomNumber1 > randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "👏🏾 Player One Won";
    document.querySelector("h1").classList.add("pinkish");
} else if(randomNumber2 > randomNumber1){
    document.getElementsByTagName("h1")[0].innerHTML = "Player Two Won 👏🏾";
} else if(randomNumber1 === randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "🤞🏾 DRAW 🤞🏾";
}