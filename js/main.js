$(document).ready(function (){

    /* mainSlide
	 * slick slider
	*/
	function mainSlider() {
		var BasicSlider = $('.slider-active');
		
		BasicSlider.slick({
			autoplay: true,
			autoplaySpeed: 1000,
			dots: true,
			fade: true,
			arrows: false,
			responsive: [
				{ breakpoint: 767, settings: { dots: true, arrows: false } }
			]
		});
	}
	mainSlider();

	// slick slider text content
	$('#slick-slide-control00').html('Lookbook');
	$('#slick-slide-control01').html('Over.S18');
	$('#slick-slide-control02').html('Style.S16');

	/* main product list
	 * tabs
	 */
	let mainTabs = $(".main-prod .tabs li")
	let tabContents = $(".main-prod .tab-cont .tab-pane")

	$(tabContents).hide();
	$(tabContents).eq(0).show();

	$(mainTabs).click(function () {
		$(mainTabs).removeClass("active");
		$(this).addClass("active");
		$(tabContents).hide()

		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
	});

	/** main : new, featured, specials slide
	 * owl-wrapper
	 */
	$('.main-product-carousel').owlCarousel({
		loop:true,
		margin:0,
		items:5,
		nav:true,
		dots:false,
	});

});