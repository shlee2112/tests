$("form").submit(function( event ) {
    var valid = true;
    if (! $('input[name=standing]:checked').val()){
        valid = false;
    }
    if (! $('input[name=fruit]:checked').val()){
        valid = false
      }
    if (!valid){
        alert("Make a selection from both lists!")
        event.preventDefault();
    }
});