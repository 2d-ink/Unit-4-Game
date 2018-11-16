var random_result;
var lost = 0;
var win = 0;
var previous = 0;

var startGame = function () {

    $(".crystals").empty();

    var images = [ 
        'https://www.thoughtco.com/thmb/CMQsdwgP5AuwIhtrcW-zEZUPqWM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/close-up-of-crystal-stone-glowing-in-darkroom-583919173-56f28e5d3df78ce5f83d7284.jpg',
        'https://cdn.shopify.com/s/files/1/1911/3007/products/Adundance-Quartz-Crystal-Candle_4816eb0f-4728-422e-bdb3-b5f0b9b2731d.jpg?v=1536772508',
        'https://www.holywellswimmingclub.co.uk/wp-content/uploads/2017/03/crystal-2.jpg',
        'https://battlecampbible.cdn.bcrank.us/181/img/cs-crystal.png',

    ];

    random_result = Math.floor(Math.random() * 69) + 30;


    $("#result").html('Random Number: ' + random_result);

    for (var i = 0; i < 4; i++) {

        var random = Math.floor(Math.random() * 11) + 1;
        // console.log(random);

        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
            
        });
        crystal.css({
                "background-image":"url('" + images [i] + "')",
                "background-size":"cover"

        })
        $(".crystals").append(crystal);

    }
    $("#previous").html("Total Score: " + previous);
}


startGame();



$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;

    $("#previous").html("Total Score: " + previous);

    if (previous > random_result) {
        lost++;
        $("#lost").html("You Lost: "+ lost);
        previous = 0;
        startGame();
    } else if (previous === random_result) {
        win++;
        $("#win").html("You Win: " + win);
        previous = 0;
        startGame();
    }

});