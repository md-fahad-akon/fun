$(document).ready(function(){
    $(".face").hover(function(){
        $(".namecard").css("padding","13px");
        $(".namecard").css("height","285px");
        $(".hand_r").css("left","0px");
        $(".hand_l").css("left","74px");
        $(".hand_r").css("transform","rotate(-45deg)");
        $(".hand_l").css("transform","rotate(45deg)");
        $(".eyeball").css("border","solid 15px white")
        $(".eyeball").css("transform","scale(1.1)")
        }, function(){
        $(".namecard").css("padding","0px");
        $(".namecard").css("height","0px");
        $(".hand_r").css("left","74px");
        $(".hand_l").css("left","0px");
        $(".hand_r").css("transform","rotate(0deg)");
        $(".hand_l").css("transform","rotate(0deg)");
        $(".eyeball").css("border","solid 10px white")
        $(".eyeball").css("transform","scale(1)")
        
    });
});