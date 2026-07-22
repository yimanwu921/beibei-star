
let songs=[


"music/光年之外.mp3",

"music/唯一.mp3",

"music/泡沫.mp3",

"music/倒数.mp3",

"music/句号.mp3"


];


let names=[


"光年之外",

"唯一",

"泡沫",

"倒数",

"句号"


];



let audio=document.getElementById("audio");


let now=document.getElementById("now");



let index=0;



function playMusic(i){


index=i;


audio.src=songs[i];


now.innerHTML=

"正在播放："+names[i];


audio.play();


}




// 播放结束随机下一首

audio.onended=function(){


let next;


do{


next=Math.floor(
Math.random()*songs.length
);


}

while(next==index);



playMusic(next);


}