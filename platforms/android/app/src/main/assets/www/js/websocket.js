var socket;
var multiplayerOn;
var moving = false;
var chats = {};
var players = {};
var rooms = {};
rooms.list ={};
chats.room = {};
chats.global = {};
function multiplayer(){
	
	multiplayerOn = true
	
	console.log('multijugador comenzado')
    
    socket = io("https://gioserver.herokuapp.com",{transports:["websocket"]});
    
    socket.emit('id', UserConf[1].multiplayerid);
    
    socket.on('walking', function(msg){
        
        console.log('cambiando posicion');
        
    })
	
	socket.on('playersList', function(msg){
        
        players.list = msg;
        console.log(msg);
        
    })
	
	socket.on('roomsList', function(msg){
        
        rooms.list = msg;
        console.log(msg);
        
    })
	
	socket.on('allGlobalChats', function(msg){
        
        chats.global = msg;
        console.log(msg);
        
    })
	
	socket.on('globalChat', function(msg){
        
		chats.global.push(msg);
		printGlobalChat(msg);
		
	})

	socket.on('allRoomChats', function(msg){
        
        chats.room = msg;
        console.log(msg);
        
    })
	
	socket.on('roomChat', function(msg){
        
        chats.room.push(msg);
		printRoomChat(msg);
		
	})
    
    socket.on('newRoom', function(msg){
        console.log('nueva sala creada');
        console.log(msg);
        rooms.list[msg[0]] = msg[1]
        if(UserConf[1].roomid == undefined){
            printRoom(msg);
        }
	})
    
    socket.on('enterRoom', function(msg){
        console.log('entraste a la sala'+msg);
        if(UserConf[1].roomid != undefined){
            printYourRoom(msg);
        }
	})
    
    
    
}

function printGlobalChat(msg){
	
    $$('#GCmessages').append('<li><div class="item-content"><div class="item-inner resizable"><div class="item-title">'+msg[2]+':<div class="item-header"><p class="popup-text">'+msg[0]+' </p></div><div class="item-footer">'+msg[1]+'</div></div><div class="item-after">'+msg[3]+'</div></div></div></li>');
	
}

function printRoomChat(msg){
	
    $$('#GCmessages').append('<li><div class="item-content"><div class="item-inner resizable"><div class="item-title">'+msg[2]+':<div class="item-header"><p class="popup-text">'+msg[0]+' </p></div><div class="item-footer">'+msg[1]+'</div></div><div class="item-after">'+msg[3]+'</div></div></div></li>');
	
}

function printRoom(msg){
	        
    console.log(msg)
    
    $$('#GCmessages').append('<li><div class="item-content"><div class="item-inner resizable"><div class="item-title">Sala '+ msg[0] +':<div class="item-header"><p class="popup-text">'+msg[1].chief+' </p></div><div class="item-footer">'+msg[1].people.length+'/4 </div></div><div class="item-after"><button type="button" class="button col button-round btn color-white"id="'+ msg[0] +'">Entrar</button></div></div></div></li>');
    
    $$('#'+msg[0]).on('click',function(){
        
        console.log(this.attr('id'));
        //UserConf[1].roomid = $$('#m').val();
        
    })
    
	
}

function printYourRoom(msg){
	        
    console.log(msg)
    
    $$('#GCmessages').append('<li><div class="item-content"><div class="item-inner resizable"><div class="item-title">Sala '+UserConf[1].roomid+':<div class="item-header"><p class="popup-text">'+msg.chief+' </p></div><div class="item-footer">'+msg.people.length+'/4 </div></div><div class="item-after"><button type="button" class="button col button-round btn color-white"id="startMG">Empezar</button></div></div></div></li>');
	
}

function sendGlobalChat(){
	
	var timenow = new Date();
	
	time = timenow.getFullYear()+'-'+timenow.getMonth()+'-'+timenow.getDate()+' '+timenow.getHours()+':'+timenow.getMinutes();
	
	socket.emit('globalChat', [$$('#m').val(), UserConf[1].multiplayerid, UserConf[1].username, time]);
	
	$$('#m').val('');
    
}

function sendRoomChat(){
	
    var timenow = new Date();
	
	time = timenow.getFullYear()+'-'+timenow.getMonth()+'-'+timenow.getDate()+' '+timenow.getHours()+':'+timenow.getMinutes();
	
	socket.emit('roomChat', [$$('#m').val(), UserConf[1].multiplayerid, UserConf[1].username, time]);
	
	$$('#m').val('');
    
}

function enterRoom(){
    
    socket.emit('enterRoom', [UserConf[1].roomid, UserConf[1].multiplayerid]);
    
	$$('#GCmessages').html('');
    $$('#multiInput').html('');
}

function createRoom(){
    
    UserConf[1].roomid = $$('#m').val();
	
    socket.emit('newRoom', [$$('#m').val(), UserConf[1].multiplayerid]);
	
    $$('#GCmessages').html('');
    $$('#multiInput').html('');
    
}

function exitRoom(){
	
	socket.emit('exitRoom', [UserConf[1].roomid, UserConf[1].multiplayerid, UserConf[1].username]);
    
}

/*
if (player.tileFrom != msg && moving){
			
	player.tileTo[0]=msg[0];
	player.tileTo[1]=msg[1];
	player.timeMoved = gameTime;
	moving = false;
}*/