$(document).ready(function(){
    $("#visible").click(function(){
      $("#guests").show();
    });
  });

$(document).ready(function(){
    $("#close").click(function(){
      $("#guests").hide();
    });
  });

  // //////////// range   /////////

function rangeSlide(value) {
    document.getElementById('from').innerHTML = value;
}

function rangeSlider(value) {
    document.getElementById('mil').innerHTML = value;
}

// /////////////////// 

  $(document).ready(function(){
    $("#more").click(function(){
      $("#hide").toggle();   
    });
  });


  $(document).ready(function(){
    $("#showMore").click(function(){
      $("#hideBox").toggle();    
    });
  });

  // /////// offcanvas /////////

  $(document).ready(function(){
    $("#mobMenu").click(function(){
      $("#offcanvas").show();
    });
  });

  $(document).ready(function(){
    $("#closed").click(function(){
      $("#offcanvas").hide();
    });
  });

  $(document).ready(function(){
    $("#mobS").click(function(){
      $("#mobSearch").show();
    });
  });

  $(document).ready(function(){
    $("#arrow").click(function(){
      $("#mobSearch").hide();
    });
  });


// /////////// footer ////////

$(document).ready(function(){
  $("#footerMore").click(function(){
    $("#footerText").show();
    $("#footerMore").hide();
  });
});


// /////////// guests /////////////

$(document).ready(function(){

  $('[data-quantity="plus"]').click(function(e){
      e.preventDefault();
      fieldName = $(this).attr('data-field');

      var currentVal = parseInt($('input[name='+fieldName+']').val());

      if (!isNaN(currentVal)) {
          $('input[name='+fieldName+']').val(currentVal + 1);
      } else {
          $('input[name='+fieldName+']').val(0);
      }
  });

  $('[data-quantity="minus"]').click(function(e) {
      e.preventDefault();
      fieldName = $(this).attr('data-field');

      var currentVal = parseInt($('input[name='+fieldName+']').val());

      if (!isNaN(currentVal) && currentVal > 0) {
          $('input[name='+fieldName+']').val(currentVal - 1);
      } else {
          $('input[name='+fieldName+']').val(0);
      }
  });
});

