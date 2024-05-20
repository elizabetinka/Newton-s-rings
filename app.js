//let canvas = document.querySelector(".myCanvas");

//let ctx = canvas.getContext("2d");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let width = (canvas.width);
let height = (canvas.height);

let waveLenght1 = 600*Math.pow(10,-9);
let radius1 = 1;
let linza1 = 2;
let plast1 = 3;
let env1 = 1;
let light1 = 4;


const availableScreenWidth = window.screen.availWidth;
const availableScreenHeight = window.innerHeight;
console.log("Ширина", availableScreenWidth );
console.log("Длина", availableScreenHeight );


let waveLenght_text = document.getElementById("waveLenght");
let radius_text = document.getElementById("radius");
let linza_text = document.getElementById("linza");
let plast_text = document.getElementById("plast");
let env_text = document.getElementById("env");
let light_text = document.getElementById("light");
let resultButton = document.getElementById('result');

showMessage( waveLenght1 ,radius1,linza1,plast1,env1,light1);

    

function I(r,waveLenght ,radius,linza,plast,env,light){
    let R = ((plast-env)/(plast+env))*((plast-env)/(plast+env));
    let T = 4*linza*env/ ((linza+env)*(linza+env));
    let Delta = r * r / radius * env + waveLenght / 2;
    return  light*T*T*R + light*R + 2*light*R*T*Math.cos(2 * Math.PI / waveLenght * Delta)
}

function  showMessage( waveLenght ,radius,linza,plast,env,light){
    console.log(waveLenght ,radius,linza,plast,env,light);
    

    var mass_x = [];
    var mass_y = [];


    for (let i = 0; i < 0.001; i += 0.000001) {
        mass_x.push(i);
        mass_y.push(I(i,waveLenght ,radius,linza,plast,env,light));
    }
    ctx.fillStyle = '#ffffff'; // белый цвет
ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < mass_y.length; i++){
        let currentColor = 255 * mass_y[i] / light;
        let color=`rgba(${currentColor},${currentColor},${currentColor}, 1)`;
        // Домножение на константу помогает лучше видеть кольцо
        let radius2 = Math.sqrt((i - 0.5) * waveLenght * radius / env)*7500;
        
        
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, radius2, 0, 2 * Math.PI);
        ctx.strokeStyle = color;
    
        ctx.stroke();
    }
    




 
  
}





resultButton.onclick = function(){
    waveLenght1 = waveLenght_text.value*Math.pow(10,-9);
    radius1 = radius_text.value;
    linza1=linza_text.value;
    plast1=plast_text.value;
    env1=env_text.value;
    light1=light_text.value;
    console.log( waveLenght1 ,radius1,linza1,plast1,env1,light1);
    if (radius1<=0 || linza1 <= 0 || waveLenght1<0){
        alert("Значения не могут быть неположительными!")
    }

    if ( plast1 < 1 || env1 < 1 || light1<1){
        alert("оказатели преломления должны быть >= 1")
    }
   
    else{
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#ffffff'; // белый цвет
ctx.fillRect(0, 0, canvas.width, canvas.height);
        showMessage( waveLenght1 ,radius1,linza1,plast1,env1,light1);
    }

    
}








 



