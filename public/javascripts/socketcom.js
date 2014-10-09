$(document).ready(function(){
    /**
    * Socket.io comunication
    */

    window.io = io.connect();

    io.on('connect', function(socket){
        io.emit('hi server');
    });

    io.on('hi', function(data){
        console.log(data);
    });

});