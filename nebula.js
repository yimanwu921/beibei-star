const nebula=
document.getElementById(
"nebulaCanvas"
);


const nctx=
nebula.getContext("2d");


function resizeNebula(){

nebula.width=
window.innerWidth;

nebula.height=
window.innerHeight;

}

resizeNebula();


window.onresize=
resizeNebula;



let angle=0;


function drawNebula(){


nctx.clearRect(
0,
0,
nebula.width,
nebula.height
);



angle+=0.002;



let gradient=
nctx.createRadialGradient(
nebula.width/2,
nebula.height/2,
50,
nebula.width/2,
nebula.height/2,
400
);



gradient.addColorStop(
0,
"rgba(120,80,255,.15)"
);


gradient.addColorStop(
1,
"transparent"
);



nctx.fillStyle=
gradient;


nctx.save();


nctx.translate(
nebula.width/2,
nebula.height/2
);


nctx.rotate(angle);


nctx.fillRect(
-400,
-100,
800,
200
);



nctx.restore();


requestAnimationFrame(
drawNebula
);


}


drawNebula();