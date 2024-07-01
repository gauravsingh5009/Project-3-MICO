$(function(){
    $(".toggle").click(function(){
        $(this).toggleClass("active");
        $(".navigation").slideToggle()
    });
    if(screen.width<=980){
        $(".navigation ul a").click(function(){
            $(".navigation").slideUp();
            $(".toggle").removeClass("active");
        })
    }
});