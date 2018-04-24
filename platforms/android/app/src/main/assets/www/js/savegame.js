
var UserConf = [
	{controlls	        : 0,music		        : 0,vibrate             : 0,performance         : 0,username            : "anonimo",id                  : 0,lvl                 : 4,powers              : 5,actualmap           : 6,actualpositionx     : 0,actualpositiony     : 0,actualpositiony     : 0,actualpositiony     : 0}
];

function startSave() {
	
		window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
        	dir.getFile("Save.txt", {create:true}, function(file) {
            	SaveOb = file;
				console.log('Save working');
                //UserConf = readSave();
        	});
    	});
	
}

function writeSave() {
    
    
    if(!SaveOb) return false;
    
    var Save = UserConf;
    console.log(Save);
    
    SaveOb.createWriter(function(fileWriter) {
        
        fileWriter.truncate(0);
        
        var blob = new Blob(Save, {type:'text/plain'});
        fileWriter.write(blob);
        
    });
    
}

function readSave() {
	
    if(!SaveOb) return false;
    SaveOb.file(function(file) {
        var reader = new FileReader();

        reader.onloadend = function(e) {
            
            return this.result;
            
        };

        reader.readAsText(file);
    });

}

function resetSave() {
	
	SaveOb.remove(function(){
                  startSave();
              },function(error){
                  startSave();
              },function(){
                  startSave();
              });
	
}

function mostrarInfo() {
    
    alert(
        
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