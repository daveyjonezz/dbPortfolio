var button = document.getElementById("toggle");
var audio = document.getElementById("player");

button.addEventListener("click", function(){
  if(audio.paused){
    audio.play();
    // button.innerHTML = "Pause";
  } else {
    audio.pause();
    // button.innerHTML = "Play";
  }
});