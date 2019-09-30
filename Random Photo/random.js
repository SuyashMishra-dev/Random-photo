let image = document.getElementById("image");
let randomNo;
let src = "https://memegenerator.net/img/images/";
let full_src = "";

function show() {
  randomNo = Math.random()*4000;
  randomNo = Math.round(randomNo);
  full_src = src + randomNo + ".jpg";
  image.src = full_src;
}



