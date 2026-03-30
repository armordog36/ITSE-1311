$(document).ready(function () {

    // Date
    let today = new Date();
    let monthNum = today.getMonth();
    let year = today.getFullYear();

    // Arrays (you can replace with your provided ones)
    let months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

    let specials = [
        "<p>New Year Deals!</p>",
        "<p>Winter Clearance!</p>",
        "<p>Spring Sale Begins!</p>",
        "<p>Fresh Spring Discounts!</p>",
        "<p>May Specials Available!</p>",
        "<p>Summer Kickoff Deals!</p>",
        "<p>Hot Summer Savings!</p>",
        "<p>Back to School Specials!</p>",
        "<p>Fall Discounts!</p>",
        "<p>October Fest Deals!</p>",
        "<p>Holiday Prep Sales!</p>",
        "<p>Christmas Specials!</p>"
    ];

    let tips = [
        "<p>Stay warm and hydrated during winter.</p>",
        "<p>Enjoy the blooming season and fresh air.</p>",
        "<p>Stay cool and protect yourself from heat.</p>",
        "<p>Prepare for colder weather and enjoy fall vibes.</p>"
    ];

    // Month name
    let monthName = months[monthNum];

    // December greeting
    if (monthNum === 11) {
        $("h2").after("<h3>Happy Holidays!</h3>");
    }

    // Update month heading
    $("#month").text("Tips for " + monthName);

    // Add year
    $(".copyright").append(" " + year);

    // Show specials
    $("#specials").html(specials[monthNum]);

    // Season variables
    let season, bgImage, seasonColor, seasonIndex;

    switch (monthNum) {
        case 11:
        case 0:
        case 1:
            season = "winter";
            bgImage = "winterbg.jpg";
            seasonColor = "#00f";
            seasonIndex = 0;
            break;

        case 2:
        case 3:
        case 4:
            season = "spring";
            bgImage = "springbg.jpg";
            seasonColor = "#d7d";
            seasonIndex = 1;
            break;

        case 5:
        case 6:
        case 7:
            season = "summer";
            bgImage = "summerbg.jpg";
            seasonColor = "#006400";
            seasonIndex = 2;
            break;

        case 8:
        case 9:
        case 10:
            season = "fall";
            bgImage = "fallbg.jpg";
            seasonColor = "#930";
            seasonIndex = 3;
            break;
    }

    // Background image
    $("body").css("background-image", "url(images/" + bgImage + ")");
    $("body").css("background-size", "cover");

    // Seasonal tips
    $("#seasontips").html(tips[seasonIndex]);

    // Change colors
    $("h1, h2, h3, strong").css("color", seasonColor);

    // Add class to specials
    $("#specials").addClass(season);

});