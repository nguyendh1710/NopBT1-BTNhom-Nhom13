
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
 
    //them
    function theme(){

        let x = document.getElementById("myBody").classList; 
        let y = x.toggle("dark");
    
        console.log(y);
        
       
    
        
     }
    //   cuon chuot doi mau header, an hien mau chu, an hien back-to-top

    

function scrollFunction(){
        
    let m = document.documentElement.scrollTop;
    

 
if (m > 2) {
    document.getElementById("cuon").style.backgroundColor = "white";
    document.getElementById('back-to-top').style.display ='block';
    document.getElementById("brand").style.color = "#3F3A64";
    document.getElementById("home").style.color = "green";
}
else {
    document.getElementById("cuon").style.backgroundColor = " transparent ";
    
    document.getElementById('back-to-top').style.display ='none';

    document.getElementById("brand").style.color = "white";
    document.getElementById("home").style.color = "#BDC0C4";
}



}

window.onscroll = function scrolls() {scrollFunction()};





    
    
    
    