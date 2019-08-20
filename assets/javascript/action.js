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

$(document).ready(function () {
    $('.modal').modal();
});

$(function() {

    $('.transition').each(function() { /* [1] */
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

$('.phone').hover(
    function () {
        $('#hoverMe').show();
    },
    function () {
        $('#hoverMe').hide();
    }
);

$('.email').hover(
    function () {
        $('#hoverMeTwo').show();
    },
    function () {
        $('#hoverMeTwo').hide();
    }
);

var hasBeenClickedPhone = false;
$(".phone-mobile").on("click", function () {
    if (hasBeenClickedPhone === false) {
        $('#hoverMe').show();
        hasBeenClickedPhone = true
    }
    else {
        $('#hoverMe').hide();
        hasBeenClickedPhone = false;
    }
})

var hasBeenClickedEmail = false;
$(".email-mobile").on("click", function () {
    if (hasBeenClickedEmail === false) {
        $('#hoverMeTwo').show();
        hasBeenClickedEmail = true
    }
    else {
        $('#hoverMeTwo').hide();
        hasBeenClickedEmail = false;
    }
})

$(document).ready(function(){
    $('.modal').modal();
  });
  
var TxtRotate = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
  };
  
  TxtRotate.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
  
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
  
    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';
  
    var that = this;
    var delta = 300 - Math.random() * 100;
  
    if (this.isDeleting) { delta /= 2; }
  
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
  
    setTimeout(function() {
      that.tick();
    }, delta);
  };
  
  window.onload = function() {
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i=0; i<elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
  };