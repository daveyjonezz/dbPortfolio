var audio = new Audio("./assets/images/joan - stop and stare.mp3");
var pause = "<i class=\"material-icons changeIcon\">pause</i>";
var play = "<i class=\"material-icons changeIcon\">play_arrow</i>";
var hasBeenClicked = false;
$(".toggle").on("click", function () {
    if (hasBeenClicked === false) {
        audio.play();
        $(".toggle").html(pause);
        hasBeenClicked = true
    }
    else {
        audio.pause();
        $(".toggle").html(play);
        hasBeenClicked = false;
    }
})