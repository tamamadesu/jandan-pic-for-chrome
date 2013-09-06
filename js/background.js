// chrome提示
var Msg = {
    createNotification:function(txt,time){
        var notification = webkitNotifications.createNotification(
                  '/icons/icon.png',  // icon url - can be relative
                  '李鞋童：',  // notification title
                  txt // notification body text
        );
        console.log(webkitNotifications)
        notification.show();
        time =  time || 2000;
        setTimeout(function(){
            Msg.clear(notification);
        },time);
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
    },
    clear:function(self){
        Msg.setTip('');
        self.cancel();
    }
}
// Msg.createNotification("注意坐姿！！！",1000);
// Msg.setTip('4');

var Socket = window.WebSocket;
console.log(window)







