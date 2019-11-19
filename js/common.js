// @koala-prepend "jquery-1.11.3.min.js"
// @koala-prepend "swiper.min.js"
// @koala-prepend "swiper.animate1.0.3.min.js"
// @koala-prepend "jquery.SuperSlide.2.1.js"


function chatQQ() {
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
        spaceBetween: myFontSize * 20,
        on: {
            slideChangeTransitionEnd: function () {
                console.log(this.activeIndex);
                $(".course-tabs li").eq(this.activeIndex).addClass("active").siblings().removeClass("active")
            }
        }
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
        loop: true,
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
        spaceBetween: myFontSize * 20,
        pagination: {
            el: '.cooperation .swiper-pagination',
            clickable: true,
        },
    })

    var brandTeamData = [];
    var loadTeam = {
        _default: 4, //默认显示条数
        _loading: 3, //每次加载条数
        init: function () {
            var lis = $(".brandteam .hide-list ul li");
            $(".brandteam .show-list ul").html("");
            for (var n = 0; n < loadTeam._default; n++) {
                lis.eq(n).appendTo(".brandteam .show-list ul");
            }
            for (var i = loadTeam._default; i < lis.length; i++) {
                brandTeamData.push(lis.eq(i));
            }
            $(".brandteam .hide-list").html("");
        },
        loadMore: function () {
            var mLis = $(".brandteam .show-list ul li").length;
            for (var i = 0; i < loadTeam._loading; i++) {
                var target = brandTeamData.shift();
                if (!target) {
                    $('#loadMoreTeam').find("span").html("没有更多了...");
                    break;
                }
                $(".brandteam .show-list ul").append(target);
                $('#loadMoreTeam').find("span").html("点击查看更多");
            }
        }
    }
    loadTeam.init();

    $("#loadMoreTeam").on("click", function () {
        $(this).find("span").html("正在加载...");
        setTimeout(function () {
            loadTeam.loadMore()
        }, 500)
    })

    var lecturesFilms = $(".lectures").find("video")
    var lecturesItem = $(".lectures").find(".swiper-slide")

    lecturesItem.find("video").on("touchmove", function (e) {
        e.stopPropagation()
    })

    if ($(".lectures").length > 0) {
        $(window).scroll(function () {
            var lecturesFilmsView = $(".lectures")[0].offsetTop;
            if (lecturesFilmsView >= $(window).scrollTop() && lecturesFilmsView < ($(window).scrollTop() + $(window).height())) {
                // console.log('出现了');
            }else {
                // console.log('消失了');
                lecturesFilms.trigger("pause")
            }
        })
    }

    if (lecturesItem.length > 1) {
        var lecturesSwiper = new Swiper(".lectures .swiper-container", {
            speed: 600,
            spaceBetween: myFontSize * 20,
            pagination: {
                el: ".lectures .swiper-pagination"
            },
            on: {
                slideChangeTransitionEnd: function () {
                    lecturesFilms.eq(this.activeIndex).trigger("play")
                    lecturesFilms.eq(this.previousIndex).trigger("pause")
                }
            }
        })
    }

    var majorSwiper2 = new Swiper(".major-2 .swiper-container", {
        spaceBetween: myFontSize * 30,
        effect: "coverflow",
        speed: 600,
        autoHeight: true,
        slidesPerView: "auto",
        centeredSlides: true,
        slidesPerView: "auto",
        slideToClickedSlide: true,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: '.major-2 .swiper-pagination',
        },
        navigation: {
            nextEl: '.major-2 .swiper-button-next',
            prevEl: '.major-2 .swiper-button-prev',
        },
        coverflowEffect: {
            rotate: 0,
            stretch: myFontSize * -50,
            depth: 200,
            modifier: 1,
            slideShadows: false
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
    })


    var caseThumbs = new Swiper('.case-thumbs .swiper-container', {
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: myFontSize * 28,
        scrollbar: {
            el: '.students-case .swiper-scrollbar',
        },
        navigation: {
            nextEl: '.students-case .swiper-button-next',
            prevEl: '.students-case .swiper-button-prev',
        },
    });
    var caseTop = new Swiper('.case-top .swiper-container', {
        spaceBetween: myFontSize * 20,
        speed: 600,
        thumbs: {
            swiper: caseThumbs
        }
    });

    $(".project-switch .tabs li").on("click", function () {
        var _index = $(this).index()
        $(this).addClass("active").siblings().removeClass("active")
        $(".project-switch .wrap .item").eq(_index).show().siblings().hide()
    })


    $(".advantage-switch .tabs li").on("click", function () {
        var _index = $(this).index()
        $(this).addClass("active").siblings().removeClass("active")
        $(".advantage-switch .wrap .item").eq(_index).show().siblings().hide()
    })

    $(".join-course .tabs li").on("click", function () {
        var _index = $(this).index()
        $(this).addClass("active").siblings().removeClass("active")
        $(".join-course .wrap .item").eq(_index).show().siblings().hide()
    })

    $(".xianchang .list").slide({
        mainCell: "ul",
        autoPlay: true,
        effect: "leftMarquee",
        vis: 2,
        interTime: 30,
        autoPlay: true,
    });
    $(".anpai .list").slide({
        mainCell: "ul",
        autoPlay: true,
        effect: "leftMarquee",
        vis: 2,
        interTime: 30,
        autoPlay: true,
    });


    if ($("#map").length > 0) {
        var map = new BMap.Map("map");    // 创建Map实例
        var point = new BMap.Point(112.978398, 27.790351);// 创建点坐标
        var zoomCtrl = new BMap.ZoomControl({
            anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
            // offset: new BMap.Size(20, 20)
        });
        var marker = new BMap.Marker(point);
        map.centerAndZoom(point, 18);
        map.addOverlay(marker);
        map.addControl(zoomCtrl);
        map.disableDragging();
    }
})