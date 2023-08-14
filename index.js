var randomNumber1= Math.floor((Math.random()*6 )+1);
var diceNumber1 = "./images/dice"+randomNumber1+".png";

document.querySelector("img").setAttribute("src",diceNumber1);
var randomNumber2= Math.floor((Math.random()*6 )+1);
var diceNumber2 = "./images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src", diceNumber2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS!🏆";
}else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS!🏆";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="DRAW!🤝";
}

