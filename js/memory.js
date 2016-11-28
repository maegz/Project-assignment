// Snowflake memory game!
var imagesArray = [],
    imageValues = [],
    imageIDs = [],
    clearedImages = 0,
    triesThisGame = 0,
    triesTotal = 0,
    averagePerGame = 0,
    wonGames = 0;

// Get images and push them in an array twice.
for (var i = 1; i < 7; i++) {
    var img = "images/snowflake" + i + ".gif";
    imagesArray.push(img);
    imagesArray.push(img);
}

function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function memoryGame() {
    clearedImages = 0;
    triesThisGame = 0;
    output = "";
    shuffle(imagesArray);

    // Output headline. Output images inside an ordered list, then hide them.
    var output = "<h2>Let's play some memory!</h2><br><ol>";

    for (var i = 0; i < imagesArray.length; i++) {
        // When clicking, function showImage(this, "imagesArray[i]") will start.
        output += "<li id='imageNr" + i + "' onclick='showImage(this, \"" + imagesArray[i] + "\")'></li>";
    }
    // Close the list.
    output += "</ol>";
    // Add a score-board with tries, won games and average tries/game.
    output += "<h2>Score board:</h2><br><div id='scoreBoard'><p id='triesThisGame'>Tries this game: 0</p>" +
    "<p>Won games: " + wonGames + "</p>" +
    "<p>Average tries per game: " + averagePerGame + "</p></div>";

    // Put the output in content2.
    document.getElementById("content2").innerHTML = output;
    $("#content2").fadeIn("slow");
}

// Takes the specific list-object and its image.
function showImage(li, value) {

    // Each time an image shows, text regenerate with updated clicks.
    $("#triesThisGame").html("Tries this game: " + triesThisGame);

    // IF li don't have any child and imageValues contains less than 2 images:
    if (!li.hasChildNodes() && imageValues.length < 2) {
        image = document.createElement("img");
        image.src = value;
        $(image).fadeIn("fast");
        li.appendChild(image);
        image.className += "visible";

        if (imageValues.length == 0) {
            triesThisGame += 1;
            triesTotal += 1;
            imageValues.push(value);
            imageIDs.push(li.id);
        } else if (imageValues.length == 1) {
            imageValues.push(value);
            imageIDs.push(li.id);

            if (imageValues[0] == imageValues[1]) {
                clearedImages += 2;
                imageValues = [];
                imageIDs = [];

                if (clearedImages == imagesArray.length) {
                    $("#content2").fadeOut("slow");
                    $("#content2").html("<h1 style='text-align: center;'>You did it!</h1>" +
                                        "<button type='button' onclick(restartGame())>Play again?</button>").fadeIn("slow");
                    wonGames += 1;
                    averagePerGame = triesTotal / wonGames;
                    function restartGame() {
                        $("#content2").fadeOut(1500, function() { memoryGame(); });
                    }
                }

            } else {
                function hideUnmatchedImages() {
                    var liOne = document.getElementById(imageIDs[0]);
                    var liTwo = document.getElementById(imageIDs[1]);
                    $(liOne).children("img").fadeOut("slow", function() {
                        $(liOne).children("img").remove();
                    });
                    $(liTwo).children("img").fadeOut("slow", function() {
                        $(liTwo).children("img").remove();
                    });
                    imageValues = [];
                    imageIDs = [];
                }
                setTimeout(hideUnmatchedImages, 1000);
            }
        }
    }
}

    // console.log(li + " " + value);
    // $(li).children("img").fadeIn("fast");

    // function showImage(image, number) {
    //     if (image.src == "" && imageValues.length < 2) {
    //         image.src = number; // Image = imagesArray[i].
    //         if (imageValues.length == 0) {
    //             imageValues.push(number); // Push imagesArray[i] into imageValues.
    //             imageIDs.push(image.id); // Push images id into imageIDs.
    //         } else if (imageValues.length == 1) {
    //             imageValues.push(number); // Push imagesArray[i] into imageValues.
    //             imageIDs.push(image.id); // Push images id into imageIDs.
    //             if (imageValues[0] == imageValues[1]) {
    //                 clearedImages += 2;
    //                 imageValues = [];
    //                 imageIDs = [];

    //                 if (clearedImages == imagesArray.length) {
    //                     console.log("Woopwoop!");
    //                     // GVEWHUIGOWENGOIBWNEOBINBIO
    //                 } else {
    //                     function hideUnmatchedImages() {
    //                         $(imageIDs[0]).children("img").fadeOut("slow");
    //                         $(imageIDs[1]).children("img").fadeOut("slow");
    //                         // document.getElementById(memory_tile_ids[0]
    //                         imageValues = [];
    //                         imageIDs = [];
    //                     }
    //                     setTimeout(hideUnmatchedImages, 1000);
    //                 }
    //             }
    //         }
    //     }
    // }





    // $("ol li").click(function() {
    //     if ((count < 2) && ($(this).children("img").hasClass("face-up")) === false) {
    //         // Guessing count + 1, memoryLi-child not hidden and gets face-up class added.
    //         count++;
    //         $(this).children("img").fadeIn("fast");
    //         $(this).children("img").addClass("face-up");
    //
    //         // Guess #1
    //         if (count === 1 ) {
    //             guess1 = $(this).children("img").attr("src"); // get memoryLi-child #1 image name.
    //         }
    //         // Guess #2
    //         else {
    //             guess2 = $(this).children("img").attr("src"); // get memoryLi-childs #2 image name.
    //
    //             // Second guess, check for a match. If that is the scenario, add class match to memoryLi-child.
    //             if (guess1 === guess2) {
    //                 console.log("Correct!");
    //                 $("ol li").children("img[src='" + guess2 + "']").addClass("match");
    //             }
    //             // If not a match, image gets hidden and class face-up is removed.
    //             else {
    //                 console.log("Miss!");
    //                 setTimeout(function() {
    //                     $("ol li").children("img").not(".match").fadeOut("slow");
    //                     $("img").not(".match").removeClass("face-up");
    //                 }, 1000);
    //             }
    //             // Reset counter.
    //             count = 0;
    //         }
    //     }
    // });


//
// $("ol li").click(function() {
//     if ((count < 2) && ($(this).children("img").hasClass("face-up")) === false) {
//         // Guessing count + 1, memoryLi-child not hidden and gets face-up class added.
//         count++;
//         $(this).children("img").fadeIn("fast");
//         $(this).children("img").addClass("face-up");
//
//         // Guess #1
//         if (count === 1 ) {
//             guess1 = $(this).children("img").attr("src"); // get memoryLi-child #1 image name.
//         }
//         // Guess #2
//         else {
//             guess2 = $(this).children("img").attr("src"); // get memoryLi-childs #2 image name.
//
//             // Second guess, check for a match. If that is the scenario, add class match to memoryLi-child.
//             if (guess1 === guess2) {
//                 console.log("Correct!");
//                 $("ol li").children("img[src='" + guess2 + "']").addClass("match");
//             }
//             // If not a match, image gets hidden and class face-up is removed.
//             else {
//                 console.log("Miss!");
//                 setTimeout(function() {
//                     $("ol li").children("img").not(".match").fadeOut("slow");
//                     $("img").not(".match").removeClass("face-up");
//                 }, 1000);
//             }
//             // Reset counter.
//             count = 0;
//         }
//     }
// });


    //
    //
