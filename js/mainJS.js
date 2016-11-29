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
                "<h2>About the Project:</h2>" +
                "<p>The projects purpose is to show how much we've accually understood " +
                    "and learned during the past few weeks.<br>" +
                    "It will contain some Bootstrap and jQuery-goodies and " +
                    "a smaller JavaScript-written game to keep you occupied. " +
                    "Also a CSS-switcher, to show my desires and love of style. " +
                    "Last but not the least I'll link all my other projects " +
                    "and pages." +
                "</p><br>" +
                "<h2>Gradings:<h2>" +
                "<h3>Accepted (G):</h3>" +
                    "<p>- Make project and code all by myself.</p>" +
                    "<p>- Be able to tell about the code and why I did it like so.</p>" +
                    "<p>- Have at least one HTML-, CSS- and JS-file.</p>" +
                    "<p>- Use Bootstrap for some part of the design.</p>" +
                    "<p>- Have at least one Media Query.</p>" +
                    "<p>- Add design with my own CSS extended over the Bootstrap-CSS.</p>" +
                    "<p>- Use jQuery for two different parts. But also at least one DOM-manipultaion with only JS.</p>" +
                    "<p>- Make a styled form.</p>" +
                    "<p>- Use HTML5-tags where it's semanticly correct to do so.</p>" +
                    "<p>- Have a proper, neat readme-file on GitHub, explaining that it's a " +
                    "schoolproject, what course it is, wich school, technology usage, " +
                    "maker of the project and a link to my LinkedIn.</p>" +
                    "<p>- Have a page that looks good on at least two screen-sizes: mobile and computer.</p>" +
                    "<p>- Have a working menu that fits for the screen-size.</p>" +
                "<h3>More than accepted (VG):</h3>" +
                    "<p>- Make everything in Accepted (G).</p>" +
                    "<p>- Make the page well thought through with the design. "+
                    "Giving a whole where design and functionality works together.</p>" +
                    "<p>- Manipulate CSS, the DOM and make some effect/animation using jQuery.</p>" +
                    "<p>- Have some form of JS-functionality. jQuery is allowed.</p>" +
                    "<p>- Complete project before deadline.</p>" +
                    "<p>- Have a tidy readme on GitHub, giving a short explanation about the workprocess " +
                    "and tell about what I think I did well, and what I could work on to make better.</p>" +
                    "<p>- Have a page that looks good on at least three screen-sizes.</p>" +
                    "<p>- Make a opposition on another students project and tell about three things that are well done " +
                    "and three things that could be made better.</p>" +
                "<br><br>";
            break;
        case "content2":
            // Memory game. More info in the memory.js-file.
            memoryGame();
            break;
        case "content3":
            // Switch stylesheet through a select element's option elements.
            // When selected, the swapStyleSheet()-function is activated.
            content3.innerHTML =
                "<h2>Switch the Layout:</h2>" +
                "<p>Use the dropdown menu to change stylesheet.</p>" +
                "<select id='selectSheet' onChange='swapStyleSheet()'>" +
                    "<option disabled='disabled' selected='selected'>Choose here:</option>" +
                    "<option value='css/master.css'>Default</option>" +
                    "<option value='css/simplify.css'>Simplify</option>" +
                    "<option value=''>None (may be difficult to orientate)</option>" +
                "</select>";
            break;
        case "content4":
            // Let user see more projects on GitHub.
            content4.innerHTML =
                "<h2>Other Projects:</h2>" +
                "<ul>" +
                    "<li><a href='https://github.com/maegz/Python-project'>Text-based escape game in Python.</a></li>" +
                    "<li><a href='https://github.com/maegz/DPYett'>First 'digital presentation' in this course.</a></li>" +
                    "<li><a href='https://github.com/maegz'>My GitHub-page</a></li>" +
                "</ul>";
                content4.style.textAlign = "center"; // Get everything in content4 centerd.
                var links = content4.children;
                for (var i = 1; i < links.length; i++) {
                    links[i].style.listStyleType = "none"; // Remove list-item marker.
                    links[i].style.paddingRight = "35px"; // Pad text to right, so it looks more centered.
                }
            break;
        case "content5":
            content5.innerHTML =
                "<h2>About Me:</h2>" +
                "<p>Welcome to the project site! I (the creator) am Max(imilan) Sundberg.</p>" +
                "<p>I live in Uppsala, Sweden, and have been since I was born. Except when I went " +
                "to Oslo, Norway to get some work experience and a little bit of easy cash.</p>" +
                "<p>I'm a certified cook and have always been interested in cooking. It probalby comes " +
                "from my father, since he's been in the kitchen, doing 12 hour meals as long as I can remember. " +
                "Cooking is a passion, and I found out that working with it was ungrateful and sucked out all the " +
                "inspiration. So I've descided to keep on cooking, but only for friends and family.</p>" +
                "<p>Computers have always been interesting for me, but the programming part kind of spinned forward " +
                "recently. Probably because of plenty of friends that work with it.</p>" +
                "<p>Although my biggest passion is music! I've been playing drums since I was 11, and it always " +
                "makes me smile!</p>" +
                "<p>But when I don't work, cook or play the drums I prefer to travel. " +
                "And when I say travel I mean it. Into the culture and explore, no darn coconut-drinks by the beach!</p><br>" +
                "<p>Well.. that's a little something-something about me. Cheers!</p><br>";
            break;

        default: content.innerHTML = "";
    }
};

function swapStyleSheet() {
    var select = document.getElementById("selectSheet");
    // Get the stylesheet in index.html and switch the href to the selected value in the select-element.
    document.getElementById("pagestyle").setAttribute("href", select.value);
};
