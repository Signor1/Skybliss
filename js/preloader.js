//code for hiding the preloader and displaying the main content on windows load
$(window).load(function(){
    $(".preloader-wrap").fadeOut("slow");
    $(".general").fadeIn("slow");
});