// Snowflake memory game!
function memoryGame() {

    var images = [];

    // Get images, place them in an array & randomize the order.
    for (var i = 1; i < 7; i++) {
        var img = "images/snowflake" + i + ".gif";
        images.push(img);
        images.push(img);
    }

    randomizeImages();

    var guess1 = "",
        guess2 = "",
        count  = 0;

    // Output images, then hide them.
    var output = "<h2 style='text-align: center;'>Let's play some memory!</h2><br><ol>";

    for (var i = 0; i < 12; i++) {
        output += "<li id='memoryLi'>";
        output += "<img src = '" + images[i] + "'/>";
        output += "</li>";
    }

    output += "</ol>";
    document.getElementById("content2").innerHTML = output;
    $("#content2 img").hide();


    $("ol li").click(function() {
        // If count is less than 2 and the memoryLi-child don't have the class "face-up".
        if ((count < 2) && ($(this).children("img").hasClass("face-up")) === false) {

            // Guessing count + 1, memoryLi-child not hidden and gets face-up class added.
            count++;
            $(this).children("img").fadeIn("fast");
            $(this).children("img").addClass("face-up");

            // Guess #1
            if (count === 1 ) {
                guess1 = $(this).children("img").attr("src"); // get memoryLi-child #1 image name.
            }
            // Guess #2
            else {
                guess2 = $(this).children("img").attr("src"); // get memoryLi-childs #2 image name.


                // Second guess, check for a match. If that is the scenario, add class match to memoryLi-child.
                if (guess1 === guess2) {
                    console.log("Correct!");
                    $("ol li").children("img[src='" + guess2 + "']").addClass("match");
                }
                // If not a match, image gets hidden and class face-up is removed.
                else {
                    console.log("Miss!");
                    setTimeout(function() {
                        $("ol li").children("img").not(".match").fadeOut("slow");
                        $("img").not(".match").removeClass("face-up");
                    }, 1000);
                }

                // Reset counter.
                count = 0;
            }
        }
    });

    // randomize array of images
    // function randomizeImages(){
    //     var i,
    //         randomize,
    //         length;
    //
    //     for (length = images.length; length !== 0;) {
    //         randomize       = Math.floor(Math.random() * length);
    //         length         -= 1;
    //         i               = images[length];
    //         images[length]    = images[randomize];
    //         images[randomize] = i;
    //     }
    //
    //     // return images;
    // }
    function randomizeImages() {
        Array.prototype.randomize = function() {
            var i = this.length, j, temp;

            while ( --i ) {
                j = Math.floor( Math.random() * (i - 1) );
                temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        };

        images.randomize();
    }

};
