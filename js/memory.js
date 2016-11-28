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
                    function restartGame() {
                        $("#content2").fadeOut(1500, function() { memoryGame(); });
                    }
                    wonGames += 1;
                    averagePerGame = triesTotal / wonGames;
                    $("#content2").fadeIn("slow");
                    $("#content2").html("<h1 style='text-align: center;'>You did it!</h1>");
                    restartGame();
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
