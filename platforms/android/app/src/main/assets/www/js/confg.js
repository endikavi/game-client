
    
var ctx = null;

var pasoscount = 0;

var tileW = 40, tileH = 40;

var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

var gameTime = 0;

var gameSpeeds = [
	
	   {name:"Normal", mult:1.2},
	   {name:"Slow", mult:0.3},
	   {name:"Fast", mult:3},
	   {name:"Paused", mult:0}

];

var  currentSpeed = 0;

var objectCollision = {
	
        none		: 0,
        solid		: 1,
        push        : 2
	
};

function resetCanvas() {
    
    ctx = null;

    pasoscount = 0;

    currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

    tileset = null, tilesetURL = "img/tileset.png", tilesetLoaded = false;

    gameTime = 0;
	
    currentSpeed = 0;
	
}