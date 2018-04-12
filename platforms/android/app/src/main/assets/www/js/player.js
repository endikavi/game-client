function Character() {
    
	this.tileFrom	= [1,1];
	this.tileTo		= [1,1];
	this.timeMoved	= 0;
	this.dimensions	= [64,95];
	this.position	= [45,45];

	this.delayMove	= {};
	this.delayMove[floorTypes.path]			= 150;
	this.delayMove[floorTypes.grass]		= 150;
	this.delayMove[floorTypes.ice]			= 100;
	this.delayMove[floorTypes.conveyorU]	= 100;
	this.delayMove[floorTypes.conveyorD]	= 100;
	this.delayMove[floorTypes.conveyorL]	= 100;
	this.delayMove[floorTypes.conveyorR]	= 100;

	this.direction	= directions.right;
	this.sprites = {};
	
	this.inventory = new Inventory(4);
    
    this.stopSprites();
    
}

Character.prototype.stopSprites = function() {
    
            this.sprites[directions.up]		= new CharSprite(charTileset,[{x:0,y:512,w:64,h:64}]);
            this.sprites[directions.right]	= new CharSprite(charTileset,[{x:0,y:704,w:64,h:64}]);
            this.sprites[directions.down]	= new CharSprite(charTileset,[{x:0,y:640,w:64,h:64}]);
            this.sprites[directions.left]	= new CharSprite(charTileset,[{x:0,y:576,w:64,h:64}]);
    
}

Character.prototype.startSprites = function() {
    
    this.sprites[directions.up]		= new CharSprite(charTileset,[
        
        {x:0,y:512,w:64,h:64},
        {x:64,y:512,w:64,h:64},
        {x:128,y:512,w:64,h:64},
        {x:192,y:512,w:64,h:64},
        {x:256,y:512,w:64,h:64},
        {x:320,y:512,w:64,h:64},
        {x:384,y:512,w:64,h:64},
        {x:448,y:512,w:64,h:64},
        {x:512,y:512,w:64,h:64}
        
    ]);
    
	this.sprites[directions.right]	= new CharSprite(charTileset,[
        
        {x:0,y:704,w:64,h:64},
        {x:64,y:704,w:64,h:64},
        {x:128,y:704,w:64,h:64},
        {x:192,y:704,w:64,h:64},
        {x:256,y:704,w:64,h:64},
        {x:320,y:704,w:64,h:64},
        {x:384,y:704,w:64,h:64},
        {x:448,y:704,w:64,h:64},
        {x:512,y:704,w:64,h:64}
        
    ]);
	this.sprites[directions.down]	= new CharSprite(charTileset,[
        
        {x:0,y:640,w:64,h:64},
        {x:64,y:640,w:64,h:64},
        {x:128,y:640,w:64,h:64},
        {x:192,y:640,w:64,h:64},
        {x:256,y:640,w:64,h:64},
        {x:320,y:640,w:64,h:64},
        {x:384,y:640,w:64,h:64},
        {x:448,y:640,w:64,h:64},
        {x:512,y:640,w:64,h:64}
        
    ]);
    
	this.sprites[directions.left]	= new CharSprite(charTileset,[
        
        {x:0,y:576,w:64,h:64},
        {x:64,y:576,w:64,h:64},
        {x:128,y:576,w:64,h:64},
        {x:192,y:576,w:64,h:64},
        {x:256,y:576,w:64,h:64},
        {x:320,y:576,w:64,h:64},
        {x:384,y:576,w:64,h:64},
        {x:448,y:576,w:64,h:64},
        {x:512,y:576,w:64,h:64}
        
    ]);
    
}

Character.prototype.placeAt = function(x, y) {
    
	this.tileFrom	= [x,y];
	this.tileTo		= [x,y];
	this.position	= [((tileW*x)+((tileW-this.dimensions[0])/2)),
		((tileH*y)+((tileH-this.dimensions[1])/2))];
    
};

Character.prototype.processMovement = function(t) {
	if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) {
        
        this.stopSprites();
        return false; 
    
    }

	var moveSpeed = this.delayMove[tileTypes[mapTileData.map[toIndex(this.tileFrom[0],this.tileFrom[1])].type].floor];

	if((t-this.timeMoved)>=moveSpeed)
	{
		this.placeAt(this.tileTo[0], this.tileTo[1]);

		if(mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter!=null)
		{
			mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(this);
		}

		var tileFloor = tileTypes[mapTileData.map[toIndex(this.tileFrom[0], this.tileFrom[1])].type].floor;

		if(tileFloor==floorTypes.ice)
		{
			if(this.canMoveDirection(this.direction)){
                
				this.moveDirection(this.direction, t);
                
			}
		}
		else if(tileFloor==floorTypes.conveyorL && this.canMoveLeft())	{ this.moveLeft(t); }
		else if(tileFloor==floorTypes.conveyorR && this.canMoveRight()) { this.moveRight(t); }
		else if(tileFloor==floorTypes.conveyorU && this.canMoveUp())	{ this.moveUp(t); }
		else if(tileFloor==floorTypes.conveyorD && this.canMoveDown())	{ this.moveDown(t); }
	}
	else
	{
		this.position[0] = (this.tileFrom[0] * tileW) + ((tileW-this.dimensions[0])/2);
		this.position[1] = (this.tileFrom[1] * tileH) + ((tileH-this.dimensions[1])/2);

		if(this.tileTo[0] != this.tileFrom[0])
		{
			var diff = (tileW / moveSpeed) * (t-this.timeMoved);
			this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
		}
		if(this.tileTo[1] != this.tileFrom[1])
		{
			var diff = (tileH / moveSpeed) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
		}

		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
	}
	return true;
}

Character.prototype.canMoveTo = function(d, x, y) {
    
	if(x < 0 || x >= mapW || y < 0 || y >= mapH) { return false; }
    
	if(typeof this.delayMove[tileTypes[mapTileData.map[toIndex(x,y)].type].floor]=='undefined') {
        
        hitSound.play();
        console.log('Pared');
        return false; 
        
    }
    
	if(mapTileData.map[toIndex(x,y)].object!=null) {
        
		var o = mapTileData.map[toIndex(x,y)].object;
        
		if(objectTypes[o.type].collision==objectCollision.solid){
            
            hitSound.play();
            console.log('Bloque inamovible');
			return false;
            
		}else if(objectTypes[o.type].collision==objectCollision.push) {
            
            console.log('Bloque movible'+ JSON.stringify(o));
            
            if(d == "u"){o.placeAt(x,y-1);}
            if(d == "d"){o.placeAt(x,y+1);}
            if(d == "l"){o.placeAt(x-1,y);}
            if(d == "r"){o.placeAt(x+1,y);}
            
            return false;
            
        }else{}
	}
    
            this.startSprites();
            pasoscount ++;
	        return true;
};

Character.prototype.canMoveUp		= function() { return this.canMoveTo("u", this.tileFrom[0], this.tileFrom[1]-1); };
Character.prototype.canMoveDown 	= function() { return this.canMoveTo("d", this.tileFrom[0], this.tileFrom[1]+1); };
Character.prototype.canMoveLeft 	= function() { return this.canMoveTo("l", this.tileFrom[0]-1, this.tileFrom[1]); };
Character.prototype.canMoveRight 	= function() { return this.canMoveTo("r", this.tileFrom[0]+1, this.tileFrom[1]); };
Character.prototype.canMoveDirection = function(d) {
	switch(d)
	{
		case directions.up:
			return this.canMoveUp();
		case directions.down:
			return this.canMoveDown();
		case directions.left:
			return this.canMoveLeft();
        case directions.right:
            return this.canMoveRight();
	}
};

Character.prototype.moveLeft	= function(t) { this.tileTo[0]-=1; this.timeMoved = t; this.direction = directions.left;};
Character.prototype.moveRight	= function(t) { this.tileTo[0]+=1; this.timeMoved = t; this.direction = directions.right;};
Character.prototype.moveUp		= function(t) { this.tileTo[1]-=1; this.timeMoved = t; this.direction = directions.up;};
Character.prototype.moveDown	= function(t) { this.tileTo[1]+=1; this.timeMoved = t; this.direction = directions.down;};
Character.prototype.moveDirection = function(d, t) {
	
	switch(d)
	{
		case directions.up:
			return this.moveUp(t);
		case directions.down:
			return this.moveDown(t);
		case directions.left:
			return this.moveLeft(t);
		default:
			return this.moveRight(t);
	}
};

Character.prototype.pickUp = function() {
	
	keysDown[80] = false;
	
	if(this.tileTo[0]!=this.tileFrom[0] ||
		this.tileTo[1]!=this.tileFrom[1]) {
		
		return false;
		
	}
	
	var is = mapTileData.map[toIndex(this.tileFrom[0],
				this.tileFrom[1])].itemStack;
	
	if(is!=null) {
		
        hurraSound.stop();
        hurraSound.play();
		var remains = this.inventory.addItems(is.type, is.qty);

		if(remains) { is.qty = remains; }
		else {
			
			mapTileData.map[toIndex(this.tileFrom[0],this.tileFrom[1])].itemStack = null;
			
		}
	}
	
	return true;
	
};

var player = new Character();