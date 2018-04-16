
var tilesetLoaded = true;

var tileset = new Tileset("img/tileset.png");

var playerTileset = new Tileset("img/player.png");

var water = new Tileset("img/water.png");

function Tileset(src){
	
	this.T = new Image();
	this.T.loaded = false;
	this.T.src = src;
	
	this.T.onerror = function() {
		
		ctx = null;
		alert("Failed loading: " + src);
		tilesetLoaded = false;
		
	};
	
	this.T.onload = function() { this.loaded = true; };
	
}

function LoadSprites(){}

function Sprite(img,data) {
	
	this.img = img
    
	this.animated	= data.length > 1;
	this.frameCount	= data.length;
	this.duration	= 1;
	this.loop		= true;
	
	if(data.length > 1) {
		
		for(var i in data) {
			
			if(typeof data[i].d=='undefined') {
				
				data[i].d = 100;
				
			}
			
			this.duration+= data[i].d;
			
			if(typeof data[i].loop!='undefined') {
				
				this.loop = data[i].loop ? true : false;
				
			}
		}
	}
	
	this.frames		= data;
	
}

Sprite.prototype.draw = function(t, x, y) {
	
	var frameIdx = 0;
	
	if(!this.loop && this.animated && t>=this.duration) {
		
		frameIdx = (this.frames.length - 1);
		
	}else if(this.animated) {
		
		t = t % this.duration;
		var totalD = 0;
		
		for(var i in this.frames) {
			
			totalD+= this.frames[i].d;
			frameIdx = i;
			
			if(t<=totalD) {
				
				break;
				
			}
		}
	}
	
	var offset = (typeof this.frames[frameIdx].offset=='undefined' ? [0,0] : this.frames[frameIdx].offset);
	ctx.drawImage(this.img.T,
		this.frames[frameIdx].x, this.frames[frameIdx].y,
		this.frames[frameIdx].w, this.frames[frameIdx].h,
		x + offset[0], y + offset[1],
		this.frames[frameIdx].w, this.frames[frameIdx].h);
	
};