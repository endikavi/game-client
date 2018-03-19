//Maps and selector


//mapa 1
var gameMap = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 2, 5, 5, 5, 5, 0, 5, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 5, 5, 5, 0, 5, 5, 5, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 5, 0, 5, 5, 5, 5, 5, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 5, 5, 5, 5, 0, 5, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 5, 5, 0, 5, 5, 5, 5, 0, 4, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
	0, 5, 5, 0, 5, 5, 0, 2, 0, 4, 4, 4, 1, 1, 1, 0, 2, 2, 2, 0,
	0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 4, 1, 1, 1, 0, 2, 2, 2, 0,
	0, 5, 5, 5, 5, 5, 5, 2, 0, 1, 1, 4, 1, 1, 1, 0, 2, 2, 2, 0,
	0, 5, 5, 5, 5, 0, 5, 5, 0, 1, 1, 4, 1, 1, 0, 0, 0, 2, 0, 0,
	0, 5, 5, 0, 5, 5, 5, 5, 0, 1, 1, 4, 1, 1, 0, 2, 2, 2, 2, 0,
	0, 5, 5, 5, 5, 5, 0, 5, 0, 1, 4, 4, 1, 1, 0, 2, 2, 2, 2, 0,
	0, 5, 5, 5, 0, 5, 5, 5, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 5, 5, 5, 0, 5, 5, 0, 0, 4, 4, 1, 1, 1, 0, 2, 2, 2, 2, 0,
	0, 0, 5, 5, 5, 5, 5, 5, 0, 4, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0,
	0, 5, 5, 5, 5, 5, 5, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0,
	0, 5, 5, 5, 5, 5, 5, 5, 0, 2, 2, 9, 2, 2, 1, 1, 1, 1, 1, 0,
	0, 5, 5, 5, 5, 5, 5, 5, 0, 2, 2, 8, 2, 2, 1, 1, 1, 1, 1, 0,
	0, 0, 0, 5, 5, 0, 5, 0, 0, 2, 2, 7, 2, 2, 1, 1, 1, 1, 1, 0,
    0, 5, 5, 5, 0, 0, 5, 5, 2, 2, 2, 6, 2, 2, 1, 1, 1, 1, 1, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
//Techos de mapa 1
var roofList = [
	{ x:1, y:8, w:7, h:8, data: [
		10, 10, 10, 11, 11, 11, 11,
		10, 10, 10, 11, 11, 11, 11,
		10, 10, 10, 11, 11, 11, 11,
		10, 10, 10, 11, 11, 11, 11,
		10, 10, 10, 11, 11, 11, 11,
		10, 10, 10, 11, 11, 11, 11,
		10, 10, 10, 11, 11, 11, 11,
        10, 10, 10, 11, 11, 11, 11
	]}/*,
	{ x:15, y:5, w:5, h:4, data: [
		10, 10, 11, 11, 11,
		10, 10, 11, 11, 11,
		10, 10, 11, 11, 11,
		10, 10, 11, 11, 11
	]},
	{ x:14, y:9, w:6, h:7, data: [
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11,
		10, 10, 10, 11, 11, 11
	]}*/
];
//instancias del mapa 1
function mapPopulate(){
	var mo1 = new MapObject(4); mo1.placeAt(13, 18);
	/*var mo2 = new MapObject(1); mo2.placeAt(2, 2);
	
	var mo11 = new MapObject(1); mo11.placeAt(6, 4);
	var mo12 = new MapObject(1); mo12.placeAt(7, 4);
	
	var mo4 = new MapObject(3); mo4.placeAt(4, 5);
	var mo5 = new MapObject(3); mo5.placeAt(4, 8);
	var mo6 = new MapObject(3); mo6.placeAt(4, 11);
	
	var mo7 = new MapObject(3); mo7.placeAt(2, 6);
	var mo8 = new MapObject(3); mo8.placeAt(2, 9);
	var mo9 = new MapObject(3); mo9.placeAt(2, 12);*/
	var ps = new PlacedItemStack(1, 1); ps.placeAt(7, 6);
    var ps2 = new PlacedItemStack(1, 1); ps2.placeAt(8, 19);
    /*
	for(var i = 3; i < 8; i++)
	{
		var ps = new PlacedItemStack(1, 1); ps.placeAt(i, 1);
	}
	for(var i = 3; i < 8; i++)
	{
		var ps = new PlacedItemStack(1, 1); ps.placeAt(3, i);
	}*/
}



function TileMap()
{
	this.map	= [];
	this.w		= 0;
	this.h		= 0;
	this.levels	= 4;
}
TileMap.prototype.buildMapFromData = function(d, w, h)
{
	this.w		= w;
	this.h		= h;
	
	if(d.length!=(w*h)) { return false; }
	
	this.map.length	= 0;
	
	for(var y = 0; y < h; y++)
	{
		for(var x = 0; x < w; x++)
		{
			this.map.push( new Tile(x, y, d[((y*w)+x)]) );
		}
	}
	
	return true;
};
TileMap.prototype.addRoofs = function(roofs)
{
	for(var i in roofs)
	{
		var r = roofs[i];
		
		if(r.x < 0 || r.y < 0 || r.x >= this.w || r.y >= this.h ||
			(r.x+r.w)>this.w || (r.y+r.h)>this.h ||
			r.data.length!=(r.w*r.h))
		{
			continue;
		}
		
		for(var y = 0; y < r.h; y++)
		{
			for(var x = 0; x < r.w; x++)
			{
				var tileIdx = (((r.y+y)*this.w)+r.x+x);
				
				this.map[tileIdx].roof = r;
				this.map[tileIdx].roofType = r.data[((y*r.w)+x)];
			}
		}
	}
};


var mapTileData = new TileMap();