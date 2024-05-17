let canvas = document.querySelector(".myCanvas");
let width = (canvas.width);
let height = (canvas.height);
let ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(255,255,255)";
ctx.fillRect(0, 0, width, height);

let waveLenght = 600*Math.pow(10,-9);
let koef = 1.5;
let d = 0.0000005;
let L = 1;


const availableScreenWidth = window.screen.availWidth;
const availableScreenHeight = window.innerHeight;
console.log("Ширина", availableScreenWidth );
console.log("Длина", availableScreenHeight );


let waveLenght_text = document.getElementById("waveLenght");
let koef_text = document.getElementById("koef");
let d_text = document.getElementById("d");
let L_text = document.getElementById("L");
let resultButton = document.getElementById('result');

showMessage(waveLenght,koef,d,L);



function  showMessage( waveLenght ,koef,d,L){
    let I0=1;    
    
    let width2=waveLenght*L/d;
    console.log("Ширина", width2);
    var clickX = canvas.offsetLeft - availableScreenWidth*40/100;
  var clickY = canvas.offsetTop-114;
  console.log(canvas.offsetLeft);
  console.log(canvas.offsetTop);
  console.log(clickX);
  console.log(clickY);


  for (let x =height/2; x>-height/2; x -=1.5555){
    let I = 4 * I0 * Math.cos(Math.PI * koef * d * x / (waveLenght * L)) * Math.cos(Math.PI * koef * d * x / (waveLenght * L));
    console.log("I: ",I );
    let color=(I/4*255)%256;
    ctx.fillStyle = `rgb(${color}, ${color}, ${color})`;
    console.log("color: ",color );
    ctx.fillRect(0,height/2-x, width, height/2-x+1.5555);
}

  
}





resultButton.onclick = function(){
    waveLenght = waveLenght_text.value*Math.pow(10,-9);
    L = L_text.value;
    d=d_text.value;
    koef=koef_text.value;

    if (L<=0 || d <= 0 || waveLenght<0){
        alert("Значения не могут быть неположительными!")
    }
    else if (d>=L){
        alert("d >> L")
    }
   
    else{
        showMessage(waveLenght,koef,d,L);
    }

    
}








 



