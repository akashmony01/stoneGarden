// menu button toggler
// ======================================================
$(document).ready(function(){
    $(".menuIcon").click(function(){
        $(".header").toggleClass('active');
    });
});

// search toggler for mobile
// ======================================================
$(document).ready(function(){
    $(".searchIcon span").click(function(){
        $(".searchIcon").toggleClass('active');
    });
    $(".searchIcon").mouseleave(function() {
        $(".searchIcon").removeClass('active');
    });
});

// onscroll add sticky class
// ======================================================
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var menuHeight = $(".header").outerHeight()

    if (scroll > menuHeight) {
        $(".header").addClass("scroll");
        $(".main").addClass("scroll");
        
        if (!$(".header").hasClass("active")) {
            $(".header").addClass("slideIn");
        }

    }else{
        $(".header").removeClass("scroll");
        $(".header").removeClass("slideIn");
        $(".main").removeClass("scroll");
    }
});

// activating owl carousel for slider section on index page
// ======================================================
var owl = $('.sliderContainer');
owl.owlCarousel({
    items:1,
    nav: true,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    navText : ["<img src='src/media/image/leftArrow.png'>","<img src='src/media/image/rightArrow.png'>"],
});

// script for custom dropdown / custom select
// ======================================================
$(document).ready(function(){
    // open the list
    $(".choosenItem").click(function(){
        let superParent = $(this).parents(".customSelect");
        // display option list
        $(superParent).toggleClass('active');
    });

    // hide list on mouse leave
    $(".customSelect").mouseleave(function(){
        // display option list
        $(this).removeClass('active');
    });

    // change select value on click
    $(".selectItem > a").click(function(){
        // get current items parent
        let superParent = $(this).parents(".customSelect");
        let subParent = $(this).parents(".selectItem");

        // add selected to current item
        $(superParent).find(".selectItem").removeClass('selected');
        $(subParent).addClass('selected');

        // change the sort value
        let selectValue = $(superParent).find(".selected > a").html();
        $(superParent).find(".choosenItem").html(selectValue);

        // hide the list
        $(superParent).removeClass('active');
    });

    // set deafult value as default
    $(".selectItem.selected").each(function( index ) {
        $(this).find("a").trigger('click');
    });
});

// calculator info toggle script
// ======================================================
$(document).ready(function(){
    $(".calculatorHeader").click(function(){
        $(".rightCalculator").toggleClass('active');
    });
});

// delivery info toggle script
// ======================================================
$(document).ready(function(){
    $(".deliveryHeader").click(function(){
        $(".rightDelivery").toggleClass('active');
    });
});

// single product image switcher
// ======================================================
$(document).ready(function(){
    $(".singleImg").click(function(){
        // get the main image element
        let mainImgContainer = $(".mainImg > img");
        // get the clicked image url
        let currentImg = $(this).attr('src');

        // remove default from previous img
        $(".singleImg").removeClass('default');
        // add default on clicked image
        $(this).addClass('default');

        // fadeout the previous main image
        $(mainImgContainer).addClass('fadeOut');

        // change the url of main image into clicked iamge
        $(mainImgContainer).attr('src', currentImg);

        // fade in the current main Image
        setTimeout(function () {
            $(mainImgContainer).removeClass('fadeOut');
        }, 250);
    });
});

// add to cart input increase decrease
// ======================================================
$(document).ready(function(){

    let inputBox =  $(".customIncDec").find("input");
    let minQuantity = $(inputBox).attr('min');
    let maxQuantity = $(inputBox).attr('max');
    let inputValue = 0;

    function setValue(updatedValue, that){
        let parent = $(that).parents('.customIncDec');
        currentInputBox = $(parent).find('input');

        // set input value
        $(currentInputBox).val(updatedValue);
        $(currentInputBox).attr('value', updatedValue);
    }

    $(".increase").click(function(){
        // get input value
        let parent = $(this).parents('.customIncDec');
        inputValue = $(parent).find(inputBox).attr('value');

        // increase it
        inputValue++

        if (maxQuantity) {
            if (inputValue <= maxQuantity) {
                setValue(inputValue, this)
            }
        }else{
            setValue(maxQuantity, this)
        }
    });

    $(".decrease").click(function(){
        // get input value
        let parent = $(this).parents('.customIncDec');
        inputValue = $(parent).find(inputBox).attr('value');
        
        // increase it
        inputValue--
        // set value
        if (minQuantity) {
            if (inputValue >= minQuantity) {
                setValue(inputValue, this)
            }
        }else{
            setValue(minQuantity, this)
        }
    });
});

// clickable item add and remove active class
// ======================================================
$(document).ready(function(){
    $(".clickActive").click(function(){
        // get current items parent
        let parent = $(this).parents('.clickParent');

        // check if disabled or not
        if (!$(this).hasClass("disabled")) {
            // remove active class from siblings
            $(parent).find(".clickActive").removeClass('active')
            // add active class to current
            $(this).addClass("active");
        }
    });
});

// activating owl carousel for slider section
// ======================================================
var owl = $('.deliveryDate.owl-carousel');
owl.owlCarousel({
    autoWidth:true,
    nav: true,
    dots: false,
    margin:10,
    navText : ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
});