
$(document).ready(function () {







//  Slider

const $sliderWrap = $(".slider-wrap");
const $sliders = $sliderWrap.find(".sliders");
const $sliderLi = $sliders.find("li");
const sliderCount = $sliderLi.length;
const $dotNavigation = $sliderWrap.find(".dot-navigation");
const $previous = $sliderWrap.find(".previous");
const $next = $sliderWrap.find(".next");


var timer = setInterval(move_to_next, 7000);


$sliderLi.first().addClass("active");


$sliderLi.each(function () {
	$dotNavigation.append("<li/>");
});
$dotNavigation.find("li").first().addClass("active");


$dotNavigation.find("li").click(function () {
	next($(this).index());
});


$previous.click(function () {
	// Quickly work out it previous means looping around
	var i = $sliders.find("li.active").index();
	if (i - 1 < 0) i = sliderCount - 1;
	else i = i - 1;
	next(i);
});
$next.click(function () {
	move_to_next();
});


function restart_interval() {
	clearInterval(timer);
	timer = setInterval(move_to_next, 7000);
}


function move_to_next() {
	var i;
	if ($sliders.find("li").last().hasClass("active")) i = 0;
	else i = $sliders.find("li.active").next().index();
	next(i);
}


function next(i) {
	$dotNavigation.find("li.active").removeClass("active");
	$dotNavigation.find("li").eq(i).addClass("active");
	$sliders.find("li.active").removeClass("active");
	$sliderLi.eq(i).addClass("active");
	restart_interval();
}


$sliders.hover(
	function () {
		clearInterval(timer);
	},
	function () {
		restart_interval();
	}
);



// Glow left line

	const tl3= gsap.timeline({
	  scrollTrigger: {
	    trigger: ".trigger",
	    start: "center",
	    end: "bottom",
	    scrub: 3,
	    markers:false,

	  }
	});


	tl3.to(".glowLeft", 1, {left: "0px", strictUnits:true});
	tl3.to(".glowLeft", 1, {left: "700px", strictUnits:true});


	// Glow Right line

	const tl4= gsap.timeline({
	  scrollTrigger: {
	    trigger: ".trigger1",
	    start: "top",
	    end: "top",
	    scrub: 3,
	    markers:false,

	  }
	});


	tl4.to(".glowright", 1, {right: "0px", strictUnits:false});
	tl4.to(".glowright", 1, {right: "700px", strictUnits:false});




// Nav btn

$('.toggle-menu').click (function(){
  $(this).toggleClass('active');
  $('.main-nav').toggleClass('open');
  $('.header_wrap .nav').toggleClass('open_nav');
});



// Full page scroller

 new fullpage("#fullpage", { 
    sectionSelector: '.vertical-scrolling',
	navigationTooltips: false,
	css3: true,
	scrollingSpeed: 2000,
	navigation: false,
	scrollOverflow: true,
	slidesNavigation: true,
	responsiveWidth: 768,
	controlArrows: false,
	scrollBar: false,
  
    });




});















