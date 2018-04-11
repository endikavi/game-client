
var mainMap = [];

var roofList = [];

var mapId = 0001;

var mapTileData = new TileMap();

function populateMap() {
	
	if(mapId == 0001) {populateMap0001()}
    
    if(mapId == 0002) {populateMap0002()}

	if(mapId == 0003) {populateMap0003()}
    
    if(mapId == 0004) {populateMap0004()}
    
    if(mapId == 000) {populateMap000()}
    
}

function setMap() {
	
	if(mapId == 0001) {setMap0001()}

    if(mapId == 0002) {setMap0002()}
    
    if(mapId == 0003) {setMap0003()}
    
    if(mapId == 0004) {setMap0004()}
    
    if(mapId == 000) {setMap000()}
    
}

function TileMap() {
	
	this.map	= [];
	this.w		= 0;
	this.h		= 0;
	this.levels	= 4;
	
}

TileMap.prototype.buildMapFromData = function(d, w, h) {
	
	this.w		= w;
	this.h		= h;
	
	if(d.length!=(w*h)) { return false; }
	
	this.map.length	= 0;
	
	for(var y = 0; y < h; y++) {
		
		for(var x = 0; x < w; x++) {
			
			this.map.push( new Tile(x, y, d[((y*w)+x)]) );
			
		}
	}
	
	return true;
};

TileMap.prototype.addRoofs = function(roofs) {
	
	for(var i in roofs) {
		
		var r = roofs[i];
		
		if(r.x < 0 || r.y < 0 || r.x >= this.w || r.y >= this.h ||
			(r.x+r.w)>this.w || (r.y+r.h)>this.h ||
			r.data.length!=(r.w*r.h)) {
			
			continue;
			
		}
		
		for(var y = 0; y < r.h; y++) {
			
			for(var x = 0; x < r.w; x++) {
				
				var tileIdx = (((r.y+y)*this.w)+r.x+x);
				
				this.map[tileIdx].roof = r;
				
				this.map[tileIdx].roofType = r.data[((y*r.w)+x)];
			}
		}
	}
};