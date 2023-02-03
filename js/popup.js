$(function () {

    // 상품정보
    $(".quick-view").colorbox({
        href: "/mazia/views/layout/popup/quick-details.html",
        width:"1000px",
        height:"680px",
        fixed: true,
        scrolling: false
    });

    // 장바구니 담기 후 결과
    $(".add-cart").colorbox({
        href: "/mazia/views/layout/popup/basket-page.html",
        width:"1000px",
        height:"400px",
        fixed: true,
        scrolling: false
    });

});
