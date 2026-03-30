// MONTHS ARRAY
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// TIPS ARRAY (season-based: 0=winter, 1=spring, 2=summer, 3=fall)
var tips = [
"<p>Those of us who live through our gardens know how bittersweet it can be to see the lush green growth of summer disappear during the cold months of winter. Hellebores are the perfect winter garden companion to plant with another winter blooming favorite, Camellias.</p><p>Visit us this season for the exciting selection of both of these cool season beauties and enjoy them in your garden for years to come.</p>",

"<p>Spring is a time of renewal for both the gardener and the garden. Suggestions for this month: </p><ul><li>Transplants of tomatoes should be planted by March 15th</li><li>Fertilize your lawn after warm-season grasses are growing and have been mowed 2-3 times.</li><li>Release beneficial nematodes to control ticks, fleas, chiggers, and fire ants.</li></ul>",

"<p><strong>Summer is the TIME</strong></p><ul><li>Select rose bushes from the huge selection of varieties we offer.</li><li>Transplants of peppers, eggplant and tender herbs can be planted.</li><li>Plant fruit trees, shrubs, roses, perennials, herbs and colorful annuals like geraniums and snapdragons.</li></ul>",

"<p>Fall is the best time to plant in north Texas. Milder temperatures and increased rainfall mean that new plants—especially trees and shrubs—can establish root systems much more easily than during hot summer months.</p><p>Also with the changing season comes the changing of our color plantings: petunias, dianthus, ornamental kale and mums bringing cheerful color ahead of winter’s trusted and long-lasting pansies and violas.</p>"
];

// SPECIALS ARRAY (month-based 0–11)
var specials = [
"<p>Don't forget our feathered friends!</p><p>All bird feeders and birdseed are 50% off this January.</p>",
"<p>Roses for your sweetheart!</p><p>All roses are $24.99 this February.</p>",
"<p>Add some color to your garden!</p><p>This March all petunias are $10.99 for a flat of 16.</p>",
"<p>Time to fertilize!</p><p>All fertilizers 20% off.</p>",
"<p>Geraniums: 6 inch pot is only $6.99 all May!</p>",
"<p>These can take the heat!</p><p>Zinnias: $1.00 each for a 4 inch pot.</p>",
"<p><strong>BOGO</strong></p><p>All containers, buy one, get one 1/2 off</p>",
"<p>Cacti and succulents, 25% off</p>",
"<p>Get ready for fall!</p><p>Mums: 6 inch pot $5.99</p>",
"<p><strong>Jack-O-Lanterns</strong></p><p>Pumpkins: large $8.99, small $5.99</p>",
"<p>Trees and shrubs: 1/2 price</p>",
"<p>Christmas trees available now!</p>"
];


// MAIN CODE
$(document).ready(function () {

    let today = new Date();
    let monthNum = today.getMonth();
    let year = today.getFullYear();

    let monthName = months[monthNum];

    // December greeting
    if (monthNum === 11) {
        $("h2").after("<h3>Happy Holidays!</h3>");
    }

    // Month title
    $("#month").text("Tips for " + monthName);

    // Footer year
    $(".copyright").append(" " + year);

    // Show correct monthly special
    $("#specials").html(specials[monthNum]);

    // Determine season
    let season, bgImage, color, seasonIndex;

    switch (monthNum) {
        case 11:
        case 0:
        case 1:
            season = "winter";
            bgImage = "winterbg.jpg";
            color = "#00f";
            seasonIndex = 0;
            break;

        case 2:
        case 3:
        case 4:
            season = "spring";
            bgImage = "springbg.jpg";
            color = "#d7d";
            seasonIndex = 1;
            break;

        case 5:
        case 6:
        case 7:
            season = "summer";
            bgImage = "summerbg.jpg";
            color = "#006400";
            seasonIndex = 2;
            break;

        case 8:
        case 9:
        case 10:
            season = "fall";
            bgImage = "fallbg.jpg";
            color = "#930";
            seasonIndex = 3;
            break;
    }

    // Apply seasonal tips
    $("#seasontips").html(tips[seasonIndex]);

    // Background
    $("body").css("background-image", "url(images/" + bgImage + ")");
    $("body").css("background-size", "cover");

    // Colors
    $("h1, h2, h3, strong").css("color", color);

    // Add season class
    $("#specials").addClass(season);

});