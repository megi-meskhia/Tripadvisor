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




// /////////// footer ////////

$(document).ready(function(){
  $("#footerMore").click(function(){
    $("#footerText").show();
    $("#footerMore").hide();
  });
});

  