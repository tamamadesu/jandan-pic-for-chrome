function dynamic(style,src){
    var style = (style == "js" ? "script" : "link");
        type  = style == "script" ? "text/javascript" : "stylesheet";

        scr      = document.createElement(style);  
        scr.type = type;  
        scr.src  = src+"?a="+Math.random();

    document.getElementsByTagName('head').item(0).appendChild(scr); 
}
dynamic("js",'js/wb.js');