let btn_slide_img  = document.querySelector(".btn_slide_img");
let leg1 = document.querySelectorAll(".btn_slide_img > div");
let boxtetxt = document.querySelectorAll(".boxtext1");
let dark_white = document.querySelector(".drak-white");
let sw = document.querySelector(".swmode");
let main = document.getElementById("main");
let textcolor = document.querySelectorAll(".color");
let btnbuyh2 = document.querySelector(".btnbuy > h2");
let btnbuya = document.querySelector(".btnbuy > a");

let arimg = ["#img1","#img2"];
let countar = 1;

boxtetxt[0].style.display = "block";

btn_slide_img.addEventListener("click",() => {
    for (let i = 0 ; i < boxtetxt.length ; i++) {
        boxtetxt[i].style.display = "none";
    }
    if (countar > 1) {
        countar = 0;
    }
    btn_slide_img.href = arimg[countar];
    boxtetxt[countar].style.display = "block";
    countar += 1;
});

dark_white.addEventListener("click",() => {
    dark_white.classList.toggle("clickwhitemodebk");
    sw.classList.toggle("clickwhitemode");
    sw.classList.toggle("clickwhitemodecircle");
    main.classList.toggle("clickwhitemodecircle");
    for (let i = 0 ; i < textcolor.length ; i++) {
        textcolor[i].classList.toggle("clickwhitemodecolorb");
    }
    leg1[0].classList.toggle("clickwhitemodebk");
    leg1[1].classList.toggle("clickwhitemodebk");
    btnbuyh2.classList.toggle("clickwhitemodecolorb");
    btnbuya.classList.toggle("clickwhitemodebk");
    btnbuya.classList.toggle("clickwhitemodecolorw");
});