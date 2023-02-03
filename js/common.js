$(document).ready(function (){
    /** (참고) 
     * JS inckyde시 script 미작동 오류로 인해
     * body에서 이벤트를 발생시켜 자식요소에 이벤트 전달 
     */

    // Scroll Up : 스크롤이 어느정도 내려가면
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        // top 이동 버튼 fadeIn/Out
        if ($(this).scrollTop() > 180) {
            $(".scroll-up").fadeIn();
        } else {
            $(".scroll-up").fadeOut();
        }

        // header sticky
        if (scroll < 200) {
            $(".header-sticky").removeClass("sticky");
        } else {
            $(".header-sticky").addClass("sticky");
            $('header.header').css({
                'paddingTop': '30px',
                'paddingBottom': '15px',
            })
            $('.sticky').css({
                'top': '0'
            })
        }
    });


    // top 이동 버튼 클릭시 1s에 걸쳐 스르륵 이동.
    $("body").on("click", ".scroll-up", function () {
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });


    // 검색 팝업
    $("body").on("click", "header .util .search-icon", function () {
        $(".search-popup").css({
            opacity: "1",
            visibility: "visible",
        });
    });
    $("body").on("click", ".close-search", function () {
        $(".search-popup").css({
            opacity: "0",
            visibility: "hidden",
        });
    });

});