/**
 * Created by Administrator on 2017/3/27.
 */
$(function(){
    //滑入滑出有相应的颜色
    $('.swiper-slide>a').mouseover(function(){
        $(this).css({background:'#282828'});
            $(this).find('i').css('display','none');
            $(this).find('span').css('display','block');
    }).mouseout(function(){
        $(this).css({'background':'white'});
        $(this).find('i').css({'display':'block','line-height':'.9rem'});
        $(this).find('span').css('display','none');
    })

    //点击弹出相对应的信息框
    $btn = $('.swiper-slide>a');
    $btn.click(function(){
        var index = $btn.index(this);//获取当前a元素
        //$('.square').eq(index).css('display','block');
        $('.square').eq(index).toggle();
        $('.square').eq(index).addClass("active");
    })

    $('svg').mouseout(function(){
        var index = $btn.index(this);//获取当前a元素
        $('.square').css('display','none');
        $('.square').eq(index).removeClass("active");
    })


})