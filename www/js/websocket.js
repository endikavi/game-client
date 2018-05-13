var socket;
var multiplayerOn;
var moving = false;
function multiplayer(){
	
	multiplayerOn = true
	
	console.log('multijugador comenzado')
    
    socket = io("https://gioserver.herokuapp.com",{transports:["websocket"]});
    
    socket.emit('id', UserConf[1].multiplayerid);
    
    socket.on('walking', function(msg){
        
        console.log('cambiando posicion');
        
    })
	
	socket.on('playersList', function(msg){
        
        console.log(msg);
        
    })
	
	socket.on('roomsList', function(msg){
        
        console.log(msg);
        
    })
	
	socket.on('allGlobalChats', function(msg){
        
        console.log(msg);
        
    })
	
	socket.on('globalChat', function(msg){
	
		$$('#GCmessages').append('<li>'+msg+'</li>');
		
	})
    
}

function sendGlobalChat(){
	
	socket.emit('globalChat', $$('#m').val());
	
	$$('#m').val('');
    
}

function sendRoomChat(){
	
	
    
}

function enterRoom(){
	
	
    
}

function createRoom(){
	
	
    
}

function exitRoom(){
	
	
    
}

/*
if (player.tileFrom != msg && moving){
			
	player.tileTo[0]=msg[0];
	player.tileTo[1]=msg[1];
	player.timeMoved = gameTime;
	moving = false;
}*/