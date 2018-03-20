
var ctx = null;

var tileW = 40, tileH = 40;
var mapW = 20, mapH = 21;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0, lastFrameTime = 0;

var tileset = null, tilesetURL = "tileset.png", tilesetLoaded = false;

var gameTime = 0;
var gameSpeeds = [
	{name:"Normal", mult:1},
	{name:"Slow", mult:0.3},
	{name:"Fast", mult:3},
	{name:"Paused", mult:0}
];
var currentSpeed = 0;

var objectCollision = {
	none		: 0,
	solid		: 1,
    push        : 2
};

var directions = {
	up		: 0,
	right	: 1,
	down	: 2,
	left	: 3
};

var keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false,
	80 : false
};