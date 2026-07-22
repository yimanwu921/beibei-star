let songs=[

"https://higequ.com/player/15195332/",

"https://higequ.com/player/321260769/",

"https://higequ.com/player/1245657/",

"https://higequ.com/player/51648461/",

"https://higequ.com/player/83765010/"

];


let names=[

"光年之外",

"唯一",

"泡沫",

"倒数",

"句号"

];


let player=document.getElementById("musicPlayer");

let cover=document.getElementById("cover");

let now=document.getElementById("now");



function playMusic(index){


cover.style.display="none";


player.style.display="block";


player.src=songs[index];


now.innerHTML="🎵 当前播放："+names[index];


}
