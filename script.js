$(".header").mouseover(function() {
    $("h1").text("click on button");
});

$(".header").click(function() {
    $(".buttonOne").text("go to the header");
    $(".choose").fadeOut("");
});

$(".ButtonOne").click(function() {
    $(".ButtonOne").text("click on the diamonds");
});

$(".Diamond").click(function() {
    $("p").text("click Not Yet!");
    $(".reset").hide ();
});
$(".ButtonTwo").click(function() {
    $("img").attr("src" ,"http://diamondland.be/wp-content/uploads/2015/08/40251962.png");
    $(".reset").hide ();
});

