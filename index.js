
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop()){
                $('#back_to_top').fadeIn();

            }else{
                $('#back_to_top').fadeOut();
            }

        });
        $('#back_to_top').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 800);
        });    
    
    });   
 