// ======================
// 银河星空系统
// ======================


const canvas =
document.getElementById("starCanvas");


const ctx =
canvas.getContext("2d");



let stars=[];


function resize(){


canvas.width=
window.innerWidth;


canvas.height=
window.innerHeight;


}


resize();


window.onresize=resize;




// 创建星星


for(let i=0;i<250;i++){


stars.push({


x:Math.random()*canvas.width,


y:Math.random()*canvas.height,


r:
Math.random()*2+0.5,


speed:
Math.random()*0.3+0.1,


alpha:
Math.random(),


change:
Math.random()*0.02


});


}





// 鼠标位置


let mouse={

x:-100,

y:-100

};



document.addEventListener(
"mousemove",
(e)=>{


mouse.x=e.clientX;

mouse.y=e.clientY;


});






function drawStars(){


ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



stars.forEach(star=>{


// 星星移动

star.y-=star.speed;



if(star.y<0){

star.y=canvas.height;

}



// 闪烁

star.alpha+=star.change;


if(star.alpha>=1||
star.alpha<=0.2){

star.change*=-1;

}



// 鼠标影响


let dx=
star.x-mouse.x;


let dy=
star.y-mouse.y;


let distance=
Math.sqrt(dx*dx+dy*dy);



if(distance<120){


star.x+=dx/20;

star.y+=dy/20;


}



// 绘制


ctx.beginPath();


ctx.arc(
star.x,
star.y,
star.r,
0,
Math.PI*2
);



ctx.fillStyle=
`rgba(255,255,220,${star.alpha})`;


ctx.fill();



});



requestAnimationFrame(
drawStars
);


}



drawStars();