$(document).ready(function(){

var $photos = $('.photos');
var nbrePhotos = $photos.length - 1;
var i = 0;
var $photoActive = $photos.eq(i);
var chrono = null;

$photos.css('display', 'none');
$photoActive.css('display', 'block');

function defiler(){
    chrono = setTimeout(function(){              

        if(i < nbrePhotos){
        i++;
        }
        else{
        i = 0;
        }

    $photos.css('display', 'none');
    $photoActive = $photos.eq(i);
    $photoActive.fadeIn("slow");
    $photoActive.css('display', 'block');

    defiler();

    }, 3000);
}

$('.next').hover(function(){
    $(this).css("opacity", "0.5");
    }, function(){
    $(this).css("opacity", "1");
});

$('.next').click(function(){

    i++;

    if( i <= nbrePhotos ){
        $photos.css('display', 'none');
        $photoActive = $photos.eq(i);
        $photoActive.fadeIn("slow");
        $photoActive.css('display', 'block');
        clearTimeout(chrono);
        defiler();
    }
    else{
        i = 0;
        $photos.css('display', 'none');
        $photoActive = $photos.eq(i);
        $photoActive.fadeIn("slow");
        $photoActive.css('display', 'block');
        clearTimeout(chrono);
        defiler();
    }

});

$('.prev').hover(function(){
    $(this).css("opacity", "0.5");
    }, function(){
    $(this).css("opacity", "1");
});

$('.prev').click(function(){

    i--;

    if( i >= 0 ){
        $photos.css('display', 'none');
        $photoActive = $photos.eq(i);
        $photoActive.fadeIn("slow");
        $photoActive.css('display', 'block');
        clearTimeout(chrono);
        defiler();
    }
    else{
        i = nbrePhotos;
        $photos.css('display', 'none');
        $photoActive = $photos.eq(i);
        $photoActive.fadeIn("slow");
        $photoActive.css('display', 'block');
        clearTimeout(chrono);
        defiler();
    }

});

defiler();

});