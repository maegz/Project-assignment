
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

    // All the HTML for each tab-content.
    function createTabContent(contentPage) {
        switch (contentPage) {
            case "content1":
            content1.innerHTML =
            "<h2>About the Project</h2>" +
            "<p>The projects purpose is to show how much we've accually understood" +
            "and learned during the past few weeks.<br>" +
            "It will contain some Bootstrap and jQuery-goodies and" +
            "a smaller JavaScript-written game to keep you occupied." +
            "Also a CSS-switcher, to show my desires and love of style." +
            "Last but not the least I'll link all my other projects" +
            "and pages." +
            "</p>";
            break;
            case "content2":
            content2.innerHTML =
            "<h2>Game Time!</h2>" +
            "<p>!!!!!!GAME HERE!!!!!</p>";
            break;
            case "content3":
            content3.innerHTML =
            "<h2>Switch the Layout</h2>" +
            "<p>!!!!!!CSS-SWITCHER HERE!!!!!!!</p>";
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

            default: contentPage.innerHTML = "";
        }
    };

    // Create all HTML for specific tablink-click.
    createTabContent(contentPage);

    // Function in the jQuery.js-file to fade in the content to the page.
    fadeInContent();

    // Display the id of the tab-content that is linked to the clicked tab-link.
    document.getElementById(contentPage).style.display = "block";

    // Make clicked tab-link active.
    eventHandler.currentTarget.className += " active";

};
