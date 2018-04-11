function CharSprite(data) {
	
	this.animated	= data.length > 1;
	this.frameCount	= data.length;
	this.duration	= 0;
	this.loop		= false;
	
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
		
	}
	else if(this.animated) {
		
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
	
	ctx.drawImage(charTileset,
		this.frames[frameIdx].x, this.frames[frameIdx].y,
		this.frames[frameIdx].w, this.frames[frameIdx].h,
		x + offset[0], y + offset[1],
		this.frames[frameIdx].w, this.frames[frameIdx].h);
	
};