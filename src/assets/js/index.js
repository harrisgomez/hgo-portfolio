$(function() {
    var waitingToType = false;
    var description = ["web applications.", "user interfaces.", "Front-End solutions."];
    var currentDescr = 0;

    typeString();

    function typeString() {
        if(!$('.words-wrapper').text() && !waitingToType && currentDescr < description.length) {
            waitingToType = true;
            typeWriter(description[currentDescr]);
            currentDescr++;
        } else {
            currentDescr = 0;
            typeString();
        }
    }

    function typeWriter(currentDescr) {
        for(var i = 0; i < currentDescr.length; i++) {
            $(`<i class='is-hidden'>${currentDescr[i]}</i>`).appendTo('.words-wrapper');
        }

        $('.words-wrapper i').each(function(idx) {
            var $char = $(this);
            // controls speed of type writer
            setTimeout(function() {
                $($char).toggleClass('is-hidden is-visible');
            }, idx * 50);
        })
    }

    setInterval(function() {
        if($('.words-wrapper i:last-child').hasClass('is-visible') && waitingToType) {
            waitingToType = false;
            setTimeout(function() {
                $('.words-wrapper').children().css('background-color', 'rgba(192,192,192,0.3)');
                $('.words-wrapper').children().css('color', 'black');
            }, 100);
            setTimeout(function() {
                $('.words-wrapper').empty();
                typeString();
            }, 300);
        }
    }, 4000);

    // scroll pages off screen
    var $aboutWrapper = $('#about-wrapper');
    var $docHeight = $(document).height();
    // checks scroll location of current window frame
    $(window).scroll(function() {
        var $this = $(this);
        var $scrollTop = Math.round($this.scrollTop());
        // page 2
        if (page2($this)) {
            $aboutWrapper.css({
                'position': 'absolute',
                'top': '100%'
            })
        } else {
            $aboutWrapper.css({
                'position': 'fixed',
                'top': '0'
            })
        }
        // page 3
        if (page3($this)) {
            console.log('page 3');
        }

        function page2($window) {
            if ($scrollTop > $window.height() * 0.8 && $scrollTop < $window.height() * 1.2) {
                console.log('page is focused');
            }
            if ($scrollTop >= $window.height()) {
                return true;
            }
        }
        function page3($window) {
            if ($scrollTop >= $window.height() * 2) {
                return true;
            }
        }
    })

});
