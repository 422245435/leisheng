/**
 * Created by Administrator on 2017/3/28.
 */
////��ȡ��ȡ�ͻ��̱������
//var user = document.getElementsByClassName('swiper-slide');
////��ȡ������ͷ
//var btn = document.getElementsByClassName('btn');
//
//for(var i=0;i<btn.length;i++){
//    btn[i].index=i;
//    btn[i].onclick=function(){
//        for(var j=0;j<user.length;j++){
//            user[j].style.display="none";
//        }
//        user[this.index].style.display="block";
//
//    }
//}

$(function(){
        var $btn = $('.btn');
        $btn.click(function(){
            $(this).addClass('active').siblings().removeClass('active');
            var index = $btn.index(this);
            $('.swiper-slide').eq(index).show().siblings().hide();
        })
})




