/**
 * Created by Administrator on 2017/3/27.
 */
$(function(){
    //���뻬������Ӧ����ɫ
    $('.swiper-slide>a').mouseover(function(){
        $(this).css({background:'#282828'});
            $(this).find('i').css('display','none');
            $(this).find('span').css('display','block');
    }).mouseout(function(){
        $(this).css({'background':'white'});
        $(this).find('i').css({'display':'block','line-height':'.9rem'});
        $(this).find('span').css('display','none');
    })

    //����������Ӧ����Ϣ��
    $btn = $('.swiper-slide>a');
    $btn.click(function(){
        var index = $btn.index(this);//��ȡ��ǰaԪ��
        //$('.square').eq(index).css('display','block');
        $('.square').eq(index).toggle();
        $('.square').eq(index).addClass("active");
    })

    $('svg').mouseout(function(){
        var index = $btn.index(this);//��ȡ��ǰaԪ��
        $('.square').css('display','none');
        $('.square').eq(index).removeClass("active");
    })


})