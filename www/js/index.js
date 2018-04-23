
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {

        mainMenuControlls();
        
        console.log(navigator.vibrate);
        console.log(device.cordova);
        console.log(cordova.file);
        
    }

};

app.initialize();

function exitFromApp() {
    
    navigator.app.exitApp();
    
}