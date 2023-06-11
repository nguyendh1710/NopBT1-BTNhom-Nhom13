
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
    document.getElementById('back-to-top').style.display ='block'
    document.getElementById("brand").style.color = "#3F3A64";
}
else {
    document.getElementById("cuon").style.backgroundColor = " transparent ";
    
    document.getElementById('back-to-top').style.display ='none'

    document.getElementById("brand").style.color = "white";
}



}

window.onscroll = function scrolls() {scrollFunction()};







