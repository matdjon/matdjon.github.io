
window.onload = function(){
  console.log("test")

  homeLink();
};

function homeLink(){
  home = document.getElementById('homeLink')
  home.onclick=function(){window.location.href="./main.html"}
}