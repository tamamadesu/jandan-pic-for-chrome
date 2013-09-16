// chrome提示
var Msg = {
    createNotification:function(txt,time){
        var notification = webkitNotifications.createNotification(
                  '/icons/icon.png',  // icon url - can be relative
                  '李鞋童：',  // notification title
                  txt // notification body text
        );
        notification.show();
        time =  time || 2000;
        setTimeout(function(){
            Msg.clear(notification);
        },time);
        return this;
    },
    getBackgroundPage:function(){
        return chrome.extension.getBackgroundPage();
    },
    setTip:function(num){
        var title = "",
            num   = num || "";
        if(num){
            title = "您有"+num+"条未读信息";
        }
        //设置鼠标经过title
        chrome.browserAction.setTitle({"title":title});
        //背景颜色
        chrome.browserAction.setBadgeBackgroundColor({color:'#ff0000'});
        //将实时气温显示在icon上面
        chrome.browserAction.setBadgeText({text:num});
        return this;
    },
    clear:function(self){
        Msg.setTip('');
        self.cancel();
    },
    playSound:function(){
        $("#tip").get(0).play();
        return this;
    }
}
$(function(){
    // setInterval(function(){
    // // setTimeout(function(){
    //     Msg.createNotification("注意坐姿！！！",10000).playSound();
    // },300000);
})








