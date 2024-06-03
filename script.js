$(document).ready(function(){
    $("#light-mode-btn").click(function(){
        $("main").css("background-color", "white");
        $(".containerMain").css("background-color", "white");
        $(".containerMain").css("color", "black");
        // $(".bg-dark").attr("class", "bg-white text-dark");
        $(".bg-dark").removeClass("bg-dark text-white").addClass("bg-white text-dark");
        $("#footer").css("background-color", "#0b5ed7");
        $("#footer").css("color", "white");
    });
    $("#dark-mode-btn").click(function(){
        $("main").css("background-color", "black");
        $(".containerMain").css("background-color", "black");
        $(".containerMain").css("color", "white");
        // $(".bg-white").attr("class", "bg-dark text-white");
        $(".bg-white").removeClass("bg-white text-dark").addClass("bg-dark text-white");
        $("#footer").css("background-color", "#212529");
        $("#footer").css("color", "white");
    });
});