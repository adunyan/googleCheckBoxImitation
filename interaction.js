$(function(){
  $(".checkbox").each(function(){
    $(this).on("click", function(){
      console.log("checkbox is clicked");
      $(this).toggleClass("ischecked");
      $(this).addClass("isActive");

      console.log("Remvoe isCheckedNext");

      if($(this).hasClass("isCheckedNext")){
        $(this).removeClass("isCheckedNext");
      }

      if($(this).hasClass("areaChecked")){
        const self = $(this);
        setTimeout(function(){
          console.log("Remove areaChecked");
          self.removeClass("areaChecked");
        }, 200);
      }
    });
  });

  $("._0 .checkboxInk").each(function(){
    $(this).on('transitionend webkitTransitionEnd oTransitionEnd mozTransitionEnd animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd',function(){
      if($(this).parent().hasClass("isActive")){
        console.log("checkboxInk animated");
        $(this).parent().removeClass("isActive");
        const self = $(this);
        if(!self.parent().hasClass("areaChecked")){
          console.log("Add areaChecked");
          self.parent().addClass("areaChecked");

          console.log("Add isCheckedNext");
          self.parent().addClass("isCheckedNext");
        }
      }
    });
  });

  $(".slow .checkboxInk").each(function(){
    $(this).on('transitionend webkitTransitionEnd oTransitionEnd mozTransitionEnd animationend webkitAnimationEnd oAnimationEnd mozAnimationEnd',function(){
      if($(this).parent().hasClass("isActive")){
        console.log("checkboxInk animated");
        $(this).parent().removeClass("isActive");
        const self = $(this);
        if(self.parent().hasClass("areaChecked")){
          setTimeout(function(){
            console.log("Remove areaChecked");
            self.parent().removeClass("areaChecked");

          }, 2000);
        }else{
          console.log("Add areaChecked");
          self.parent().addClass("areaChecked");

          console.log("Add isCheckedNext");
          self.parent().addClass("isCheckedNext");
        }
      }
    });
  });
});
