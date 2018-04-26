
var UserConf; /*= [
        {
        
            controlls: 0,
            music: 0,
            vibrate: 0,
            performance: 0,
            
        },
                
        {
            
            username: "anonimo",
            email: undefined,
            premiun: 0,
            mobileid: undefined,
            mobileinfo: undefined,
        
        },
        
        {
            lvl: 1,
            actualmap: 0001,
            actualpositionx: 3,
            actualpositiony: 3
        
        },
        
        {
            lvl: 1,
            actualmap: 0001,
            actualpositionx: 3,
            actualpositiony: 3
        
        },
        
        {

            lvl: 1,
            actualmap: 0001,
            actualpositionx: 3,
            actualpositiony: 3
        
        }
    ];*/

function readSave() {
    
    userdata=localStorage.getItem('savedata');
    userdata=JSON.parse(userdata);
    
    if( userdata != null){
        
        UserConf = userdata;
        
    }else{
        
        resetSave();
        
    }
    
    console.log("Usuario: "+UserConf[1].username);

}

function resetSave() {
    
    localStorage.clear();
    
    UserConf = [
        {
        
            controlls: 0,
            music: 0,
            vibrate: 0,
            performance: 0,
            
        },
                
        {
            
            username: "anonimo",
            email: undefined,
            premiun: 0,
            mobileid: undefined,
            mobileinfo: undefined,
        
        },
        
        {
            lvl: 1,
            actualmap: 0001,
            actualpositionx: 3,
            actualpositiony: 3
        
        },
        
        {
            lvl: 1,
            actualmap: 0001,
            actualpositionx: 3,
            actualpositiony: 3
        
        },
        
        {

            lvl: 1,
            actualmap: 0001,
            actualpositionx: 3,
            actualpositiony: 3
        
        }
    ];
    
    TakeMobileInfo();
        
    localStorage.setItem("savedata", JSON.stringify(UserConf));
    console.log('Nuevo usuario');
	
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
    
	console.log(navigator.vibrate(2000));
    
}