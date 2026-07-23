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
// =================
// 流星生成
// =================


function createMeteor(){


let meteor=document.createElement("div");


meteor.className="meteor";


meteor.style.left =
Math.random()*window.innerWidth+"px";


meteor.style.top =
"-100px";


document.body.appendChild(meteor);



setTimeout(()=>{

meteor.remove();

},2000);


}


// 每隔一段时间出现流星

setInterval(createMeteor,1000);

createMeteor();
// =================
// 鼠标星尘效果
// =================


document.addEventListener(
"mousemove",
function(e){


let star=document.createElement("div");


star.className="mouse-star";


star.style.left=e.pageX+"px";

star.style.top=e.pageY+"px";


document.body.appendChild(star);



setTimeout(()=>{


star.remove();


},1000);



});
// =================
// 萤火虫生成
// =================


let fireflyBox=
document.getElementById("fireflies");


function createFirefly(){


let f=document.createElement("div");


f.className="firefly";



f.style.left=
Math.random()*window.innerWidth+"px";


f.style.top=
Math.random()*250+200+"px";


f.style.animationDuration=
(5+Math.random()*8)+"s";



fireflyBox.appendChild(f);



setTimeout(()=>{

f.remove();

},12000);


}



setInterval(
createFirefly,
500
);
// =================
// 生成真实草叶
// =================


let grass=
document.getElementById("grass");


for(let i=0;i<900;i++)
{


let blade=
document.createElement("div");


blade.className="blade";

let hasDew=Math.random()<0.015;

blade.style.left=
Math.random()*100+"%";



blade.style.height=
(40+Math.random()*180)+"px";



blade.style.width=
(2+Math.random()*5)+"px";



blade.style.animationDuration=
(2+Math.random()*4)+"s";



blade.style.animationDelay=
Math.random()*3+"s";


if(hasDew){


let dew=document.createElement("div");


dew.className="dew";


blade.appendChild(dew);


}



grass.appendChild(blade);


}
// =================
// 玫瑰点击故事
// =================


function showRoseMessage(){


let text=
document.getElementById("roseText");



text.innerHTML=
`
🌹 你驯服了我的心，<br>
所以你对我来说是独一无二的。<br><br>

—— 小王子
`;



text.classList.toggle("show");


}
// =================
// 小王子故事
// =================


function showPrinceStory(){


let prince=
document.querySelector(
".little-prince"
);



let story=
document.getElementById(
"princeStory"
);




story.innerHTML=
`
嫚将继承一切ヾ(≧▽≦*)o<br>
包括你--我愚蠢的余豆子😂<br><br>
✨ 每一颗星星<br>
都是一份温柔的陪伴hh( •̀ ω •́ )✧
`;



story.classList.toggle("show");


prince.classList.toggle("active");


}
// =================
// 玫瑰花园
// =================


// =====================
// 21朵玫瑰花园
// =====================


let roses =
document.getElementById("roses");



let roseMessages=[


"༼ つ ◕_◕ ༽つ 遇见你，是我星球上最美好的事情。",


"(～o￣3￣)～ 愿你的每一天，都像星星一样闪耀。",


"o(^▽^)o 你是我眼里的唯一玫瑰。",


"（＾∀＾●）ﾉｼ 谢谢你来到我的宇宙。",


"( •̀ ω •́ )✧ 如果星星会说话，它一定会告诉你：你很特别。",


"（￣︶￣）↗　 愿所有温柔，都奔向你。",


"q(≧▽≦q) 你值得被世界温柔对待。",


"(≧∇≦)ﾉ我的星球因为你的存在而明亮。",


"🤗希望快乐永远围绕着你。",


"😆 在亿万星辰里，我只遇见了你。",


"🤫你的笑容，是夜空里最亮的星。",


"🥱 愿你永远保持小王子般的纯真。",


"🤠 每一次想起你，都是一颗星星亮起。",


"o((>ω< ))o 你是我收藏在心里的宝藏。",


"(✿◠‿◠) 愿未来的路，都有鲜花相伴。",


"(o゜▽゜)o☆ 这朵玫瑰代表一份小小的想念。",


"(o゜▽゜)o☆ 你的温柔，是整个宇宙的光。",


"(～o￣3￣)～ 如果我是小王子，你就是我的小狐狸。",


"ヾ(＠⌒ー⌒＠)ノ( $ _ $ ) 愿你永远拥有快乐的小宇宙。",


"o(*￣︶￣*)o 谢谢你成为独一无二的你。",


"^o^y 21岁的你，要一直闪闪发光。"


];



for(let i=0;i<21;i++){


let r=document.createElement("div");


r.className="flower";


r.innerHTML="🌹";


// 随机位置

r.style.left=
Math.random()*90+"%";


r.style.top=
Math.random()*160+"px";



// 随机大小

let size=
30+Math.random()*25;


r.style.fontSize=
size+"px";



// 点击事件

r.onclick=function(){


let box=document.createElement("div");


box.className="rose-message";


box.innerHTML=
roseMessages[i];


document.body.appendChild(box);



setTimeout(()=>{


box.classList.add("show");


},50);



setTimeout(()=>{


box.classList.remove("show");


},3000);



setTimeout(()=>{


box.remove();


},4000);



};




roses.appendChild(r);


}
