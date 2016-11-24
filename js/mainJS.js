// Function for clicking tab-link and showing/hiding tab-content.
function switchContent(eventHandler, contentPage) {
    var tabContent  = document.getElementsByClassName("tabcontent"),
        tabLink     = document.getElementsByClassName("tablink"),
        i;

    // Make all the tab-contents display none (a.k.a. hide them).
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Make all the tab-links non-active.
    for (var i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }

    createTabContent(contentPage); // Create all HTML for specific tablink-click.

    fadeInContent(); // Function in the jQuery.js-file to fade in the content to the page.

    document.getElementById(contentPage).style.display = "block"; // Display the id of the tab-content that is linked to the clicked tab-link.

    eventHandler.currentTarget.className += " active"; // Make clicked tab-link active.
};

// All the content for each tab-content.
function createTabContent(content) {
    switch (content) {
        case "content1":
            // Just a description of the assignment, with grade-chart.
            content1.innerHTML =
                "<h2>About the Project</h2>" +
                "<p>The projects purpose is to show how much we've accually understood " +
                    "and learned during the past few weeks.<br>" +
                    "It will contain some Bootstrap and jQuery-goodies and " +
                    "a smaller JavaScript-written game to keep you occupied. " +
                    "Also a CSS-switcher, to show my desires and love of style. " +
                    "Last but not the least I'll link all my other projects " +
                    "and pages." +
                "</p>";
            break;
        case "content2":
            // Memory game. More info in the memory.js-file.
            memoryGame();
            break;
        case "content3":
            // Switch stylesheet through a select element's option elements.
            // When selected, the swapStyleSheet()-function is activated.
            content3.innerHTML =
                "<h2>Switch the Layout</h2>" +
                "<select id='selectSheet' onChange='swapStyleSheet()'>" +
                    "<option disabled='disabled' selected='selected'>Choose here:</option>" +
                    "<option value='css/master.css'>Default</option>" +
                    "<option value='css/simplify.css'>Simplify</option>" +
                    "<option value=''>None (may be difficult to orientate)</option>" +
                "</select>";
            break;
        case "content4":
            content4.innerHTML =
                "<h2>Other Projects</h2>" +
                "<p>!!!!!!!!!GITHUB-LINKS HERE!!!!!!!</p>";
            break;
        case "content5":
            content5.innerHTML =
                "<h2>About Me</h2>" +
                "<p>!!!!!!ME HERE!!!!!</p>";
            break;

        default: content.innerHTML = "";
    }
};

function swapStyleSheet() {
    var select = document.getElementById("selectSheet");
    // Get the stylesheet in index.html and switch the href to the selected value in the select-element.
    document.getElementById("pagestyle").setAttribute("href", select.value);
};
