(()=>{function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},a(e)}!function(e){"use strict";var t="rtl"===e("body").prop("dir");function o(){var a=e(window).width();e.each(e(".banner_section .carousel-item"),(function(t,o){a>=1200?e(o).data("img-src")&&e(o).css({"background-image":"url("+e(o).data("img-src")+")"}):a>768?e(o).data("tablet-img-src")&&e(o).css({"background-image":"url("+e(o).data("tablet-img-src")+")"}):a<=768&&e(o).data("mobile-img-src")&&e(o).css({"background-image":"url("+e(o).data("mobile-img-src")+")"})}))}e(window).on("load",(function(){setTimeout((function(){e(".preloader").delay(700).fadeOut(700).addClass("loaded")}),800)})),e(".background_bg").each((function(){var t=e(this).attr("data-img-src");"undefined"!==a(t)&&!1!==t&&e(this).css("background-image","url("+t+")")})),e(document).ready((function(){o(),e(window).resize((function(){o()}))})),e((function(){function a(a,t){a.each((function(){var a=e(this),o=a.attr("data-animation"),s=a.attr("data-animation-delay");a.css({"-webkit-animation-delay":s,"-moz-animation-delay":s,"animation-delay":s,opacity:0}),(t||a).waypoint((function(){a.addClass("animated").css("opacity","1"),a.addClass("animated").addClass(o)}),{triggerOnce:!0,offset:"90%"})}))}a(e(".animation")),a(e(".staggered-animation"),e(".staggered-animation-wrap"))})),e(window).on("scroll",(function(){e(window).scrollTop()>=150?e("header.fixed-top").addClass("nav-fixed"):e("header.fixed-top").removeClass("nav-fixed")})),e(document).ready((function(){e(".dropdown-menu a.dropdown-toggler").on("click",(function(){return e(this).next().hasClass("show")||e(this).parents(".dropdown-menu").first().find(".show").removeClass("show"),e(this).next(".dropdown-menu").toggleClass("show"),e(this).parent("li").toggleClass("show"),e(this).parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",(function(){e(".dropdown-menu .show").removeClass("show")})),!1})),e('[data-toggle="dropdown"]').dropdown()}));var s=e(".header_wrap"),n=s.find(".navbar-collapse ul li a.page-scroll");e.each(n,(function(){e(this).on("click",(function(){s.find(".navbar-collapse").collapse("hide"),e("header").removeClass("active")}))})),e(".navbar-toggler").on("click",(function(){e("header").toggleClass("active"),e(".search-overlay").hasClass("open")&&(e(".search-overlay").removeClass("open"),e(".search_trigger").removeClass("open"))})),e(document).ready((function(){!e(".header_wrap").hasClass("fixed-top")||e(".header_wrap").hasClass("transparent_header")||e(".header_wrap").hasClass("no-sticky")||e(".header_wrap").before('<div class="header_sticky_bar d-none"></div>')})),e(window).on("scroll",(function(){e(window).scrollTop()>=150?(e(".header_sticky_bar").removeClass("d-none"),e("header.no-sticky").removeClass("nav-fixed")):e(".header_sticky_bar").addClass("d-none")}));var i=function(){var a=e(".header_wrap").height();e(".header_sticky_bar").css({height:a})};e(window).on("load",(function(){i()})),e(window).on("resize",(function(){i()})),e(".sidetoggle").on("click",(function(){e(this).addClass("open"),e("body").addClass("sidetoggle_active"),e(".sidebar_menu").addClass("active"),e("body").append('<div id="header-overlay" class="header-overlay"></div>')})),e(document).on("click","#header-overlay, .sidemenu_close",(function(){return e(".sidetoggle").removeClass("open"),e("body").removeClass("sidetoggle_active"),e(".sidebar_menu").removeClass("active"),e("#header-overlay").fadeOut("3000",(function(){e("#header-overlay").remove()})),!1})),e(".categories_btn").on("click",(function(){e(".side_navbar_toggler").attr("aria-expanded","false"),e("#navbarSidetoggle").removeClass("show")})),e(".side_navbar_toggler").on("click",(function(){e(".categories_btn").attr("aria-expanded","false"),e("#navCatContent").removeClass("show")})),e(".pr_search_trigger").on("click",(function(){e(this).toggleClass("show"),e(".product_search_form").toggleClass("show")}));var r=!0;e("html").on("click",(function(){r&&(e(".categories_btn").addClass("collapsed"),e(".categories_btn,.side_navbar_toggler").attr("aria-expanded","false"),e("#navCatContent,#navbarSidetoggle").removeClass("show")),r=!0})),e(".categories_btn,#navCatContent,#navbarSidetoggle .navbar-nav,.side_navbar_toggler").on("click",(function(){r=!1}));var l=e(".top-header").innerHeight(),d=e(".header_wrap").innerHeight()-l-20;e('a.page-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(e("a.page-scroll.active").removeClass("active"),e(this).closest(".page-scroll").addClass("active"),location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var a=e(this.hash),t=e(this).data("speed")||800;(a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length&&(event.preventDefault(),e("html, body").animate({scrollTop:a.offset().top-d},t))}})),e(window).on("scroll",(function(){var a,t=e(".header_wrap").find("a.page-scroll"),o=e(".header_wrap").innerHeight()+20,s=t.map((function(){var a=e(e(this).attr("href"));if(a.length)return a})),n=e(this).scrollTop()+o,i=s.map((function(){if(e(this).offset().top<n)return this})),r=(i=i[i.length-1])&&i.length?i[0].id:"";a!==r&&(a=r,t.closest(".page-scroll").removeClass("active").end().filter("[href='#"+r+"']").closest(".page-scroll").addClass("active"))})),e(".more_slide_open").slideUp(),e(".more_categories").on("click",(function(){e(this).toggleClass("show"),e(".more_slide_open").slideToggle()})),e(".close-search").on("click",(function(){e(".search_wrap,.search_overlay").removeClass("open"),e("body").removeClass("search_open")}));var c=!0;function m(){e(".carousel_slider").each((function(){var a=e(this);a.owlCarousel({rtl:t,dots:a.data("dots"),loop:a.data("loop"),items:a.data("items"),margin:a.data("margin"),mouseDrag:a.data("mouse-drag"),touchDrag:a.data("touch-drag"),autoHeight:a.data("autoheight"),center:a.data("center"),nav:a.data("nav"),rewind:a.data("rewind"),navText:['<i class="ion-ios-arrow-left"></i>','<i class="ion-ios-arrow-right"></i>'],autoplay:a.data("autoplay"),animateIn:a.data("animate-in"),animateOut:a.data("animate-out"),autoplayTimeout:a.data("autoplay-timeout"),smartSpeed:a.data("smart-speed"),responsive:a.data("responsive")})}))}function u(){e(".slick_slider").each((function(){var a=e(this);a.not(".slick-initialized").slick({rtl:t,arrows:a.data("arrows"),dots:a.data("dots"),infinite:a.data("infinite"),centerMode:a.data("center-mode"),vertical:a.data("vertical"),fade:a.data("fade"),cssEase:a.data("css-ease"),autoplay:a.data("autoplay"),verticalSwiping:a.data("vertical-swiping"),autoplaySpeed:a.data("autoplay-speed"),speed:a.data("speed"),pauseOnHover:a.data("pause-on-hover"),draggable:a.data("draggable"),slidesToShow:a.data("slides-to-show"),slidesToScroll:a.data("slides-to-scroll"),asNavFor:a.data("as-nav-for"),focusOnSelect:a.data("focus-on-select"),responsive:a.data("responsive")})}))}e(".search_wrap").after('<div class="search_overlay"></div>'),e(".search_trigger").on("click",(function(){e(".search_wrap,.search_overlay").toggleClass("open"),e("body").toggleClass("search_open"),c=!1,e(".navbar-collapse").hasClass("show")&&(e(".navbar-collapse").removeClass("show"),e(".navbar-toggler").addClass("collapsed"),e(".navbar-toggler").attr("aria-expanded",!1))})),e(".search_wrap form").on("click",(function(){c=!1})),e("html").on("click",(function(){c&&(e("body").removeClass("open"),e(".search_wrap,.search_overlay").removeClass("open"),e("body").removeClass("search_open")),c=!0})),e(window).on("scroll",(function(){e(this).scrollTop()>150?e(".scrollup").fadeIn():e(".scrollup").fadeOut()})),e(".scrollup").on("click",(function(a){return a.preventDefault(),e("html, body").animate({scrollTop:0},600),!1})),e(window).on("load",(function(){var a=e(".grid_container");if(a.length){var t=".grid_filter > li > a";a.length>0&&a.imagesLoaded((function(){a.hasClass("masonry")?a.isotope({itemSelector:".grid_item",percentPosition:!0,layoutMode:"masonry",masonry:{columnWidth:".grid-sizer"}}):a.isotope({itemSelector:".grid_item",percentPosition:!0,layoutMode:"fitRows"})})),e(document).on("click",t,(function(){e(t).removeClass("current"),e(this).addClass("current");var o=e(this).data("filter");return a.hasClass("masonry")?a.isotope({itemSelector:".grid_item",layoutMode:"masonry",masonry:{columnWidth:".grid_item"},filter:o}):a.isotope({itemSelector:".grid_item",layoutMode:"fitRows",filter:o}),!1})),e(".portfolio_filter").on("change",(function(){a.isotope({filter:this.value})})),e(window).on("resize",(function(){setTimeout((function(){a.find(".grid_item").removeClass("animation").removeClass("animated"),a.isotope("layout")}),300)}))}})),e(".link_container").each((function(){e(this).magnificPopup({delegate:".image_popup",type:"image",mainClass:"mfp-zoom-in",removalDelay:500,gallery:{enabled:!0}})})),e(document).ready((function(){m(),u()})),e("#submitButton").on("click",(function(a){a.preventDefault();var t=e("form").serialize();e.ajax({type:"POST",dataType:"json",url:"contact.php",data:t,success:function(a){"error"===a.type?(e("#alert-msg").removeClass("alert, alert-success"),e("#alert-msg").addClass("alert, alert-danger")):(e("#alert-msg").addClass("alert, alert-success"),e("#alert-msg").removeClass("alert, alert-danger"),e("#first-name").val("Enter Name"),e("#email").val("Enter Email"),e("#phone").val("Enter Phone Number"),e("#subject").val("Enter Subject"),e("#description").val("Enter Message")),e("#alert-msg").html(a.msg),e("#alert-msg").show()},error:function(a,e){alert(e)}})})),e(".content-popup").magnificPopup({type:"inline",preloader:!0,mainClass:"mfp-zoom-in"}),e(".image_gallery").each((function(){e(this).magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})})),e(".popup-ajax").magnificPopup({type:"ajax",callbacks:{ajaxContentAdded:function(){m(),u()}}}),e(".video_popup, .iframe_popup").magnificPopup({type:"iframe",removalDelay:160,mainClass:"mfp-zoom-in",preloader:!1,fixedContentPos:!1}),e("select").length&&e.each(e("select"),(function(a,t){var o=e(t);""===o.val()&&o.addClass("first_null"),o.val()||o.addClass("not_chosen"),o.on("change",(function(){o.val()?o.removeClass("not_chosen"):o.addClass("not_chosen")}))})),e(".fit-videos").length>0&&e(".fit-videos").fitVids({customSelector:"iframe[src^='https://w.soundcloud.com']"}),e(".custome_select").length>0&&e(document).ready((function(){e(".custome_select").msDropdown()}));var p=function(a){return window.trans=window.trans||{},"undefined"!==window.trans[a]&&window.trans[a]?window.trans[a]:a};e(".countdown_time").each((function(){var a=e(this).data("time");e(this).countdown(a,(function(a){e(this).html(a.strftime('<div class="countdown_box"><div class="countdown-wrap"><span class="countdown days">%D </span><span class="cd_text">'+p("Days")+'</span></div></div><div class="countdown_box"><div class="countdown-wrap"><span class="countdown hours">%H</span><span class="cd_text">'+p("Hours")+'</span></div></div><div class="countdown_box"><div class="countdown-wrap"><span class="countdown minutes">%M</span><span class="cd_text">'+p("Minutes")+'</span></div></div><div class="countdown_box"><div class="countdown-wrap"><span class="countdown seconds">%S</span><span class="cd_text">'+p("Seconds")+"</span></div></div>"))}))})),e(document).on("click",".shorting_icon",(function(){e(this).hasClass("grid")?(e(".shop_container").removeClass("list").addClass("grid"),e(this).addClass("active").siblings().removeClass("active")):e(this).hasClass("list")&&(e(".shop_container").removeClass("grid").addClass("list"),e(this).addClass("active").siblings().removeClass("active")),e(".shop_container").append('<div class="loading_pr"><div class="mfp-preloader"></div></div>'),setTimeout((function(){e(".loading_pr").remove()}),500)})),e((function(){e('[data-toggle="tooltip"]').tooltip({trigger:"hover"})})),e((function(){e('[data-toggle="popover"]').popover()})),e(".product_color_switch span").each((function(){var a=e(this).attr("data-color");e(this).css("background-color",a)})),e(".product_color_switch span,.product_size_switch span").on("click",(function(){e(this).siblings(this).removeClass("active").end().addClass("active")}));e.magnificPopup.defaults.callbacks={open:function(){e("body").addClass("zoom_image")},close:function(){setTimeout((function(){e("body").removeClass("zoom_image").removeClass("zoom_gallery_image"),e(".zoomContainer:last-child").remove(),e(".zoomContainer").slice(1).remove()}),100)}};var g=e("#pr_item_gallery");g.magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0},callbacks:{elementParse:function(a){a.src=1==e("#product_img").data("zoom-enable")?a.el.attr("data-zoom-image"):a.el.attr("data-image")}}}),e(".product_img_zoom").on("click",(function(){var a=e("#pr_item_gallery a").attr("data-zoom-image");e("body").addClass("zoom_gallery_image"),e("#pr_item_gallery .item").each((function(){if(a==e(this).find(".product_gallery_item").attr("data-zoom-image"))return g.magnificPopup("open",e(this).index())}))})),e(document).ready((function(){function a(a,e,t,o){var s=isFinite(+a)?+a:0,n=isFinite(+e)?Math.abs(e):0,i=void 0===o?",":o,r=void 0===t?".":t,l=(n?function(a,e){var t=Math.pow(10,e);return Math.round(a*t)/t}(s,n):Math.round(s)).toString().split(".");return l[0].length>3&&(l[0]=l[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(l[1]||"").length<n&&(l[1]=l[1]||"",l[1]+=new Array(n-l[1].length+1).join("0")),l.join(r)}var o=e("#price_filter");if(o.length){var s=o.data("min-value"),n=o.data("max-value"),i=o.data("price-sign"),r=e("div[data-is-prefix-symbol]").data("is-prefix-symbol");o.slider({isRTL:t,range:!0,min:o.data("min"),max:o.data("max"),values:[s,n],slide:function(a,t){var o=t.values[0],s=t.values[1];"1"==r?(o=i+o,s=i+s):(o+=i,s+=i),e("#flt_price").html(o+" - "+s),e("#price_first").val(t.values[0]),e("#price_second").val(t.values[1])},stop:function(){e("#price_filter").closest("form").submit()}});var l=a(o.slider("values",0)),d=a(o.slider("values",1));"1"==r?(l=i+l,d=i+d):(l+=i,d+=i),e("#flt_price").html(l+" - "+d)}})),e(document).ready((function(){e(".star_rating span").on("click",(function(){for(var a=parseFloat(e(this).data("value"),10),t=e(this).parent().children(".star_rating span"),o=0;o<t.length;o++)e(t[o]).removeClass("selected");for(o=0;o<a;o++)e(t[o]).addClass("selected");e(this).closest("form").find("input[name=star]").val(a)}))})),e(".ps-list--categories").length>0&&e(".ps-list--categories .menu-item-has-children > .sub-toggle").on("click",(function(a){a.preventDefault();var t=e(this).parent(".menu-item-has-children");e(this).toggleClass("active"),t.siblings().find(".sub-toggle").removeClass("active"),t.children(".sub-menu").slideToggle(350),t.siblings().find(".sub-menu").slideUp(350),t.hasClass("has-mega-menu")&&(t.children(".mega-menu").slideToggle(350),t.siblings(".has-mega-menu").find(".mega-menu").slideUp(350))})),e(document).ready((function(){var a;a=e("#product_img"),!!1?e(a).length>0&&e(a).elevateZoom({cursor:"crosshair",easing:!0,gallery:"pr_item_gallery",zoomType:"inner",galleryActiveClass:"active"}):(e.removeData(a,"elevateZoom"),e(".zoomContainer:last-child").remove()),1!=e("#product_img").data("zoom-enable")&&setTimeout((function(){e.removeData(e("#product_img"),"elevateZoom"),e(".zoomContainer:last-child").remove()}),500)}))}(jQuery)})();