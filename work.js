function inputingFb(){
    var img=document.getElementById("imageFb");
    img.src="img/fb2.png";    
    }
function leavingFb(){
    var img=document.getElementById("imageFb");
    img.src="img/fb.png";    
    }

function inputingIns(){
    var img=document.getElementById("imageIns");
    img.src="img/ins2.png";    
    }
function leavingIns(){
    var img=document.getElementById("imageIns");
    img.src="img/ins.png";    
    }

function inputingFbFt(){
    var img=document.getElementById("imageFbFt");
    img.src="img/fb2.png";    
    }
function leavingFbFt(){
    var img=document.getElementById("imageFbFt");
    img.src="img/fb.png";    
    }

function inputingInsFt(){
    var img=document.getElementById("imageInsFt");
    img.src="img/ins2.png";    
    }
function leavingInsFt(){
    var img=document.getElementById("imageInsFt");
    img.src="img/ins.png";    
    }

$(document).ready(function() {
    $('.WorkTilte h1').slideToggle(function(event) {
        $('.WorkTilte h1').stop().slideToggle(0500);
    });
});


