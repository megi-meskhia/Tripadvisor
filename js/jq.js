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

  