const bigBoxFull = document.getElementById("bigBoxF"), imgFull=document.getElementById("bigImgF");

function openImg(linkImg){
    bigBoxFull.style.display ="flex";
    imgFull.src = linkImg;
}

function closeImg(){
    bigBoxFull.style.display = "none";
}