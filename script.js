$(document).ready(function () {

    // Get current date
    let today = new Date();
    let monthNum = today.getMonth(); // 0–11
    let year = today.getFullYear();

    // Arrays (example – yours may already be provided)
    let months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

    // Get month name
    let monthName = months[monthNum];

    // December message
    if (monthNum === 11) {
        $("h2").after("<h3>Happy Holidays!</h3>");
    }

    // Update month heading
    $("#month").text("Tips for " + monthName);

    // Add year to copyright
    $("p.copyright").append(" " + year);

    // Specials array (assumes already given)
    $("#specials").html(specials[monthNum]);

    // Season variables
    let season, bgImage, seasonColor, seasonIndex;

    switch (monthNum) {
        case 11:
        case 0:
        case 1:
            season = "Winter";
            bgImage = "winterbg.jpg";
            seasonColor = "#00f";
            seasonIndex = 0;
            break;

        case 2:
        case 3:
        case 4:
            season = "Spring";
            bgImage = "springbg.jpg";
            seasonColor = "#d7d";
            seasonIndex = 1;
            break;

        case 5:
        case 6:
        case 7:
            season = "Summer";
            bgImage = "summerbg.jpg";
            seasonColor = "#006400";
            seasonIndex = 2;
            break;

        case 8:
        case 9:
        case 10:
            season = "Fall";
            bgImage = "fallbg.jpg";
            seasonColor = "#930";
            seasonIndex = 3;
            break;
    }

    // Change background image
    $("body").css("background-image", "url(images/" + bgImage + ")");

    // Change tips section
    $("#seasontips").html(tips[seasonIndex]);

    // Change heading colors
    $("strong, h1, h2, h3").css("color", seasonColor);

    // Add class to specials
    $("#specials").addClass(season);

});