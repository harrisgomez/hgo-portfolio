$(document).ready(function() {
    var waiting_to_type = false;
    var description = ["web applications.", "user interfaces.", "Front-End solutions."];
    var current_descr = 0;

    typeString();

    function typeString() {
        if(!$('.words-wrapper').text() && !waiting_to_type && current_descr < description.length) {
            waiting_to_type = true;
            typeWriter(description[current_descr]);
            current_descr++;
        } else {
            current_descr = 0;
            typeString();
        }
    }

    function typeWriter(current_descr) {
        for(var i = 0; i < current_descr.length; i++) {
            $(`<b class='is-hidden'>${current_descr[i]}</b>`).appendTo('.words-wrapper');
        }

        $('.words-wrapper b').each(function(idx) {
            var $char = $(this);
            setTimeout(function() {
                $($char).toggleClass('is-hidden is-visible');
            }, idx * 50);
        })
    }

    setInterval(function() {
        if($('.words-wrapper b:last-child').hasClass('is-visible') && waiting_to_type) {
            waiting_to_type = false;
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
