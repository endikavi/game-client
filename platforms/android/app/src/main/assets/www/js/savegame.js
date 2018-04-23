function startSave() {
	
		window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
        	dir.getFile("Save.txt", {create:true}, function(file) {
            	SaveOb = file;
				console.log('Save working');
				writeSave("App Save started");
        	});
    	});
	
}

function writeSave(str) {
    
    if(!SaveOb) return;
    var Save = str + " [" + (new Date()) + "]\n";
    console.log(Save);
    SaveOb.createWriter(function(fileWriter) {
        
        fileWriter.seek(fileWriter.length);
        
        var blob = new Blob([Save], {type:'text/plain'});
        fileWriter.write(blob);
        
    });
}

function readSave() {
	
    SaveOb.file(function(file) {
        var reader = new FileReader();

        reader.onloadend = function(e) {
            console.log(this.result);
			alert(this.result);
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