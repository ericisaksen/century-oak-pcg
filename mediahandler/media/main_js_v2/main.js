function a11yLinks(n,t){void 0===n&&(n="body");$(n).each(function(){a11yTitleText=0!==$(this).find(t+" .name-data").length?$(this).find(t+" .name-data").text():$(this).find(t).text();""!=a11yTitleText&&"undefined"!=typeof a11yTitleText||(a11yTitleText=companyName);$(this).find("[data-a11y]").each(function(){switch($(this).attr("data-a11y")){case"email":$(this).attr({"aria-label":"Send email to "+a11yTitleText+" at "+$(this).attr("href").split("mailto:").pop()});break;case"phone":n=(n=(n=(n=$(this).attr("href").split("tel:").pop()).split(" ").join("")).replace(/[^a-zA-Z0-9 ]/g,"")).replace(/(?:\r\n|\r|\n)/g,"");$(this).attr({"aria-label":"call "+a11yTitleText+" at "+n.split("").join(".").replace(/[^a-zA-Z0-9 ]/g,". ")+"."});break;case"phone-label":var n=$(this).attr("href").split("tel:").pop(),t=$(this).attr("data-label");n=(n=(n=n.split(" ").join("")).replace(/[^a-zA-Z0-9 ]/g,"")).replace(/(?:\r\n|\r|\n)/g,"");$(this).attr({"aria-label":"call "+a11yTitleText+" "+t+" at "+n.split("").join(".").replace(/[^a-zA-Z0-9 ]/g,". ")+"."});break;case"fax":n=(n=(n=(n=$(this).attr("href").split("tel:").pop()).split(" ").join("")).replace(/[^a-zA-Z0-9 ]/g,"")).replace(/(?:\r\n|\r|\n)/g,"");$(this).attr({"aria-label":"fax "+a11yTitleText+" at "+n.split("").join(".").replace(/[^a-zA-Z0-9 ]/g,". ")+"."});break;case"address":$(this).attr({"aria-label":"View "+a11yTitleText+"'s on Google Maps",target:"_blank"});break;case"facebook":if($(this).parents('[data-a11y="list"]'))return void $(this).attr({"aria-label":"Facebook",target:"_blank"});$(this).attr({"aria-label":"Visit "+a11yTitleText+"'s Facebook",target:"_blank"});break;case"twitter":if($(this).parents('[data-a11y="list"]'))return void $(this).attr({"aria-label":"Twitter",target:"_blank"});$(this).attr({"aria-label":"Visit "+a11yTitleText+"'s Twitter",target:"_blank"});break;case"linkedin":if($(this).parents('[data-a11y="list"]'))return void $(this).attr({"aria-label":"Linkedin",target:"_blank"});$(this).attr({"aria-label":"Visit "+a11yTitleText+"'s Linkedin",target:"_blank"});break;case"website":if($(this).parents('[data-a11y="list"]'))return void $(this).attr({"aria-label":"Website",target:"_blank"});$(this).attr({"aria-label":"Visit "+a11yTitleText+"'s Website",target:"_blank"})}})})}function a11yLists(n,t){void 0===n&&(n="body");$(n).each(function(){a11yTitleText=0!==$(this).find(t+" .name-data").length?$(this).find(t+" .name-data").text():$(this).find(t).text();""!=a11yTitleText&&"undefined"!=typeof a11yTitleText||(a11yTitleText=companyName);$(this).find('[data-a11y="list"]').each(function(){let n=$(this).prev(".list-title");n.text("Connect with "+a11yTitleText).attr("id","list-title-"+Math.floor(1e4+9e4*Math.random()));let t=n.attr("id");$(this).attr("aria-labelledby",t)})})}function a11yBtns(n,t){$(n).each(function(){a11yTitleText=0!==$(this).find(t+" .name-data").length?$(this).find(t+" .name-data").text():$(this).find(t).text();$(this).find("[data-a11y]").each(function(){switch($(this).attr("data-a11y")){case"btn":$(this).attr({"aria-label":"learn more about "+a11yTitleText});break;case"btn-contact":$(this).attr({"aria-label":"Contact "+a11yTitleText});break;case"btn-bio":$(this).attr({"aria-label":"Read "+a11yTitleText+"'s Bio"})}})})}function a11yAltTag(){$("img").each(function(){""!=$(this).attr("alt")&&" "!=$(this).attr("alt")||$(this).attr("role","presentation")})}function a11yNewtab(){$("body").find('[target="_blank"]').each(function(){let n=$(this).attr("aria-label"),t=$(this).text();void 0===n||!1===n?$(this).attr("aria-label",t+". Opens in new tab"):$(this).attr("aria-label",n+". Opens in new tab")})}function a11yHtags(n,t,i){$(n).each(function(){""==$.trim($(this).find(t).html())&&renameElement($(this).find(i),"h2")})}function showMoreSections(n,t,i,r,u){let f=n;u&&(f="div[data-assettypesubcategory='"+u+"'] "+n);$(f).each(function(){let h=i,f=$(this),c=$(this).find(t),n=c.length,e=!1,o=!1,s=!1;switch(r){case"events":e=!0;break;case"insights":o=!0;break;case"team":s=!0}if(e?$(this).attr("aria-label",n+" events listed."):o?$(this).attr("aria-label",n+" insights listed."):s?$(this).attr("aria-label",n+" team members listed."):$(this).attr("aria-label",n+" items listed."),n>h){e?$(this).parent().append('<div class="loadmoreless flex-col-100"><a href="#" role="button" class="showLink"><span class="text">Show more events<\/span><span class="container--icon"><svg aria-hidden="true" focusable="false" style="transform:rotate(90deg)"><use href="#svg-carrot"><\/use><\/svg><\/span><\/a><\/div>'):o?$(this).parent().append('<div class="loadmoreless flex-col-100"><a href="#" role="button" class="showLink"><span class="text">Show more insights<\/span><span class="container--icon"><svg aria-hidden="true" focusable="false" style="transform:rotate(90deg)"><use href="#svg-carrot"><\/use><\/svg><\/span><\/a><\/div>'):s?$(this).parent().append('<div class="loadmoreless flex-col-100"><a href="#" role="button" class="showLink"><span class="text">Show more team members<\/span><span class="container--icon"><svg aria-hidden="true" focusable="false" style="transform:rotate(90deg)"><use href="#svg-carrot"><\/use><\/svg><\/span><\/a><\/div>'):$(this).parent().append('<div class="loadmoreless flex-col-100"><a href="#" role="button" class="showLink"><span class="text">Show more<\/span><span class="container--icon"><svg aria-hidden="true" focusable="false" style="transform:rotate(90deg)"><use href="#svg-carrot"><\/use><\/svg><\/span><\/a><\/div>');var u=$(this).parent().find(".showLink");$(this).find(".loadmoreless").removeClass("d-none");$(this).find(t).not(":lt("+h+")").wrapAll('<div style="display:none" class="hidden hidden-events" />').filter(function(){$(this).attr("aria-hidden","true")});n-=i;e?u.attr("aria-label","Load "+n+" more events"):o?u.attr("aria-label","Load "+n+" more insights"):s?u.attr("aria-label","Load "+n+" more team members"):u.attr("aria-label","Load "+n+" more items")}$(this).parent().find(".showLink").click(function(i){i.preventDefault();f.find(".hidden").is(":hidden")?(f.find(".hidden").slideDown(400).attr("tabindex","0"),f.find(t+":not(:lt("+h+"))").filter(function(){$(this).attr("aria-hidden","false")}),u.find("span.text").animate({opacity:0},animationMS,function(){e?($(this).text("Show less events"),$(this).parent(".showLink").attr("aria-label","Show "+n+" less events")):o?($(this).text("Show less insights"),$(this).parent(".showLink").attr("aria-label","Show "+n+" less insights")):s?($(this).text("Show less team members"),$(this).parent(".showLink").attr("aria-label","Show "+n+" less team members")):($(this).text("Show less"),$(this).parent(".showLink").attr("aria-label","Show "+n+" less items"))}).animate({opacity:1},animationMS),u.find("svg").css("transform","rotate(-90deg)"),setTimeout(function(){f.find(".hidden-events").focus();f.find(".hidden").removeAttr("tabindex")},401)):(f.find(".hidden").slideUp(400),c.not(":lt("+h+")").filter(function(){$(this).attr("aria-hidden","true")}),u.find("span.text").animate({opacity:0},animationMS,function(){e?($(this).text("Show more events"),$(this).parent(".showLink").attr("aria-label","Load "+n+" more events")):o?($(this).text("Show more insights"),$(this).parent(".showLink").attr("aria-label","Load "+n+" more insights")):s?($(this).text("Show more team members"),$(this).parent(".showLink").attr("aria-label","Load "+n+" more team members")):($(this).text("Show more"),$(this).parent(".showLink").attr("aria-label","Load "+n+" more items"))}).animate({opacity:1},animationMS),u.find("svg").css("transform","rotate(90deg)"))})})}function maxTextEllipses(n,t){$(n).each(function(){$(this).text().length>t&&$(this).text(function(n,i){return i.substr(0,t)+"..."})})}function counter(n,t){if($(n).length>0){var i=!0;$(window).on("scroll",function(){$(window).scrollTop()+$(window).height()-100>=$(n).offset().top&&i&&(countAnimation(t),i=!1)})}}function countAnimation(n){$(n).each(function(){var t,i,n=$(this),u=$(this).text(),r;n.html(n.html().replace(/,/g,""));n.text().indexOf("$")>-1&&(t=!0,n.html(n.html().replace("$","")));n.text().indexOf("%")>-1&&(i=!0,n.html(n.html().replace("%","")));r=Number($(this).text());r==Math.floor(r)?jQuery({Counter:0}).animate({Counter:n.text()},{duration:2e3,easing:"swing",progress:function(){t?n.text("$"+Math.ceil(this.Counter)):i?n.text(Math.ceil(this.Counter)+"%"):n.text(Math.ceil(this.Counter))},complete:function(){n.text(u)}}):jQuery({Counter:0}).animate({Counter:n.text()},{duration:2e3,easing:"swing",progress:function(){t?n.text("$"+Math.ceil(this.Counter/1)):i?n.text(Math.ceil(this.Counter/1)+"%"):n.text(Math.ceil(this.Counter/1))},complete:function(){n.text(u)}})})}function modalFocus(){$('button[data-toggle="modal"], a[data-toggle="modal"]').on("click",function(){var n=$(this).attr("data-target"),t=$(this);$(n).on("shown.bs.modal",function(){$(this).attr("tabindex","0");$(this).find(".first-focus-item").focus()});$(n).on("hide.bs.modal",function(){$(this).attr("tabindex","-1");t.focus()})})}function emptyInput(){$("input, textarea").blur(function(){$(this).val()?$(this).addClass("text"):$(this).removeClass("text")})}function selectbox(){$("select").each(function(){let n=$(this).siblings("label:not(.error)").outerWidth();$(this).parent().css("min-width",n+50);$(this).addClass($(this).children(":selected").val());$(this).focus(function(){$(this).parent().addClass("focus")});$(this).blur(function(){$(this).parent().removeClass("focus")})}).on("change",function(){$(this).attr("class","").addClass($(this).children(":selected").val())})}function checkbox(){$('[type="checkbox"]').each(function(){$(this).focus(function(){$(this).parent().addClass("focus")});$(this).blur(function(){$(this).parent().removeClass("focus")})})}function accordionImgChange(n,t,i){$(n).each(function(){var n=$(this).find(t).not(".collapsed").attr("data-img-val"),r=$(this).find(t).not(".collapsed").attr("data-alt-val");$(this).find(i).attr({src:n,alt:r})});$(n).find(t).on("click",function(){var t=$(this).attr("data-img-val"),r=$(this).attr("data-alt-val");$(this).parents(n).find(i).attr({src:t,alt:r})})}function dismiss(){$("[data-dismiss]").on("click",function(){let n=$(this),t=$(n).data("dismiss");if(".alert--top"==t){let r=n.parents(t).outerHeight(),i=n.parents(".alert");$(i).css("margin-top","-"+r+"px").attr({"aria-hidden":"true",tabindex:"-1"});setTimeout(function(){$(i).remove()},animationMS)}n.data("target")||$("body").removeAttr("tabindex")})}function navigationActive(n){"index"===bodyClass&&($(n+'[href="index.html"]').parents(".nav-item").addClass("active"),$(n+'[href="index.html"]').append('<span class="sr-only">(current)<\/span>'));$(n).each(function(){let n=window.location.href;this.href===n&&($(this).append('<span class="sr-only">(current)<\/span>'),$(this).parents(".nav-item").addClass("active"))})}function connectMenu(){$(".header--connect-bar")[0]&&($(".page-navigation .navbar-nav").append('<li class="nav-item connect-mobile">'),$(".header--connect-bar .container--btn").clone().appendTo(".connect-mobile"),$(".header--connect-bar .container--links").clone().appendTo(".connect-mobile"),$(".header--connect-bar .container--social").clone().appendTo(".connect-mobile"))}function connectMenuResponsive(){let n=$(".connect-mobile"),t=$(".header--connect-bar");window.matchMedia("(max-width: 767px)").matches?(simpleShow(n),hideIt(t),0!=$(".header--connect-bar .container--social").contents().length&&$(".page-navigation--toggle-only .navbar-nav .nav-item .social-container")[0])&&hideIt($(".page-navigation--toggle-only .navbar-nav .nav-item .social-container").parent()):(hideIt(n),simpleShow(t),0!=$(".header--connect-bar .container--social").contents().length&&$(".page-navigation--toggle-only .navbar-nav .nav-item .social-container")[0])&&simpleShow($(".page-navigation--toggle-only .navbar-nav .nav-item .social-container").parent())}function toggleMenu(){$("button.navbar-toggler").on("click",function(){let n=$(this),i=n.offset().top-$(window).scrollTop(),t=(n.offset().left,n.parents(".navbar"));if(n.parents(".page-navigation--toggle-only")[0]&&n.hasClass("collapsed")&&$(t).find($(".navbar-nav")).css("padding-top",i+50+"px"),window.matchMedia("(max-width: 767px)").matches?$(t).find("a").last().on("keydown",function(t){9!=(t.keyCode||t.which)||event.shiftKey||(t.preventDefault(),n.focus())}):$(t).find(".navbar-nav .nav-item:not(.connect-mobile) a").last().on("keydown",function(t){9!=(t.keyCode||t.which)||event.shiftKey||(t.preventDefault(),n.focus())}),n.hasClass("collapsed")){let n=$(window).scrollTop(),t=$(".page-navigation").offset().top-n;$("body").addClass("nav-bar-active");$(".page-navigation:not(.page-navigation--toggle-only)").css("height","calc(100vh - "+t+"px)")}else $("body").removeClass("nav-bar-active"),$(".page-navigation:not(.page-navigation--toggle-only)").css("height","auto")})}function toggleMenuResponsive(){window.matchMedia("(min-width: 1200px)").matches&&($("button.navbar-toggler").hasClass("collapsed")||($(".navbar-collapse").collapse("hide"),$("body").removeClass("nav-bar-active"),$(".page-navigation:not(.page-navigation--toggle-only)").css("height","auto")))}function stickyNav(){if($(".page-navigation").length){let n=$(".page-navigation").offset().top;navH=$(".page-navigation").outerHeight();$(".jumps-prevent")[0]||$(".page-navigation").after('<div class="jumps-prevent"><\/div>');$(".page-navigation").css("margin-bottom","-"+navH+"px");$(".page-navigation").next().css("padding-top",navH+"px");$(window).on("scroll",function(){$(window).scrollTop()>n?$("body").addClass("fixed"):$("body").removeClass("fixed")})}}function navBarBrandImg(){$(".navbar-brand").hasClass("navbar-brand--img")&&($(".navbar-brand img").attr("aria-hidden","true"),$(".navbar-brand .text").addClass("sr-only"));$(".navbar-brand-2").hasClass("navbar-brand--img")&&($(".navbar-brand-2 img").attr("aria-hidden","true"),$(".navbar-brand-2 .text").addClass("sr-only"))}function hTagBranding(){"index"===bodyClass&&renameElement($(".page-navigation .navbar-brand .text"),"h1")}function dropdownMenu(){$(".navbar:not(.page-navigation--toggle-only) .navbar-nav .nav-item.dropdown").on({"show.bs.dropdown":function(){var i=$(this).offset(),n=$(this).find(".dropdown-menu"),t=n.css("left"),r=parseInt($(this).find(".nav-link").css("padding-left").replace(/[^-\d\.]/g,""));i.left+n.outerWidth()+r+20>$(document).width()&&(n.addClass("dropdown-menu-right"),"0px"!=t&&(n.css("left","auto"),n.css("right",t)))},"hide.bs.dropdown":function(){var n=$(this).find(".dropdown-menu"),t=n.css("right");"0px"!=t&&n.hasClass("dropdown-menu-right")&&(n.css("right","auto"),n.css("left",t));n.removeClass("dropdown-menu-right")}})}function heroResponsive(){let n=100,r=$(".page-navigation").outerHeight(),t=0,i=0;$(".page-navigation").length&&(n=$(".page-navigation").outerHeight());$(".header--connect-bar").length&&"none"!=$(".header--connect-bar").css("display")&&(i=$(".header--connect-bar").outerHeight(),n+=i,r+=i);$(".alert--top").length&&(t=$(".alert--top").outerHeight(),n+=t);setCSS("html","--nav-height",n+"px");setCSS("html","--alert-height",t+"px");$("header").hasClass("transparent")&&($("main").addClass("transparent--header"),setCSS("html","--nav-height-responsive",r+"px"))}function heroClasses(n){$(n).each(function(){$this=$(this);$("header").hasClass("transparent")&&$this.find(".container--hero >.container").addClass("hero--nav");$this.find(".container--content")[0]&&0!=$this.find(".container--content").contents().length||$this.addClass("hero--noText");$this.find(".hero-content").each(function(){if($this.hasClass("hero--noText")&&($background=$(this).find(".background--media"),"none"!==$background.css("background-image"))){let n=$background.css("background-image");n=n.replace("url(","").replace(")","").replace(/\"/gi,"");$background.append('<img src="'+n+'" alt="" role="presentation">')}$(this).find(".container--content")[0]&&0!=$(this).find(".container--content").contents().length||$(this).addClass("noText")})})}function tabSwitch(){$(".section--tabs:not(.section--tabs-side)").each(function(){let n=$(this).find(".container--tabs"),t=$(this).find(".container--accordion"),r=$(this).find(".nav-link"),i=0;$(r).each(function(){i+=Number($(this).width())});$(window).width()<i||window.matchMedia("(max-width: 767px)").matches?(hideIt(n),simpleShow(t)):(hideIt(t),simpleShow(n))})}function tabSideSwitch(){$(".section--tabs-side").each(function(){let n=$(this).find(".container--tabs"),t=$(this).find(".container--accordion");window.matchMedia("(max-width: 767px)").matches?(hideIt(n),simpleShow(t)):(hideIt(t),simpleShow(n))})}function mapContainer(){$(".section--2col-map").each(function(){let n=0;$(".col-md-6",this).each(function(){$(this).height()>n&&(n=$(this).height())});$(".container--map",this).height(n)})}function a11yContactList(){$(".section--2col-contact-info").each(function(){$(this).find(".contact-list").each(function(){$(this).siblings(".list-title").text();let n=$(this).prev(".list-title");n.attr("id","list-title-"+Math.floor(1e4+9e4*Math.random()));let t=n.attr("id");$(this).attr("aria-labelledby",t)})})}function leadForm(){$(".section--lead-form").each(function(){var i=$(this).find(".btn-1"),t=($(this).find(".btn-2"),$(this).find(".section-1")),n=$(this).find(".section-2");$(this).find(".section-3");$(this).find("form");$(i).click(function(){t.fadeOut("slow",function(){$(t).replaceWith(n);$(n).fadeIn("slow");$(n).find("input").first().focus()})})})}function GridFocus(){$(".inner-overlay .link--styled").focus(function(){$(this).parents(".grid-item").addClass("focus")});$(".inner-overlay .link--styled").focusout(function(){$(this).parents(".grid-item").removeClass("focus")})}function highlightsImgCover(){$(".section--highlights-img-cover").each(function(){var n=-1;$(this).find(".inner-overlay").each(function(){var t=$(this).find(".title-col").outerHeight(),i=$(this).outerHeight()-(n=t>n?t:n)-50;$(this).css("transform","translateY("+i+"px)")})})}function countVertical(){$(".section--textBanner-count-vertical").each(function(){$this=$(this);$this.has(".vertical-line").length||$this.find(".row:not(.container--title)").append('<div class="vertical-line"><\/div>');setTimeout(function(){var n=parseInt($this.find(".row:not(.container--title) .col-md-6:nth-last-child(2)").css("padding-top").replace(/[^-\d\.]/g,"")),t=$this.find(".row:not(.container--title) .col-md-6:nth-last-child(2)").outerHeight()-n;$this.find(".vertical-line").css("height","calc(100% - "+t+"px)");$this.find(".row:not(.container--title) .col-md-6").each(function(){if(window.matchMedia("(min-width: 768px)").matches){var n=$(this).prev().outerHeight();n&&$(this).css("margin-top","-"+n/2+"px")}else $(this).css("margin-top","0")},1)})})}function setCSS(n,t,i){$(n).get(0).style.setProperty(t,i)}function hideIt(n){$(n).attr({"aria-hidden":"true",tabindex:"-1"}).hide()}function fadeIt(n){$(n).attr({"aria-hidden":"true",tabindex:"-1"}).fadeOut()}function simpleShow(n){$(n).removeAttr("aria-hidden tabindex").show()}function renameElement(n,t){return n.wrap("<"+t+">"),$newElement=n.parent(),$.each(n.prop("attributes"),function(){$newElement.attr(this.name,this.value)}),n.contents().unwrap(),$newElement}$(window).on("load",function(){$.expr[":"].external=function(n){let t=n.hostname.split(".").reverse(),r=t[1]+"."+t[0],i=window.location.hostname.split(".").reverse(),u=i[1]+"."+i[0];return!n.href.match(/^mailto\:/)&&!n.href.match(/^tel\:/)&&r!==u};$("a").not(":external").click(function(n){let t=$(this).attr("href"),i=$(this).attr("target")||"";t.match("#")||(n.preventDefault(),"_blank"!==i&&-1===t.indexOf("tel:")&&-1===t.indexOf("mailto:")&&$("html").addClass("fadeSiteOut"),setTimeout(function(){"_blank"===i?window.open(t,i):window.location=t},400))})});let backToTopBtn=$("#backToTop");$(window).scroll(function(){$(window).scrollTop()>20?backToTopBtn.addClass("show").attr("aria-hidden","false"):backToTopBtn.removeAttr("class").attr("aria-hidden","true")});$(".section--resources").each(function(){$(this).find(".div-link").on("click",function(){window.location.href=$(this).find("a.link--styled").attr("href")})});const bodyClass=window.location.pathname.split("/").pop().split(".html")[0],animationMS=400;setCSS("html","--slick-animation","0");$.fn.hasAttr=function(n){return void 0!==this.attr(n)};navigationActive(".navbar-nav a");connectMenu();toggleMenu();navBarBrandImg();hTagBranding();dropdownMenu();a11yLinks();a11yLinks(".section--event-bar .col-md-4",".title");a11yLinks(".container--member","h2.name");a11yLinks(".card--profile","h2.name");a11yLinks(".modal.profile","h2.name");a11yLinks(".section--team-col-fullWidth","h2.name");a11yBtns(".section",".title");a11yBtns('.section--textBanner-cta-col [class^="col"]',".title-col");a11yBtns(".hero-content .container--content",".title");a11yBtns(".section--event-banner",".title-event");a11yBtns(".event--list-item",".title-event");a11yBtns(".card--profile","h2.name");a11yBtns(".section--team-col-fullWidth","h2.name");a11yLists();a11yLists(".container--member","h2.name");a11yLists(".section--team-col-fullWidth","h2.name");a11yLists(".card--profile","h2.name");a11yLists(".modal.profile","h2.name");a11yAltTag();a11yNewtab();a11yHtags(".section",".title","h3");heroClasses(".container--hero");emptyInput();selectbox();checkbox();leadForm();mapContainer();a11yContactList();dismiss();maxTextEllipses(".text-desc",450);accordionImgChange(".section--highlights-accordion",".btn-link",".container--media img");$(".section--counting-numbers").each(function(){counter($(this),".count")});GridFocus();modalFocus();$(window).on("resize",function(){clearTimeout(window.resizedFinished);window.resizedFinished=setTimeout(function(){tabSwitch();tabSideSwitch();connectMenuResponsive();toggleMenuResponsive();stickyNav();heroResponsive();countVertical();highlightsImgCover()},250)}).resize();$(window).on("load",function(){tabSwitch();setTimeout(function(){heroResponsive()},500)});/*This js file was minified by WSM.*/