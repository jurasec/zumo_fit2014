$(document).ready(function(){
    /**
    * Socket.io comunication
    */

    window.io = io.connect();

    io.on('connect', function(socket){
        console.log('hi');
        io.emit('hi server');
    });

    io.on('messages', function(data){
        console.log(data);
    });

});