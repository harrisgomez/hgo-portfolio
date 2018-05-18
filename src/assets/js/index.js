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
    var $skillsWrapper = $('#skills-wrapper');
    var $projectsWrapper = $('#projects-wrapper');
    var $socialsWrapper = $('#socials-wrapper');
    var $contactWrapper = $('#contact-wrapper');
    var $docHeight = $(document).height();
    // checks scroll location of current window frame
    $(window).scroll(function() {
        var $this = $(this);
        var $scrollTop = Math.round($this.scrollTop());
        // ABOUT
        if (isAboutPage($this)) {
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

        // SKILLS
        if (isSkillsPage($this)) {
            console.log('yes');
            $skillsWrapper.css({
                'position': 'absolute',
                'top': '200%'
            })
        } else {
            $skillsWrapper.css({
                'position': 'fixed',
                'top': '0'
            })
        }

        // PROJECTS
        if (isProjectsPage($this)) {
            $projectsWrapper.css({
                'position': 'absolute',
                'top': '300%'
            })
        } else {
            $projectsWrapper.css({
                'position': 'fixed',
                'top': '0'
            })
        }

        // SOCIALS
        if (isSocialsPage($this)) {
            $socialsWrapper.css({
                'position': 'absolute',
                'top': '400%'
            })
        } else {
            $socialsWrapper.css({
                'position': 'fixed',
                'top': '0'
            })
        }

        // CONTACT
        if (isContactPage($this)) {
            $contactWrapper.css({
                'position': 'absolute',
                'top': '500%'
            })
        } else {
            $contactWrapper.css({
                'position': 'fixed',
                'top': '0'
            })
        }

        function isAboutPage($window) {
            if ($scrollTop > $window.height() * 0.8 && $scrollTop < $window.height() * 1.2) {
                console.log('page is focused');
            }
            if ($scrollTop >= $window.height()) {
                return true;
            }
        }
        function isSkillsPage($window) {
            if ($scrollTop >= $window.height() * 2) {
                return true;
            }
        }
        function isProjectsPage($window) {
            if ($scrollTop >= $window.height() * 3) {
                return true;
            }
        }
        function isSocialsPage($window) {
            if ($scrollTop >= $window.height() * 4) {
                return true;
            }
        }
        function isContactPage($window) {
            if ($scrollTop >= $window.height() * 5) {
                return true;
            }
        }
    })

});
