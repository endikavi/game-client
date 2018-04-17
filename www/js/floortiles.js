var floorTypes = {
	
	solid	: 0,
	path	: 1,
	water	: 2,
	ice		: 3,
	conveyorU	: 4,
	conveyorD	: 5,
	conveyorL	: 6,
	conveyorR	: 7,
	grass		: 8
	
};

var tileTypes = [
    
    {floor:floorTypes.solid,sprite:new Sprite(terrainTileset,[{x:0,y:0,w:0,h:0}])}
    
];

function autogenTiles(){
    
    imgy = (terrainTileset.T.height / 40);//casillas de alto
    imgx = (terrainTileset.T.width / 40 );//casillas de largo
    
    for(var y = 0; y < imgy; ++y) {
		
        for(var x = 0; x < imgx; ++x) {
            
            tileTypes.push( {floor:floorTypes.grass , sprite:new Sprite(terrainTileset,[{x:(x*40),y:(y*40),w:40,h:40}])});
            
            if ( (x+(y*imgy)) > 25 && (x+(y*imgy)) < 50 ) {
                
                tileTypes[x+(y*imgy)].floor = floorTypes.block;
                
            }
            
            if ((x+(y*imgy)) > 50) {
                
                tileTypes[x+(y*imgy)].floor = floorTypes.water;
                
            }
            
            if ( (x+(y*imgy)) == 26 || (x+(y*imgy)) == 38){tileTypes[x+(y*imgy)].floor = floorTypes.ice;}
            
        }
        
    }
    
}

autogenTiles();

function Tile(tx, ty, tt) {
	
	this.x			= tx;
	this.y			= ty;
	this.type		= tt;
	this.roof		= null;
	this.roofType	= 0;
	this.eventEnter	= null;
	this.object		= null;
	this.itemStack	= null;
	
}
