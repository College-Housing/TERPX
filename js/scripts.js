/* Template: Juno - Multipurpose Landing Page Pack
   Author: InovatikThemes
   Created: Mar 2019
   Description: Custom JS file
*/


(function($) {
    "use strict";

	/* Preloader */
	$(window).on('load', function() {
		var preloaderFadeOutTime = 500;
		function hidePreloader() {
			var preloader = $('.spinner-wrapper');
			setTimeout(function() {
				preloader.fadeOut(preloaderFadeOutTime);
			}, 500);
		}
		hidePreloader();
	});




  $(window).scroll(function(e) {

      // add/remove class to navbar when scrolling to hide/show
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          $('.navbar').addClass("navbar-hide");
      } else {
          $('.navbar').removeClass("navbar-hide");
      }

  });
    // closes the responsive menu on menu item click
    $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });


    /* Move Form Fields Label When User Types */
    // for input and textarea fields
    $("input, textarea").keyup(function(){
		if ($(this).val() != '') {
			$(this).addClass('notEmpty');
		} else {
			$(this).removeClass('notEmpty');
		}
    });


    /* Contact Form */
    $("#contactForm").validator().on("submit", function(event) {
    	if (event.isDefaultPrevented()) {
            // handle the invalid form...
            cformError();
            csubmitMSG(false, "Please fill all fields!");
            console.log("error");
        } else {
            // everything looks good!
            event.preventDefault();
            csubmitForm();
            console.log("Success");
        }
    });

    function openInNewTab(url) {
      var win = window.open(url, '_blank');
      win.focus();
    }

    function csubmitForm() {
      const scriptURL = 'https://script.google.com/macros/s/AKfycbyb8_-1BNT8SLLrX6yB6QHI4KpapDMA1xDKcyibSNrSz_yi4w/exec'
      const form = document.forms['submit-to-google-sheet']
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        // .then(response => console.log('Success!', response))
        // .catch(error => console.error('Error!', error.message))

      openInNewTab("https://www.facebook.com/groups/149665539688349/?ref=share");

        $('#myModal').modal('toggle'); //or  $('#IDModal').modal('hide');
        return false;

	 }

    function cformSuccess() {
        $("#contactForm")[0].reset();
        csubmitMSG(true, "Message Submitted!");
        $("input").removeClass('notEmpty'); // resets the field label after submission
        $("textarea").removeClass('notEmpty'); // resets the field label after submission
    }

    function cformError() {
        $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).removeClass();
        });
	}

    function csubmitMSG(valid, msg) {
        if (valid) {
            var msgClasses = "h3 text-center tada animated";
        } else {
            var msgClasses = "h3 text-center";
        }
        $("#cmsgSubmit").removeClass().addClass(msgClasses).text(msg);
    }


	/* Removes Long Focus On Buttons */
	$(".button, a, button").mouseup(function() {
		$(this).blur();
	});

})(jQuery);




function setInputDate(_id){
    var _dat = document.querySelector(_id);
    var hoy = new Date(),
        d = hoy.getDate(),
        m = hoy.getMonth()+1,
        y = hoy.getFullYear(),
        data;

    if(d < 10){
        d = "0"+d;
    };
    if(m < 10){
        m = "0"+m;
    };

    data = y+"-"+m+"-"+d;
    console.log(data);
    _dat.value = data;
};

setInputDate("#submitDate");
