/**
 * Created by Administrator on 2017/3/27.
 */
// JavaScript Document

//banner
(function(d, D, v) {
    d.fn.responsiveSlides = function(h) {
        var b = d.extend({
                auto: !0,
                speed: 1E3,
                timeout: 100E3,
                pager: !1,
                nav: !1,
                random: !1,
                pause: !1,
                pauseControls: !1,
                prevText: "Previous",
                nextText: "Next",
                maxwidth: "",
                controls: "",
                namespace: "rslides",
                before: function() {},
                after: function() {}
            },
            h);
        return this.each(function() {
            v++;
            var e = d(this),
                n,
                p,
                i,
                k,
                l,
                m = 0,
                f = e.children(),
                w = f.size(),
                q = parseFloat(b.speed),
                x = parseFloat(b.timeout),
                r = parseFloat(b.maxwidth),
                c = b.namespace,
                g = c + v,
                y = c + "_nav " + g + "_nav",
                s = c + "_here",
                j = g + "_on",
                z = g + "_s",
                o = d("<ul class='" + c + "_tabs " + g + "_tabs' />"),
                A = {
                    "float": "left",
                    position: "relative"
                },
                E = {
                    "float": "none",
                    position: "absolute"
                },
                t = function(a) {
                    b.before();
                    f.stop().fadeOut(q,
                        function() {
                            d(this).removeClass(j).css(E)
                        }).eq(a).fadeIn(q,
                        function() {
                            d(this).addClass(j).css(A);
                            b.after();
                            m = a
                        })
                };
            b.random && (f.sort(function() {
                return Math.round(Math.random()) - 0.5
            }), e.empty().append(f));
            f.each(function(a) {
                this.id = z + a
            });
            e.addClass(c + " " + g);
            h && h.maxwidth && e.css("max-width", r);
            f.hide().eq(0).addClass(j).css(A).show();
            if (1 < f.size()) {
                if (x < q + 100) return;
                if (b.pager) {
                    var u = [];
                    f.each(function(a) {
                        a = a + 1;
                        u = u + ("<li><a href='#' class='" + z + a + "'>" + a + "</a></li>")
                    });
                    o.append(u);
                    l = o.find("a");
                    h.controls ? d(b.controls).append(o) : e.after(o);
                    n = function(a) {
                        l.closest("li").removeClass(s).eq(a).addClass(s)
                    }
                }
                b.auto && (p = function() {
                    k = setInterval(function() {
                            var a = m + 1 < w ? m + 1 : 0;
                            b.pager && n(a);
                            t(a)
                        },
                        x)
                },
                    p());
                i = function() {
                    if (b.auto) {
                        clearInterval(k);
                        p()
                    }
                };
                b.pause && e.hover(function() {
                        clearInterval(k)
                    },
                    function() {
                        i()
                    });
                b.pager && (l.bind("click",
                    function(a) {
                        a.preventDefault();
                        b.pauseControls || i();
                        a = l.index(this);
                        if (! (m === a || d("." + j + ":animated").length)) {
                            n(a);
                            t(a)
                        }
                    }).eq(0).closest("li").addClass(s), b.pauseControls && l.hover(function() {
                        clearInterval(k)
                    },
                    function() {
                        i()
                    }));
                if (b.nav) {
                    c = "<a href='#' class='" + y + " prev'>" + b.prevText + "</a><a href='#' class='" + y + " next'>" + b.nextText + "</a>";
                    h.controls ? d(b.controls).append(c) : e.after(c);
                    var c = d("." + g + "_nav"),
                        B = d("." + g + "_nav.prev");
                    c.bind("click",
                        function(a) {
                            a.preventDefault();
                            if (!d("." + j + ":animated").length) {
                                var c = f.index(d("." + j)),
                                    a = c - 1,
                                    c = c + 1 < w ? m + 1 : 0;
                                t(d(this)[0] === B[0] ? a: c);
                                b.pager && n(d(this)[0] === B[0] ? a: c);
                                b.pauseControls || i()
                            }
                        });
                    b.pauseControls && c.hover(function() {
                            clearInterval(k)
                        },
                        function() {
                            i()
                        })
                }
            }
            if ("undefined" === typeof document.body.style.maxWidth && h.maxwidth) {
                var C = function() {
                    e.css("width", "100%");
                    e.width() > r && e.css("width", r)
                };
                C();
                d(D).bind("resize",
                    function() {
                        C()
                    })
            }
        })
    }
})(jQuery, this, 0);
//字体
//$(function(){
//    if($(window).width() > 992){
//        $('html').css('font-size','10px');
//    }else{
//        $('html').css('font-size',10 * $(window).width() / 992 + 'px');
//    }
//    $(window).resize(function(){
//        if($(window).width() > 992){
//            $('html').css('font-size','10px');
//        }else{
//            $('html').css('font-size',10 * $(window).width() / 992 + 'px');
//        }
//    });
//});
//导航
$(function(){
    $('.menus').click(function(){
        if($(this).hasClass('active'),$('div.phoneNav').hasClass('active')){
            $(this).removeClass('active');
            $('div.phoneNav').removeClass('active');
        }
        else{
            $(this).addClass('active');
            $('div.phoneNav').addClass('active');
        }
    });
    $('div.phoneNav .gb').click(function(){
        if($('.menus').hasClass('active'),$('div.phoneNav').hasClass('active')){
            $('.menus').removeClass('active');
            $('div.phoneNav').removeClass('active');
        }
        else{
            $(this).addClass('active');
            $('div.phoneNav').addClass('active');
        }
    });
});
//底部按钮
$(function(){
    var COOL;
    $('.anBut').hover(function(){
//		if($(this).hasClass('active'),$('.homeList').hasClass('active')){
//			$(this).removeClass('active');
//			$('.homeList').removeClass('active');
//		}
//		else{}
        $(this).addClass('active');
        $('.homeList').addClass('active');

    });
    $('.homeList').mouseleave(function(){
        $(this).removeClass('active');
        $('.anBut').removeClass('active');
    });
    $('.homeList .fourNav a').click(function(e){
        var INS = $(this).index();
        var THIS =$(this);
        var HERF = THIS.attr('href');
        for(var i=0;i<4;i++){
            $('.kgList').removeClass('acr'+i);
        }
        $('.kgList').addClass('acr'+INS);
        THIS.siblings().find('span').removeClass('on');
        THIS.find('span').addClass('on');
        COOL = INS;
        e.preventDefault();
        function delayer(){
            window.location = HERF;
        };
        setTimeout(delayer, 1000);
    });
});
//主体盒子样式
$(function(){
    var WHIT = $(window).width();
    var HIGT = $(window).height();
    $('.mainBox').width(WHIT).height(HIGT);
    $('header').height(HIGT*0.1);
    $('footer').height(HIGT*0.1);
    $('.banner').width(WHIT).height(HIGT*0.8);
    $('.contentBox').width(WHIT).height(HIGT*0.8);
    $('.svgBox').width(WHIT*0.72).height(HIGT*0.75);
    $(window).resize(function(){
        var WHIT = $(window).width();
        var HIGT = $(window).height();
        $('.mainBox').width(WHIT).height(HIGT);
        $('header').height(HIGT*0.1);
        $('footer').height(HIGT*0.1);
        $('.banner').width(WHIT).height(HIGT*0.8);
        $('.contentBox').width(WHIT).height(HIGT*0.8);
        $('.svgBox').width(WHIT*0.72).height(HIGT*0.75);
    });

    if( WHIT < 769 ){
        $('.banner .swiper-slide').find('.subvideos').remove();
        $('.musics').remove();



    }else{

    }
    $(window).load(function(){
        $('.subSvg').addClass('active');
        $(function(){
            $('.banner .swiper-slide video').eq(0).play();
        })
    });
});
//服务列表弹窗
//$(function(){
//    var Pop =$('.pop-up-layer');
//    $('.ourList li').click(function(){
//        var idexs = $(this).index();
//        Pop.stop().fadeIn(300);
//        Pop.find('.square').eq(idexs).addClass('active');
//    });
//    $('.subPop').click(function(){
//        var idexs = $(this).index();
//        Pop.stop().fadeOut(300);
//        Pop.find('.square').removeClass('active');
//    });
//});
////iframe详情页调用弹窗
//$(function(){
//    var DETAIS = $('.deTails');
//    var DISS =$('.bgdetais');
//    var GBSS =$('.gbs');
//    //隐藏
//    DISS.click(function(){
//        DETAIS.stop().fadeOut();
//        $('#iframe').attr('src','');
//
//    });
//    GBSS.click(function(){
//        DETAIS.stop().fadeOut();
//        $('#iframe').attr('src','');
//
//    });
//});
////音乐播放控制
//$(function(){
//    var clicks = $('.laba');
//    var STOP = $('#MUSICS');
//    clicks.toggle(function(){
//        STOP.trigger('play');
//    },function(){
//        STOP.trigger('pause');
//    });
//});
//调用参数
$(function(){
    var swiper = new Swiper('.banner', {
        nextButton: '.banner .ban_next',
        prevButton: '.banner .ban_prev',
        effect : 'fade',
        slidesPerView : 1,
        loop:true,
        speed:1000,
    });
    var swiper = new Swiper('.aboutComp', {
        pagination : '.aboutComp .swiper-pagination',
        paginationClickable :true,
        nextButton: '.aboutComp .json_next',
        prevButton: '.aboutComp .json_prev',
        slidesPerView : 1,
        speed:800,
    });
    var swiper = new Swiper('.conutsus', {
        nextButton: '.conutsus .json_next',
        prevButton: '.conutsus .json_prev',
        slidesPerView : 1,
        speed:800,
    });
    var swiper = new Swiper('.ourParts', {
        nextButton: '.ourParts .parts_next',
        prevButton: '.ourParts .parts_prev',
        slidesPerView : 1,
        speed:800,
    });
});



