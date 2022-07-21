var random1=[];
var random2 =[];
var started = false;
function dice1(){
     var random = (Math.floor(Math.random()*6 + 1));    
     document.querySelector(".img1").setAttribute("src","dice"+random+".png");
     random1.push(random);
     setTimeout(function(){
        $("h1").text("Player 2 roll your dice 🎲");
    },300);


}
console.log(random1);
function dice2(){
   var  random = (Math.floor(Math.random()*6 + 1));
   document.querySelector(".img2").setAttribute("src","dice"+random+".png");
   random2.push(random);
}
console.log(random2[0]);
function checkAnswer(){
if(random1[0]>random2[0]){
    $("h1").text(" 🚩Player 1 wins");
}
else if(random2[0]>random1[0]){
    $("h1").text( "Player 2 wins 🚩");

}
else{
    $("h1").text("Draw!");

}
}
function image(){
    if(!started){
        var roll1 = new Audio('MANYDICE.wav');
        roll1.play();
    
    $(".img1").addClass("imgSpin");
    setTimeout(function(){
        $(".img1").removeClass("imgSpin");
    },200);
    dice1();
    started = true;
}
}
function image1(){
    var roll2 = new Audio('MANYDICE.wav');
    roll2.play();

    $(".img2").addClass("imgSpin");
    setTimeout(function(){
        $(".img2").removeClass("imgSpin");
    },200);
    dice2();
    checkAnswer();
    setTimeout(function(){
        
    startOverr();

    },1000);
    
}
function startOverr(){
    random1.length = 0;
    random2.length = 0;
    started = false;
    $("h1").text("Player 1 roll your dice 🎲");
}
