var socket = io.connect("http://192.168.0.105:8080");

//socket.emit('add',{"name":'玩家'+Math.random()})

socket.on('added',function(data){
    $("body").append(data.name);
});


socket.on('all',function(data){
    $("body").append(data.will);
});


socket.on('private message',function(data){
    // $("body").append(data.name);
});


$("#submit").click(function(){
    var name = $("input[name='username']").val();
    socket.emit("add-game",{name:name});
})


socket.on("hell-other",function(data){
    $("body").append("<br/>"+data);
})