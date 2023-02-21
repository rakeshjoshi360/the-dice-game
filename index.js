var randomVariable1 = Math.floor(Math.random()*6+1);
var randomVariable2 = Math.floor(Math.random()*6+1);
var diceImageLeft = "images/dice" + randomVariable1+".png";
// document.querySelector("img.img1").setAttribute("src", diceImageLeft);
document.querySelectorAll("img")[0].setAttribute("src", diceImageLeft);
var diceImageRight = "images/dice" + randomVariable2+".png";
// document.querySelector("img.img2").setAttribute("src", diceImageRight);
document.querySelectorAll("img")[1].setAttribute("src", diceImageRight);
if (randomVariable1>randomVariable2){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}
else if(randomVariable1<randomVariable2){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
else{
  document.querySelector("h1").innerHTML = "🚩Draw🚩"
}
