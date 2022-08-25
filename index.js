var randomNumber1 =Math.floor(Math.random()*6)+1;
var randomNumber2 =Math.floor(Math.random()*6)+1;
var imgOne=document.querySelector(".img1");
var imgTwo=document.querySelector(".img2");
imgOne.setAttribute("src","images/dice"+randomNumber1+".png");
imgTwo.setAttribute("src","images/dice"+randomNumber2+".png");
if (randomNumber1>randomNumber2) {
  document.querySelector("h1").innerHTML="Player1 wins";
  document.querySelector(".winning-Player1").style.display="inline";
}
else if (randomNumber1<randomNumber2) {
  document.querySelector("h1").innerHTML="Player2 wins";
  document.querySelector(".winning-Player2").style.display="inline";
} else {
  document.querySelector("h1").innerHTML="Draw";

}
