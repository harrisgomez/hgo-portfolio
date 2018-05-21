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
});
