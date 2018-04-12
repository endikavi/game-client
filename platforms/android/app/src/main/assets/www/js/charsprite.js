
var tileset = null, tilesetURL = "img/tileset.png", tilesetLoaded = false;

var charTileset = null, charTilesetURL = "img/mainchar.png", charTilesetLoaded = false;

var mobTileset = null, mobTilesetURL = "img/mobchar.png", mobTilesetLoaded = false;

var ImageSrc = "";

function LoadSprites(){
    
    ////////////////////////////////////////////////////////////////////
	tileset = new Image();
	tileset.onerror = function() {
		
		ctx = null;
		alert("Failed loading map and item tileset.");
		
	};
	
	tileset.onload = function() { tilesetLoaded = true; };
	
	tileset.src = tilesetURL;
    ////////////////////////////////////////////////////////////////////
    charTileset = new Image();
	charTileset.onerror = function() {
		
		ctx = null;
		alert("Failed loading main character tileset.");
		
	};
	
	charTileset.onload = function() { charTilesetLoaded = true; };
	
	charTileset.src = charTilesetURL;
    ////////////////////////////////////////////////////////////////////
    mobTileset = new Image();
	mobTileset.onerror = function() {
		
		ctx = null;
		alert("Failed loading enemy character tileset.");
		
	};
	
	mobTileset.onload = function() { charTilesetLoaded = true; };
	
	mobTileset.src = charTilesetURL;
    
}

function CharSprite(src,data) {
	
    ImageSrc = src;
    
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

CharSprite.prototype.draw = function(t, x, y) {
	
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
	
	ctx.drawImage(ImageSrc,
		this.frames[frameIdx].x, this.frames[frameIdx].y,
		this.frames[frameIdx].w, this.frames[frameIdx].h,
		x + offset[0], y + offset[1],
		this.frames[frameIdx].w, this.frames[frameIdx].h);
	
};