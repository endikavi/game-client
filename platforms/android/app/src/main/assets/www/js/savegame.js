function appInit(){
	
	userdata=localStorage.getItem('savedata');
    userdata=JSON.parse(userdata);
    
    if( userdata != null){
        
        UserConf = userdata;
		
        if (UserConf[0].online) {
			
			multiplayer();
			
		}
		
		mainMenu();
		
    }else{
        
        TakeMobileInfo();
        localStorage.setItem("savedata", JSON.stringify(UserConf));
        newUserMenu();

    }
	
}

function TakeMobileInfo() {
    
    UserConf[1].mobileid = device.uuid
    
    UserConf[1].mobileinfo = {
        
        Fabricante:     device.manufacturer,
        Cordova:        device.cordova,
        Modelo:         device.model,
        Plataforma:     device.platform,
        Version:        device.version,
        Emulacion:      device.isVirtual,
        Serial:         device.serial,
        
    }
    
}

function vibrate() {
    if (UserConf[0].vibrate) {
		console.log(navigator.vibrate(2000));
	}
}

function startGame(savename){
	
	UserConf.push({
		
            lvl: 1,
            name:savename,
            inventory:"",
            actualmap: 0001,
            actualpositionx: 3,
            actualpositiony: 3
        
	})
	
	addGameCanvas();
	
}

function loadGame(){
	
	
	
}

var UserConf = [
    
        {
        
            controllsR: 0,
            controllsL: 1,
            music: true,
            vibrate: true,
            performance: true,
            online: true,        
            
        },
                
        {
            
            username: undefined,
            multiplayerid: undefined,
            roomid: undefined,
            mobileid: undefined,
            mobileinfo: undefined
        
        }
    
    ];