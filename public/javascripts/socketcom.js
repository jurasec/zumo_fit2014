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

    /*****  Button events *****/

    $('#up-btn').click(function () {
        var btn = $(this)
        console.log("click Adelante");
        io.emit('fwd');
    });

    $('#down-btn').click(function () {
        var btn = $(this)
        console.log("click btn Reversa");
        io.emit('rev');
    });

    $('#left-btn').click(function () {
        var btn = $(this)
        console.log("click btn Izquierda");
        io.emit('left');
    });

    $('#right-btn').click(function () {
        var btn = $(this)
        console.log("click btn Derecha");
        io.emit('right');
    });

    $('#stop-btn').click(function () {
        var btn = $(this)
        console.log("click btn Detener");
        io.emit('stop');
    });

});