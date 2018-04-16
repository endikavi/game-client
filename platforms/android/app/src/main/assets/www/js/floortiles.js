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

var tileTypes = {
	
	0 : { colour:"#685b48", floor:floorTypes.solid,
		sprite:new Sprite(terrainTileset,[{x:0,y:0,w:0,h:0}])	},
	
	1 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:0,y:0,w:40,h:40}])	},
    
    2 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:40,y:0,w:40,h:40}])	},
    
    3 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:80,y:0,w:40,h:40}])	},
    
    4 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:120,y:0,w:40,h:40}])	},
    
    5 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:160,y:0,w:40,h:40}])	},
    
    6 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:200,y:0,w:40,h:40}])	},
    
    7 : { colour:"#5aa457", floor:floorTypes.solid,
		sprite:new Sprite(terrainTileset,[{x:240,y:0,w:40,h:40}])	},
    
    8 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:280,y:0,w:40,h:40}])	},
    
    9 : { colour:"#5aa457", floor:floorTypes.solid,
		sprite:new Sprite(terrainTileset,[{x:320,y:0,w:40,h:40}])	},
    
    10 : { colour:"#5aa457", floor:floorTypes.solid,
		sprite:new Sprite(terrainTileset,[{x:360,y:0,w:40,h:40}])	},
    
    11 : { colour:"#5aa457", floor:floorTypes.solid,
		sprite:new Sprite(terrainTileset,[{x:400,y:0,w:40,h:40}])	},
    
    12 : { colour:"#5aa457", floor:floorTypes.solid,
		sprite:new Sprite(terrainTileset,[{x:440,y:0,w:40,h:40}])	},
    
    /////////////////////////////////////////////////////////////
	
	13 : { colour:"#e8bd7a", floor:floorTypes.solid,
		sprite:new Sprite(terrainTileset,[{x:0,y:40,w:40,h:40}]) },
    
    14 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:40,y:40,w:40,h:40}])	},
    
    15 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:80,y:40,w:40,h:40}])	},
    
    16 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:120,y:40,w:40,h:40}])	},
    
    17 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:160,y:40,w:40,h:40}])	},
    
    18 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:200,y:40,w:40,h:40}])	},
    
    19 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:240,y:40,w:40,h:40}])	},
    
    20 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:280,y:40,w:40,h:40}])	},
    
    21 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:320,y:40,w:40,h:40}])	},
    
    22 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:360,y:40,w:40,h:40}])	},
    
    23 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:400,y:40,w:40,h:40}])	},
    
    24 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:440,y:40,w:40,h:40}])	},
    
    /////////////////////////////////////////////////////////////////
    
    25 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:0,y:80,w:40,h:40}])	},
    
    26 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:40,y:80,w:40,h:40}])	},
    
    27 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:80,y:80,w:40,h:40}])	},
    
    28 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:120,y:80,w:40,h:40}])	},
    
    29 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:160,y:80,w:40,h:40}])	},
    
    30 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:200,y:80,w:40,h:40}])	},
    
    31 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:240,y:80,w:40,h:40}])	},
    
    32 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:280,y:80,w:40,h:40}])	},
    
    33 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:320,y:80,w:40,h:40}])	},
    
    34 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:360,y:80,w:40,h:40}])	},
    
    35 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:400,y:80,w:40,h:40}])	},
    
    36 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:440,y:80,w:40,h:40}])	},
    
    ////////////////////////////////////////////////////////////////
    
    37 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:0,y:120,w:40,h:40}])	},
    
    38 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:40,y:120,w:40,h:40}])	},
    
    39 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:80,y:120,w:40,h:40}])	},
    
    40 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:120,y:120,w:40,h:40}])	},
    
    41 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:160,y:120,w:40,h:40}])	},
    
    42 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:200,y:120,w:40,h:40}])	},
    
    43 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:240,y:120,w:40,h:40}])	},
    
    44 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:280,y:120,w:40,h:40}])	},
    
    45 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:320,y:120,w:40,h:40}])	},
    
    46 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:360,y:120,w:40,h:40}])	},
    
    48 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:400,y:120,w:40,h:40}])	},
    
    //////////////////////////////////////////////////////////////////
    
    49 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:0,y:160,w:40,h:40}])	},
    
    50 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:40,y:160,w:40,h:40}])	},
    
    51 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:80,y:160,w:40,h:40}])	},
    
    52 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:120,y:160,w:40,h:40}])	},
    
    53 : { colour:"#5aa457", floor:floorTypes.grass,
		sprite:new Sprite(terrainTileset,[{x:160,y:160,w:40,h:40}])	},
    
    //////////////////////////////////////////////////////////////////
	
	300 : { colour:"#286625", floor:floorTypes.solid,
		sprite:new Sprite(tileset,[{x:120,y:0,w:40,h:40}])	},
	
	400 : { colour:"#678fd9", floor:floorTypes.water,
		sprite:new Sprite(water,[
			{x:0,y:0,w:40,h:40,d:200}, {x:3,y:0,w:40,h:40,d:200},
			{x:6,y:0,w:40,h:40,d:200}, {x:9,y:0,w:40,h:40,d:200},
			{x:12,y:0,w:40,h:40,d:200}, {x:15,y:0,w:40,h:40,d:200},
			{x:18,y:0,w:40,h:40,d:200}, {x:21,y:0,w:40,h:40,d:200},
			{x:24,y:0,w:40,h:40,d:200}, {x:27,y:0,w:40,h:40,d:200},
			{x:30,y:0,w:40,h:40,d:200}, {x:33,y:0,w:40,h:40,d:200}
		])},
	
	500 : { colour:"#eeeeff", floor:floorTypes.ice,
		sprite:new Sprite(tileset,[{x:120,y:120,w:40,h:40}])	},
	600 : { colour:"#cccccc", floor:floorTypes.conveyorL,
		sprite:new Sprite(tileset,[
			{x:0,y:40,w:40,h:40,d:200}, {x:40,y:40,w:40,h:40,d:200},
			{x:80,y:40,w:40,h:40,d:200}, {x:120,y:40,w:40,h:40,d:200}
		])},
	700 : { colour:"#cccccc", floor:floorTypes.conveyorR,
		sprite:new Sprite(tileset,[
			{x:120,y:80,w:40,h:40,d:200}, {x:80,y:80,w:40,h:40,d:200},
			{x:40,y:80,w:40,h:40,d:200}, {x:0,y:80,w:40,h:40,d:200}
		])},
	800 : { colour:"#cccccc", floor:floorTypes.conveyorD,
		sprite:new Sprite(tileset,[
			{x:160,y:200,w:40,h:40,d:200}, {x:160,y:160,w:40,h:40,d:200},
			{x:160,y:120,w:40,h:40,d:200}, {x:160,y:80,w:40,h:40,d:200}
		])},
	900 : { colour:"#cccccc", floor:floorTypes.conveyorU,
		sprite:new Sprite(tileset,[
			{x:200,y:80,w:40,h:40,d:200}, {x:200,y:120,w:40,h:40,d:200},
			{x:200,y:160,w:40,h:40,d:200}, {x:200,y:200,w:40,h:40,d:200}
		])},
	
	100 : { colour:"#ccaa00", floor:floorTypes.solid,
		sprite:new Sprite(tileset,[{x:40,y:120,w:40,h:40}])},
    110 : { colour:"#ccaa00", floor:floorTypes.solid,
		sprite:new Sprite(tileset,[{x:80,y:120,w:40,h:40}])},
	120 : { colour:"rgba(0,0,0,0)", floor:floorTypes.solid,
		sprite:new Sprite(tileset,[{x:0,y:0,w:0,h:0}])},
	5000 : { colour:"#abcdef", floor:floorTypes.path,
		sprite:new Sprite(tileset,[{x:240,y:40,w:40,h:40}])},
	5100 : { colour:"#123456", floor:floorTypes.path,
		sprite:new Sprite(tileset,[{x:240,y:80,w:40,h:40}])},
	11200 : { colour:"#ccaa00", floor:floorTypes.path,
		sprite:new Sprite(tileset,[{x:80,y:120,w:40,h:40}])},
	12200 : { colour:"rgba(0,0,0,0)", floor:floorTypes.path,
		sprite:new Sprite(tileset,[{x:0,y:0,w:0,h:0}])}
	
};

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
