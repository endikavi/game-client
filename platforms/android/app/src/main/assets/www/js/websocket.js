var socket;
var multiplayerOn;
var moving = false;
var chats = {};
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
        chats.global = msg
        console.log(msg);
        
    })
	
	socket.on('globalChat', function(msg){
		
		printGlobalChat(msg);
		
	})
    
}

function printGlobalChat(msg){
	
		$$('#GCmessages').append('<li><div class="item-content"><div class="item-inner resizable"><div class="item-title">'+msg[2]+':<div class="item-header"><p class="popup-text">'+msg[0]+' </p></div><div class="item-footer">'+msg[1]+'</div></div><div class="item-after">'+msg[3]+'</div></div></div></li>');
	
}

function sendGlobalChat(){
	
	var timenow = new Date();
	
	time = timenow.getFullYear()+'-'+timenow.getMonth()+'-'+timenow.getDate()+' '+timenow.getHours()+':'+timenow.getMinutes();
	
	socket.emit('globalChat', [$$('#m').val(), UserConf[1].multiplayerid, UserConf[1].username, time]);
	
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