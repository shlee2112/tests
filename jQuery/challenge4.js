$("form").submit(function( event ) {
    var validInput = true;
   
    if ($("#fullname").val().length == 0){
        $("#nameerrormsg").css("display","block"); 
        validInput = false;
    }
    else {
        $("#nameerrormsg").css("display","none"); 
    }

    if ($("#streetaddr").val().length == 0){
        $("#addrerrormsg").css("display","block"); 
        validInput = false;
    }
    else {
        $("#addrerrormsg").css("display","none"); 
    }
    if (!validInput){
        event.preventDefault();
    }
});