var audio = new Audio("./assets/images/joan - stop and stare.mp3");
var pause = "<i class=\"material-icons changeIcon\">pause</i>";
var play = "<i class=\"material-icons changeIcon\">play_arrow</i>";
var hasBeenClicked = false;
$(".toggle").on("click", function () {
    if (hasBeenClicked === false) {
        audio.play();
        $(".toggle").html(pause);
        $("#joan").show();
        hasBeenClicked = true
    }
    else {
        audio.pause();
        $(".toggle").html(play);
        $("#joan").hide();
        hasBeenClicked = false;
    }
})

$(function() {

    $('a').each(function() { /* [1] */
         if ( location.hostname === this.hostname || !this.hostname.length ) { /* [1] */

            var link = $(this).attr("href"); /* [2] */

            if ( link.match("^#") ) { /* [3] */

                $(this).click(function() {
                    var target = $(link); /* [4] */ 
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); /* [4] */ 
                    if (target.length) {
                        $('html,body').animate({ /* [5] */ 
                            scrollTop: target.offset().top - 70 /* [5] */ 
                        }, 1000); return false; /* [5] */ 
                    }
                });

            } else if ( link.match("^mailto") ) { /* [6] */ 
                // Act as normal  /* [6] */ 
            } else {

                $(this).click(function(e) {
                    e.preventDefault(); /* [7] */ 
                    $('html').addClass('fadeSiteOut'); /* [8] */ 
                    setTimeout(function() { /* [9] */
                        window.location = link; /* [9] */
                    }, 500); /* [9] */
                });

            }

        }
    });
  
});