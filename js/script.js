/*$(document).ready(function(){
    setInterval(slide, 2500);
    let i = 3;
    function slide(){
        //alert("ddd");
        if(i==0){
            $(".imgslide a").stop().fadeIn(1500);
            i=3;
        }
        else{
            $(".imgslide a").eq(i).stop().fadeOut(1500);
            i--;
        }
    }
});