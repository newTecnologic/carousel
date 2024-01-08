

var isVideoPlaying = false; 

var owl = $('.owl-carousel');
$(document).ready(function(){
    var it = true;
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin:10,
        nav:true,
        video: true,
        autoplay: true,
        autoplayTimeout:9334,
        autoplayHoverPause:true,
        center: true,
        stopOnHover : true,
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
            },
        onTranslate: function(event) {
            //posicion del video
            //var currentSlide, player, command;
            var currentSlide = event.item;
            currentSlide = $('.owl-item.active');
            //detener el tiempo cuando cambia de video
            player = currentSlide.find(".flex-video iframe").get(0);
            console.log(player)
            command = {
                "method": "pause",
                "value": "true"
            };
            if (player != undefined) {
                player.contentWindow.postMessage(JSON.stringify(command), "*");
                isVideoPlaying = true;
            }else{
                isVideoPlaying = false;
            }
        },
    });
    owl.on('click', '.owl-video-play-icon', function () {
        if (isVideoPlaying =true) {
          owl.trigger('play.owl.autoplay');
          it = false;
        } else {
          owl.trigger('stop.owl.autoplay');
          it = true;
        }
      });
});
