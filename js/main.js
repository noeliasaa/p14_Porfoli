$(document).ready(function(){
    $("#nav2").click(function(){
        $('#info').css("visibility","visible");
    });
    $("#tanca").click(function(){
        $('#info').css("visibility","hidden");
    });

    $("#imagen1-1").hover(function(){
        $('#img1-1').css("visibility","visible");
        $('#texto1-1').css("visibility","hidden");
        $(this).css("visibility","hidden");
    }, function(){
        $('#img1-1').css("visibility","hidden");
        $('#texto1-1').css("visibility","visible");
        $(this).css("visibility","visible");
    });
    
    $("#imagen1-2").hover(function(){
        $('#img1-2').css("visibility","visible");
        $('#texto1-2').css("visibility","hidden");
        $(this).css("visibility","hidden");
    }, function(){
        $('#img1-2').css("visibility","hidden");
        $('#texto1-2').css("visibility","visible");
        $(this).css("visibility","visible");
    });

    $("#imagen1-3").hover(function(){
        $('#img1-3').css("visibility","visible");
        $('#texto1-3').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img1-3').css("visibility","hidden");
        $('#texto1-3').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen1-4").hover(function(){
        $('#img1-4').css("visibility","visible");
        $('#texto1-4').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img1-4').css("visibility","hidden");
        $('#texto1-4').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen2-1").hover(function(){
        $('#img2-1').css("visibility","visible");
        $('#texto2-1').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img2-1').css("visibility","hidden");
        $('#texto2-1').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen2-2").hover(function(){
        $('#img2-2').css("visibility","visible");
        $('#texto2-2').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img2-2').css("visibility","hidden");
        $('#texto2-2').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen2-3").hover(function(){
        $('#img2-3').css("visibility","visible");
        $('#texto2-3').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img2-3').css("visibility","hidden");
        $('#texto2-3').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen2-4").hover(function(){
        $('#img2-4').css("visibility","visible");
        $('#texto2-4').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img2-4').css("visibility","hidden");
        $('#texto2-4').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen3-1").hover(function(){
        $('#img3-1').css("visibility","visible");
        $('#texto3-1').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img3-1').css("visibility","hidden");
        $('#texto3-1').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen3-2").hover(function(){
        $('#img3-2').css("visibility","visible");
        $('#texto3-2').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img3-2').css("visibility","hidden");
        $('#texto3-2').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen3-3").hover(function(){
        $('#img3-3').css("visibility","visible");
        $('#texto3-3').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img3-3').css("visibility","hidden");
        $('#texto3-3').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen3-4").hover(function(){
        $('#img3-4').css("visibility","visible");
        $('#texto3-4').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img3-4').css("visibility","hidden");
        $('#texto3-4').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen4-1").hover(function(){
        $('#img4-1').css("visibility","visible");
        $('#texto4-1').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img4-1').css("visibility","hidden");
        $('#texto4-1').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen4-2").hover(function(){
        $('#img4-2').css("visibility","visible");
        $('#texto4-2').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img4-2').css("visibility","hidden");
        $('#texto4-2').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen4-3").hover(function(){
        $('#img4-3').css("visibility","visible");
        $('#texto4-3').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img4-3').css("visibility","hidden");
        $('#texto4-3').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    $("#imagen4-4").hover(function(){
        $('#img4-4').css("visibility","visible");
        $('#texto4-4').css("visibility","hidden");
        $(this).css("background-color","white");
    }, function(){
        $('#img4-4').css("visibility","hidden");
        $('#texto4-4').css("visibility","visible");
        $(this).css("background-color","var(--groc)");
    });

    var cursor = document.querySelector(".cursor");
    document.addEventListener('mousemove', e=>{
        cursor.setAttribute("style", "top:" + (e.pageY -10) +"px; left:" + (e.pageX-10)+"px");
        
    })  
    

});

