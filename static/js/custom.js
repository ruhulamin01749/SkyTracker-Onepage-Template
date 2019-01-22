

(function($){
	"use strict";
	var AMIGO = {};
	var plugin_track = 'static/plugin/';
	
	$.fn.exists = function () {
        return this.length > 0;
    };

	/* ---------------------------------------------- /*
	 * Pre load
	/* ---------------------------------------------- */
	AMIGO.PreLoad = function() {
		document.getElementById("loading").style.display = "none"; 
	}

	/*--------------------
        * Header Class
    ----------------------*/
    AMIGO.HeaderSticky = function(){
        $(".navbar-toggler").on("click", function(a) {
            a.preventDefault(), $("header").addClass("fixed-header")
        });
    }

    /*--------------------
        * Menu Close
    ----------------------*/
    AMIGO.MenuClose = function(){
      $('.navbar-nav .nav-link').on('click', function() {
       var toggle = $('.navbar-toggler').is(':visible');
       if (toggle) {
         $('.navbar-collapse').collapse('hide');
       }
      });
    }

    /*--------------------
        * Custom Menu
    ----------------------*/
    AMIGO.MenuCloseCutome = function(){
      $(".toggler-menu").on('click', function(){
        $(this).toggleClass('open');
        $('.nav_menu_toggle').stop().toggleClass('menu-open');
        $('.nav_menu_toggle .navbar-nav').toggleClass('nav-open');
      });
      $('.nav_menu_toggle .nav-link').on('click', function() {
       var toggle = $('.toggler-menu').is(':visible');
       if (toggle) {
        $('.toggler-menu').removeClass('open');
         $('.nav_menu_toggle').removeClass('menu-open');
         $('.nav_menu_toggle .navbar-nav').toggleClass('nav-open');
       }
      });
    }

	/* ---------------------------------------------- /*
	 * Header Height
	/* ---------------------------------------------- */
	AMIGO.HeaderHeight = function(){
		var HHeight = $('.header-height .fixed-header-bar').height()
	    $('header').height(HHeight);	
	}

	/* ---------------------------------------------- /*
	 * Header Fixed
	/* ---------------------------------------------- */
	AMIGO.HeaderFixd = function() {
		var HscrollTop  = $(window).scrollTop();  
	    if (HscrollTop >= 100) {
	       $('header').addClass('fixed-header');
	    }
	    else {
	       $('header').removeClass('fixed-header');
	    }
	}

	/*--------------------
        * One Page
    ----------------------*/
    AMIGO.OnePage = function(){
        $('header a[href*="#"]:not([href="#"]), .got-to a[href*="#"]:not([href="#"])').on('click', function() {
            if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') || location.hostname === this.hostname) {
              var target = $(this.hash);
                  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                  if (target.length) {
                    $('html,body').animate({
                      scrollTop: target.offset().top - 70,
                      }, 1000);
                      return false;
                  }
            }
        });
    }


	/* ---------------------------------------------- /*
	 * Search Box
	/* ---------------------------------------------- */
	AMIGO.SearchBox = function() {
		var SearchToggle = $(".search_click")
	 	SearchToggle.on("click", function() {
	        $('.search-box').toggleClass("searh-form-open");
    	});
	}

	/* ---------------------------------------------- /*
	 * Mega Menu
	/* ---------------------------------------------- */

	AMIGO.MegaMenu = function() {
		var mDropdown = $(".m-dropdown-toggle") 
		mDropdown.on("click", function() {
	        $(this).parent().toggleClass("open-menu-parent");
	        $(this).next('ul').toggleClass("open-menu");
	        $(this).toggleClass("open");
	    });
	}

	/*--------------------
        * Progress Bar 
    ----------------------*/
    AMIGO.ProgressBar = function(){
        $(".progress .progress-bar").each(function () {
          var bottom_object = $(this).offset().top + $(this).outerHeight();
          var bottom_window = $(window).scrollTop() + $(window).height();
          var progressWidth = $(this).attr('aria-valuenow') + '%';
          if(bottom_window > bottom_object) {
            $(this).css({
              width : progressWidth
            });
          }
        });
    }

    /* ---------------------------------------------- /*
		* accordion
	/* ---------------------------------------------- */
	AMIGO.Accordion = function() {
		$('.accordion').each(function (i, elem) {
	       	var $elem = $(this),
	           $acpanel = $elem.find(".acrd-group > .acrd-des"),
	           $acsnav =  $elem.find(".acrd-group > .acrd-heading");
	          $acpanel.hide().first().slideDown("easeOutExpo");
	          $acsnav.first().parent().addClass("acrd-active");
	          $acsnav.on('click', function () {
	            if(!$(this).parent().hasClass("acrd-active")){
	              var $this = $(this).next(".acrd-des");
	              $acsnav.parent().removeClass("acrd-active");
	              $(this).parent().addClass("acrd-active");
	              $acpanel.not($this).slideUp("easeInExpo");
	              $(this).next().slideDown("easeOutExpo");
	            }else{
	               $(this).parent().removeClass("acrd-active");
	               $(this).next().slideUp("easeInExpo");
	            }
	            return false;
	        });
	    });
	}

	/* ---------------------------------------------- /*
		* Tabs
	/* ---------------------------------------------- */
	AMIGO.Tabs = function() {
		$(".tabs-nav").on("click", ".tab-item", function(){
			var myID = $(this).attr("id");
			$(this).addClass("active").siblings().removeClass("active");
			$("#" + myID + "-content").fadeIn(700).siblings().hide();
		});
	}

	/*--------------------
    * Counter JS
    ----------------------*/
	 AMIGO.Counter = function () {
	  var counter = jQuery(".counter");
	  var $counter = $('.counter');
	  if(counter.length > 0) {  
	      loadScript(plugin_track + 'counter/jquery.countTo.js', function() {
	        $counter.each(function () {
	         var $elem = $(this);                 
	           $elem.appear(function () {
	             $elem.find('.count').countTo({
	             	speed: 2000,
    				refreshInterval: 10
	             });
	          });                  
	        });
	      });
	    }
	  }


    /*--------------------
    * OwlSlider
    ----------------------*/
    AMIGO.Owl = function () {
      var owlslider = jQuery("div.owl-carousel");
      if(owlslider.length > 0) {  
         loadScript(plugin_track + 'owl-carousel/js/owl.carousel.min.js', function() {
           owlslider.each(function () {
            var $this = $(this),
                $items = ($this.data('items')) ? $this.data('items') : 1,
                $loop = ($this.attr('data-loop')) ? $this.data('loop') : true,
                $navdots = ($this.data('nav-dots')) ? $this.data('nav-dots') : false,
                $navarrow = ($this.data('nav-arrow')) ? $this.data('nav-arrow') : false,
                $autoplay = ($this.attr('data-autoplay')) ? $this.data('autoplay') : true,
                $autospeed = ($this.attr('data-autospeed')) ? $this.data('autospeed') : 5000,
                $smartspeed = ($this.attr('data-smartspeed')) ? $this.data('smartspeed') : 1000,
                $autohgt = ($this.data('autoheight')) ? $this.data('autoheight') : false,
                $space = ($this.attr('data-space')) ? $this.data('space') : 30;    
           
                $(this).owlCarousel({
                    loop: $loop,
                    items: $items,
                    responsive: {
                      0:{items: $this.data('xx-items') ? $this.data('xx-items') : 1},
                      480:{items: $this.data('xs-items') ? $this.data('xs-items') : 1},
                      768:{items: $this.data('sm-items') ? $this.data('sm-items') : 2},
                      980:{items: $this.data('md-items') ? $this.data('md-items') : 3},
                      1200:{items: $items}
                    },
                    dots: $navdots,
                    autoplayTimeout:$autospeed,
                    smartSpeed: $smartspeed,
                    autoHeight:$autohgt,
                    margin:$space,
                    nav: $navarrow,
                    navText:["<i class='ti-arrow-left'></i>","<i class='ti-arrow-right'></i>"],
                    autoplay: $autoplay,
                    autoplayHoverPause: true   
                }); 
           }); 
         });
      }
    }

	/* ---------------------------------------------- /*
     * lightbox gallery
    /* ---------------------------------------------- */
    AMIGO.Gallery = function() {
    	if ($(".lightbox-gallery").exists() || $(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()){
    		loadScript(plugin_track + 'magnific/jquery.magnific-popup.min.js', function() {
    			if($(".lightbox-gallery").exists()){
    				$('.lightbox-gallery').magnificPopup({
				        delegate: 'a.lg-link',
				        type: 'image',
				        tLoading: 'Loading image #%curr%...',
				        mainClass: 'mfp-fade',
				        fixedContentPos: true,
				        closeBtnInside: false,
				        gallery: {
				            enabled: true,
				            navigateByImgClick: true,
				            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
				        }
				    });	
    			}
    			if ($(".popup-youtube, .popup-vimeo, .popup-gmaps").exists()) {
		            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		                  disableOn: 700,
		                  type: 'iframe',
		                  mainClass: 'mfp-fade',
		                  removalDelay: 160,
		                  preloader: false,
		                  fixedContentPos: false
		            });
		        }
    		});
    	}
    }

    /*--------------------
    * Masonry
    ----------------------*/
    AMIGO.masonry = function () {
    	var portfolioWork = $('.portfolio-content');
    	if ($(".portfolio-content").exists()){
    		loadScript(plugin_track + 'isotope/isotope.pkgd.min.js', function() {
    			if ($(".portfolio-content").exists()){
					    $(portfolioWork).isotope({
					      resizable: false,
					      itemSelector: '.portfolio-item',
					      layoutMode: 'masonry',
					      filter: '*'
					    });
					    //Filtering items on portfolio.html
					    var portfolioFilter = $('.filter li');
					    // filter items on button click
					    $(portfolioFilter).on( 'click', function() {
					      var filterValue = $(this).attr('data-filter');
					      portfolioWork.isotope({ filter: filterValue });
					    });
					    //Add/remove class on filter list
					    $(portfolioFilter).on( 'click', function() {
					      $(this).addClass('active').siblings().removeClass('active');
					    });
    			}
    		});
    	}
	}

	/*--------------------
        * Tyoe It
    ----------------------*/
    AMIGO.mTypeIt = function() {
    	if ($(".type_it").exists()){
		loadScript(plugin_track + 'typeit-master/typeit.min.js', function() {
			if ($(".type_it").exists()){
				new TypeIt('.type_it', {
		            speed: 200,
		            loop:true,
		            strings: [
		              'Multi Purpose',
		              'One Page'
		            ],
		            breakLines: false
	        	});	
			}
			});
		}
    }
	

	/* ---------------------------------------------- /*
	 * All Functions
	/* ---------------------------------------------- */
    // loadScript
    var plugin_track = 'static/plugin/';
	var _arr  = {};
	function loadScript(scriptName, callback) {
	    if (!_arr[scriptName]) {
	      _arr[scriptName] = true;
	      var body = document.getElementsByTagName('body')[0];
	      var script = document.createElement('script');
	      script.type = 'text/javascript';
	      script.src = scriptName;
	      // then bind the event to the callback function
	      // there are several events for cross browser compatibility
	      // script.onreadystatechange = callback;
	      script.onload = callback;
	      // fire the loading
	      body.appendChild(script);
	    } else if (callback) {
	      callback();
	    }
	};

	// Window on Load
	$(window).on("load", function(){
		AMIGO.PreLoad();
	});
	// Document on Ready
	$(document).on("ready", function(){
		AMIGO.mTypeIt(),
		AMIGO.HeaderFixd(),
		AMIGO.masonry(),
		AMIGO.OnePage(),
		AMIGO.Tabs(),
		AMIGO.Counter(),
		AMIGO.HeaderHeight(),
		AMIGO.HeaderSticky(),
		AMIGO.MenuClose(),
		AMIGO.MenuCloseCutome(),
		AMIGO.Gallery(),
		AMIGO.Accordion(),
		AMIGO.ProgressBar(),
		AMIGO.MegaMenu(),
		AMIGO.Owl(),
		AMIGO.SearchBox();
		
	});

	// Document on Scrool
	$(window).on("scroll", function(){
		AMIGO.ProgressBar(),
		AMIGO.HeaderFixd();
	});

	// Window on Resize
	$(window).on("resize", function(){
		AMIGO.HeaderHeight();
	});


})(jQuery);