
var ctx = null;

var pasoscount = 0;

var tileW = 40, tileH = 40;
var mapW = 50, mapH = 50;
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