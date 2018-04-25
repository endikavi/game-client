
var UserConf;

readSave()

function readSave() {
    
    userdata=localStorage.getItem('savedata');
    userdata=JSON.parse(userdata);
    
    if( userdata != null){
        
        UserConf = userdata;
        
    }else{
        
        resetSave();
        
    }
    
    console.log("Usuario: "+UserConf[0].username);

}

function resetSave() {
    
    localStorage.clear();
    
    UserConf = [{
        controlls: 0,
        music: 0,
        vibrate: 0,
        performance: 0,
        username: "anonimo",
        id: 0,
        lvl: 4,
        powers: 5,
        actualmap: 6,
        actualpositionx: 0,
        actualpositiony: 0,
        actualpositiony: 0,
        actualpositiony: 0
        }];
        
    localStorage.setItem("savedata", JSON.stringify(UserConf));
    console.log('Nuevo usuario');
	
}

function mostrarInfo() {
    
    console.log(
        
        'Fabricante: ' + device.manufacturer + '\n' +
        'Cordova: ' + device.cordova + '\n' +
        'Modelo: ' + device.model + '\n' +
        'Plataforma: ' + device.platform + '\n' +
        'Numero unico: ' + device.uuid + '\n' +
        'Version: ' + device.version + '\n' +
        'Es emulacion: ' + device.isVirtual + '\n' +
        'Serial: ' + device.serial 
        
         );
    
}

function vibrate() {
    
	console.log(navigator.vibrate(2000));
    
}