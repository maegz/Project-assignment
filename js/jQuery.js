// Small jQuery-function to make the footer and jumbotron loop opacity changes slightly.
$(document).ready(function() {

    if ($(window).width() > 480) {

        $("nav").hide(0).delay(2000).fadeIn(1000);
        $("footer").hide(0).delay(1000).fadeIn(1000);
        $(".jumbotron").hide(0).delay(1500).fadeIn(1000).html(
            "<div class='container'>" +
                "<h1>Max Project</h1>" +
                "<p>This page was created for the purpouse of testing " +
                "my newly gotten skills in HTML, CSS and JavaScript. " +
                "So bear in mind that this might not be the most brilliant " +
                "thing you've ever seen, but instead a rookies hope and " +
                "desire for something greater to come...</p>" +
            "</div>"
        );

        function animateFooterAndJumbotron() {
            $("footer, #jumbotron").animate({
                opacity: 0.9}, 3000).animate({
                opacity: 0.7}, 3000, animateFooterAndJumbotron);
        }
        animateFooterAndJumbotron();

    } else {
        $(".jumbotron").html(
            "<div class='container'>" +
                "<h1>Max Project</h1>" +
                "<p>This page was created for the purpouse of testing " +
                "my newly gotten skills in HTML, CSS and JavaScript. " +
                "So bear in mind that this might not be the most brilliant " +
                "thing you've ever seen, but instead a rookies hope and " +
                "desire for something greater to come...</p>" +
            "</div>"
        );
    }

});

// Fade in the content from the javascript.js-file.
function fadeInContent() {
    $("#content").hide(0).fadeIn(500);
}
