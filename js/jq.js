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
      $("#hide").show();
        $("#more").replaceWith( $( "#less" ));
        $("#less").show();     
    });
  });

  $(document).ready(function(){
    $("#less").click(function(){
      $("#hide").hide();
      $("#less").replaceWith( $( "#more" ));      
    });
  });

  $(document).ready(function(){
    $("#showMore").click(function(){
      $("#hideBox").show();
        $("#showMore").replaceWith( $( "#showLess" ));
        $("#showLess").show();     
    });
  });

  $(document).ready(function(){
    $("#showLess").click(function(){
      $("#hideBox").hide();
      $("#showLess").replaceWith( $( "#showMore" ));      
    });
  });


// /////////// footer ////////

$(document).ready(function(){
  $("#footerMore").click(function(){
    $("#footerText").show();
    $("#footerMore").hide();
  });
});

  