
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {

        mainMenuControlls();
        
    }

};

app.initialize();

function exitFromApp(){
    
    navigator.app.exitApp();
    
}