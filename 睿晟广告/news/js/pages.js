
$('.newList>li').click(function(){
    $('.outBox').css('display','block');
    for(var i=0;i<$('.newList>li').length;i++){
        if($( ".newList>li" ).index( $(this)[0] ) == i){
            $('iframe').attr('src','2017/0223/'+i+'.html');
        }
    }
});
$('.outBox').click(function(){
    $('.outBox').css('display','none');
});
