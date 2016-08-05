define(['jquery'],function($){
    $("#topo").hide();
    $("#nav").on('click',function(){
        $("#topo").fadeIn();
    })
    
    $('#topo ul li dd').hide();
    var i=$('option:selected').index();
    Show();
    function Show(){
        i=$('option:selected').index();
        $('#topo ul li dd').hide();
        $('#topo ul li').eq(i).find('dd').slideDown()
    }   
    $('select').on('change',function(){
        Show();      
    })
    $('#tab').find('div').eq(1).show().siblings('div').hide();
    $("#tab ul li").on('click',function(){
        var n=$(this).index();
        $(this).addClass('active').siblings().removeClass();
        $('#tab').find('div').eq(n).show().siblings('div').hide();
    })
    $('#ale button').on('click',function(){
        $("#ale").fadeOut();
    })
    $('#footer>span').toggle(function(){
        $(this).siblings('img').fadeOut();
    },function(){
        $(this).siblings('img').fadeIn();
    })
})