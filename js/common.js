// @koala-prepend "jquery-1.11.3.min.js"
// @koala-prepend "swiper.min.js"
// @koala-prepend "swiper.animate1.0.3.min.js"
// @koala-prepend "jquery.SuperSlide.2.1.js"


function chatQQ(){
    console.log(1);
    window.location.href = "mqqwpa://im/chat?chat_type=wpa&uin=2020573202&version=1&src_type=web&web_src=oicqzone.com";
}
$(document).ready(function ($) {

    var myFontSize = parseInt($("html").css("font-size")) / 100;
    $("#menu-triger").on("click", function () {
        $("#header-nav").toggleClass("show")
        var state = ($(this).find("i")[0]).className.indexOf("iconcaidan") > -1
        $(this).find("i").toggleClass("iconcaidan", !state).toggleClass("iconguanbi", state)
    })

    $("#header-nav").on("click", function () {
        $(this).removeClass("show")
        $("#menu-triger").find("i").removeClass("iconguanbi").addClass("iconcaidan")
        $(this).find(".wrap").on("click", function (e) {
            e.stopPropagation()
        })
    })


    var bannerItem = $(".banner").find(".swiper-slide")

    if (bannerItem.length > 1) {
        var bannerSwiper = new Swiper(".banner .swiper-container", {
            speed: 600,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            pagination: {
                el: ".banner .swiper-pagination"
            }
        })
    }

    var courseSwiper = new Swiper('.course .swiper-container', {
        spaceBetween: myFontSize * 20
    });

    $(".course-tabs li").on("click", function () {
        var _index = $(this).index()
        $(this).addClass("active").siblings().removeClass("active")

        courseSwiper.slideTo(_index, 500, false)
    })


    var majorSwiper = new Swiper('.major .swiper-container', {
        spaceBetween: myFontSize * 30,
        speed: 600,
        autoHeight: true,
        pagination: {
            el: '.major .swiper-pagination',
        },
        navigation: {
            nextEl: '.major .swiper-button-next',
            prevEl: '.major .swiper-button-prev',
        },
        on: {
            init: function () {
                // swiperAnimateCache(this); //隐藏动画元素
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
                //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
            }
        }
    });

    $(".honour .list").slide({
        mainCell: "ul",
        autoPlay: true,
        effect: "leftMarquee",
        vis: 2,
        interTime: 30,
        autoPlay: true,
    });

    var studentsSwiper = new Swiper(".students .swiper-container", {
        speed: 600,
        slidesPerView: 2,
        spaceBetween: myFontSize * 30,
        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        }
    })



    $(".students .list-2").slide({
        mainCell: "ul",
        autoPlay: true,
        effect: "topMarquee",
        vis: 4,
        interTime: 30,
        autoPlay: true,
    });


    var cooperationSwiper = new Swiper('.cooperation .swiper-container', {
        speed: 600,
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: myFontSize*20,
        pagination: {
            el: '.cooperation .swiper-pagination',
            clickable: true,
        },
    })
})