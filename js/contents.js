$(function(){

	/* sub product list
	 * tabs
	 */
	let listTabs = $(".prod-wrap .filter-tabs li")
	let prodContents = $(".prod-wrap .prod-list")

	$(prodContents).hide();
	$(prodContents).eq(0).show();

	$(listTabs).click(function () {
		$(listTabs).removeClass("active");
		$(this).addClass("active");
		$(prodContents).hide()

		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
	});

	// 가격 범위 필터 : jQuery Range Slider 
	$( function() {
		$( "#slider-range" ).slider({
		  range: true,
		  min: 0,
		  max: 500,
		  values: [ 75, 300 ],
		  slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		  }
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	});

	// filter widget toggle
	$('.filter-popup').hide();
	$('.filter-widget-toggle').on('click',function(){
		$('.filter-popup').slideToggle(300);
	})


	/* sub product view
	 * 상품 이미지 미리보기
	 */ 
	let bigPic = document.querySelector(".big");
	let smallPics = document.querySelectorAll(".small");

	for (var i = 0; i < smallPics.length; i++) {
		smallPics[i].addEventListener("click", chagePic);
	}
	function chagePic() {
		var newPic = this.src;
		bigPic.setAttribute("src", newPic);
	}

	/** 새로운 배송지 toggle
	 * 체크박스 click : 새로운 배송지 입력 slideToggle
	 */
	$('#shipBox').on('click', function () {
		$('#newShipping').slideToggle();
	});


	/** 
	 * 아코디언(accordion)
	 */
	 $('.accordion-title').click(function() {
		$('.accordion-title').not(this).removeClass('open');
		$('.accordion-title').not(this).next().slideUp(300);
		$(this).toggleClass('open');
		$(this).next().slideToggle('300');
	});


	/* jQuery Selectric
     * selectbox 라이브러리 실행
     */
    if ($(".selectric").length == 0) {
			$('select').selectric().on('selectric-init', function() {
			$('select').selectric();
        });
    }

	/* product view
	 * tabs
	 */
	let detailTab = $(".detail-wrap .tabs li")
	let details = $(".detail-wrap .tab-cont .tab-pane")

	$(details).hide();
	$(details).eq(0).show();

	$(detailTab).click(function () {
		$(detailTab).removeClass("active");
		$(this).addClass("active");
		$(details).hide()

		var activeTab = $(this).attr("rel");
		$("#" + activeTab).fadeIn()
	});

	/** product view
	 * 추천상품 slide
	 * owl-wrapper
	 */
	$('.recs-slide').owlCarousel({
		loop:true,
		margin:0,
		items:5,
		nav:true,
		dots:false,
	});

});