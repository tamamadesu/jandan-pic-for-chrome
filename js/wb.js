
var Loading = {
    start:function(){
        $(".main").hide();
        $(".loading").show();
    },
    end:function(){
        $(".main").show();
        $(".loading").hide();
    }
}

function getBodyElement(data){
    var first = data.indexOf('<body>');
    var end   = data.indexOf('</body>');
    return $(data.substring(first,end+7));
}

function getList(data){
    var  $data = getBodyElement(data);
    var $list = $data.find(".commentlist li");
    return $list;
}

function getPages(data){
    var $data = getBodyElement(data);
        pages = $data.find(".comments").eq(0).find("p");

    $(pages).children().wrap("<li />");
    $(".pagination ul").html($(pages).html().replace(" … ",""));
    $(".pagination").delegate("a","click",function(){
        var href = $(this).attr("href");
        console.log(href);
        syncGetData(href);
        return false;
    })

}
function syncGetData(url){
    Loading.start();
    $.get(url,function(data){
        var $list = getList(data),
            str   = '';
        $list.each(function(i,item){
            var txt = $.trim($(item).find("p").html());
            if(txt){
                str += "<li class='panel'>"+txt+"</li>";
            }
        });
        getPages(data);
        $("#show").html(str);
        Loading.end();
    });
}
$(function(){
    // syncGetData('http://jandan.net/pic/');
    var url = 'http://jandan.net/pic';
    $("#select li a").click(function(){
        $("#select li").removeClass("active");
        $(this).parent('li').addClass("active");
        url = $(this).parent('li').attr("id");
        syncGetData(url);
    })
    syncGetData(url)
})

// var background = chrome.extension.getBackgroundPage();
