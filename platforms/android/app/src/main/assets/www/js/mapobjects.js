var objectTypes = {
	
	1 : {
		name : "Box",
		sprite : new Sprite([{x:40,y:160,w:40,h:40}]),
		offset : [0,0],
		collision : objectCollision.solid,
		zIndex : 1
	},
	2 : {
		name : "Broken Box",
		sprite : new Sprite([{x:40,y:200,w:40,h:40}]),
		offset : [0,0],
		collision : objectCollision.none,
		zIndex : 1
	},
	3 : {
		name : "Tree top",
		sprite : new Sprite([{x:80,y:160,w:80,h:80}]),
		offset : [-20,-20],
		collision : objectCollision.solid,
		zIndex : 3
	},
    4 : {
		name : "Box pushable",
		sprite : new Sprite([{x:40,y:160,w:40,h:40}]),
		offset : [0,0],
		collision : objectCollision.push,
		zIndex : 1
	}
};

function MapObject(nam,nt) {
    
	this.name	= nam;
	this.x		= 0;
	this.y		= 0;
	this.type	= nt;
	
}

MapObject.prototype.placeAt = function(nx, ny) {
	
	if(mapTileData.map[toIndex(this.x, this.y)].object==this) {
		
		mapTileData.map[toIndex(this.x, this.y)].object = null;
		
	}
	
	this.x = nx;
	this.y = ny;
	
	mapTileData.map[toIndex(nx, ny)].object = this;
	
};