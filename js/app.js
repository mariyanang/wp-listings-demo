// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();


/*
 INITIAL ANIMATION ON HOMEPAGE
 */

function initAnimation() {

    //animates the central house with bounce
    $('#main').velocity({
        translateX: 306,
        translateY: 36}).velocity({
        scale: 0.01}).velocity({
        opacity: 1 }).velocity({
        translateX: -55.2,
        translateY: -14.4,
        scale: 1.2}, {
        duration: 500}).velocity({
        translateX: 0,
        translateY: 0,
        scale: 1}, {
        duration: 200
    });

    //animates the side lines
    $('#lines').velocity({
        'stroke-dasharray': 265}).velocity({
        'stroke-dashoffset': 265     }, 0).velocity({
        opacity: 1}).velocity({
        'stroke-dashoffset': 0 }, {
        duration: 200,
        delay: 1500 });

    //animate text 'buy/sell'
    $('.mainButtons').velocity({
        opacity: 1 }, {
        duration: 1000,
        delay: 4000});
}

/*
 INITIALIZE SEARCH FORM FOR SALES AND RENT
 */

function initSearchForm() {

    $('#content-box').boxSlider({
        effect: 'scrollVert3d'});

    $('#sellMainBtn').click(function () {
        $('#content-box').boxSlider('showSlide', 0);

        $('#rentMainBtn').css('color', '#c1272d');
        $('#rentMainBtn').css('background-color', '#e8e0df');

        $(this).css('color', '#e8e0df');
        $(this).css('background-color', '#c1272d');

    });

    $('#rentMainBtn').click(function () {
        $('#content-box').boxSlider('showSlide', 1);

        $('#sellMainBtn').css('color', '#c1272d');
        $('#sellMainBtn').css('background-color', '#e8e0df');

        $(this).css('color', '#e8e0df');
        $(this).css('background-color', '#c1272d');
    });

}

/*
 SLIDER RANGE FOR PRICES
 */

function initPriceSlider() {
    var slider = $(".priceRangeSlider").slider({
        range: true,
        min: 1,
        max: 200000,
        values: [100, 100000],
        slide: function (event, ui) {
            $(".minPrice").text("" + ui.values[0]);
            $(".maxPrice").text("" + ui.values[1]);

        }
    });
    $(".minPrice").text("" + slider.slider("values", 0));
    $(".maxPrice").text("" + slider.slider("values", 1));
}

/*
 SHOW SUB MENU HEADER ON SCROLL
 */
function initMenuOnScroll() {
    $(document).scroll(function () {
        var locationTop = $('#location').offset().top;
        //        console.log(locationTop);
        var scrollTop = $(document).scrollTop();
        //        console.log(scrollTop);
        if (scrollTop > 430) {
            $('#singleListingHeader').show();
            $('#stickyPrice').addClass('stickOnScroll');
        }
        if (scrollTop < 430) {
            $('#singleListingHeader').hide();
            $('#stickyPrice').removeClass('stickOnScroll');
        }
        if (scrollTop > locationTop - 400) {
//            var scrollConatctLeft = $('#scrollContact').offset().left;
//            $('#scrollContact').offset(locationTop, scrollConatctLeft);
            $('#scrollContact').hide();
        } else {
            $('#scrollContact').css('position', 'inherit').css('margin-top', 'auto');
            $('#scrollContact').show();
        }
    });
}

$(function () {

    /*
     CHANGE .svg IMAGES WITH .png
     */

    if (!Modernizr.svg) {
        $('img[src$=svg]').each(function (index, item) {
            var imgPath = $(item).attr('src');
            $(item).attr('src', imgPath.slice(0, -3) + 'png')
        });
    }

    /*
     ACCORDION FOR FILTERING SEARCH RESULTS
     */

    $('#accordion h3').click(function () {
        $(this).next().toggle('slow');
        $(this).children('i').toggleClass('icon-direction-up');
    }).next().hide();

    initMenuOnScroll();
    initPriceSlider();
    initAnimation();
    initSearchForm();
});