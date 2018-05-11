var socket;

function multiplayer(){
    
    socket = io();
    
    socket.emit('id', "1");
    
    socket.on('position', function(msg){
        
        console.log('cambiando posicion');
        
    })
    
}

function sendPosition(){
    
    socket.emit('position', 'posicion cambiada');
    
}