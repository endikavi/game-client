

var viewport = {
	screen		: [0,0],
	startTile	: [0,0],
	endTile		: [0,0],
	offset		: [0,0],
	update		: function(px, py) {
		this.offset[0] = Math.floor((this.screen[0]/2) - px);
		this.offset[1] = Math.floor((this.screen[1]/2) - py);

		var tile = [ Math.floor(px/tileW), Math.floor(py/tileH) ];

		this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileW);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileH);

		if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

		this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileW);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileH);

		if(this.endTile[0] >= mapW) { this.endTile[0] = mapW-1; }
		if(this.endTile[1] >= mapH) { this.endTile[1] = mapH-1; }
	}
};

function toIndex(x, y)
{
	return((y * mapW) + x);
}

function renderGame(gameMap,MapID){
    
	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
		if(e.keyCode==80) { keysDown[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
		if(e.keyCode==83)
		{
			currentSpeed = (currentSpeed>=(gameSpeeds.length-1) ? 0 : currentSpeed+1);
		}
		if(e.keyCode==80) { keysDown[e.keyCode] = false; }
	});

	viewport.screen = [800,450];

	tileset = new Image();
	tileset.onerror = function()
	{
		ctx = null;
		alert("Failed loading tileset.");
	};
	tileset.onload = function() { tilesetLoaded = true; };
	tileset.src = tilesetURL;
	
	mapTileData.buildMapFromData(gameMap, mapW, mapH);
	mapTileData.addRoofs(roofList);
	mapTileData.map[((2*mapW)+2)].eventEnter = function()
		{ console.log("Entered tile 2,2"); };
	mapPopulate();
	
};

function drawGame(){
	if(ctx==null) { return; }
	if(!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

	var currentFrameTime = Date.now();
	var timeElapsed = currentFrameTime - lastFrameTime;
	gameTime+= Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);

	var sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

	if(!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult!=0)
	{
		if(keysDown[38] && player.canMoveUp())			{ player.moveUp(gameTime); }
		else if(keysDown[40] && player.canMoveDown())	{ player.moveDown(gameTime); }
		else if(keysDown[37] && player.canMoveLeft())	{ player.moveLeft(gameTime); }
		else if(keysDown[39] && player.canMoveRight())	{ player.moveRight(gameTime); }
		else if(keysDown[80]) { player.pickUp(); }
	}

	viewport.update(player.position[0] + (player.dimensions[0]/2),
		player.position[1] + (player.dimensions[1]/2));
	
	var playerRoof1 = mapTileData.map[toIndex(
		player.tileFrom[0], player.tileFrom[1])].roof;
	var playerRoof2 = mapTileData.map[toIndex(
		player.tileTo[0], player.tileTo[1])].roof;

	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);
	
	for(var z = 0; z < mapTileData.levels; z++)
	{

	for(var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y)
	{
		for(var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x)
		{
			if(z==0)
			{
				tileTypes[mapTileData.map[toIndex(x,y)].type].sprite.draw(
					gameTime,
					viewport.offset[0] + (x*tileW),
					viewport.offset[1] + (y*tileH));
			}
			else if(z==1)
			{
				var is = mapTileData.map[toIndex(x,y)].itemStack;
				if(is!=null)
				{
					itemTypes[is.type].sprite.draw(
						gameTime,
						viewport.offset[0] + (x*tileW) + itemTypes[is.type].offset[0],
						viewport.offset[1] + (y*tileH) + itemTypes[is.type].offset[1]);
				}
			}
			
			var o = mapTileData.map[toIndex(x,y)].object;
			if(o!=null && objectTypes[o.type].zIndex==z)
			{
				var ot = objectTypes[o.type];
				
				ot.sprite.draw(gameTime,
					viewport.offset[0] + (x*tileW) + ot.offset[0],
					viewport.offset[1] + (y*tileH) + ot.offset[1]);
			}
			
			if(z==2 &&
				mapTileData.map[toIndex(x,y)].roofType!=0 &&
				mapTileData.map[toIndex(x,y)].roof!=playerRoof1 &&
				mapTileData.map[toIndex(x,y)].roof!=playerRoof2)
			{
				tileTypes[mapTileData.map[toIndex(x,y)].roofType].sprite.draw(
					gameTime,
					viewport.offset[0] + (x*tileW),
					viewport.offset[1] + (y*tileH));
			}
		}
	}
	
		if(z==1)
		{
			player.sprites[player.direction].draw(
				gameTime,
				viewport.offset[0] + player.position[0],
				viewport.offset[1] + player.position[1]);
		}
	
	}
	
	ctx.textAlign = "right";
	
	for(var i = 0; i < player.inventory.spaces; i++)
	{
		ctx.fillStyle = "#ddccaa";
		ctx.fillRect(570 + (i * 50), 30,
			40, 40);
		
		if(typeof player.inventory.stacks[i]!='undefined')
		{
			var it = itemTypes[player.inventory.stacks[i].type];
			
			it.sprite.draw(gameTime,
				570 + (i * 50) + it.offset[0],
				30 + it.offset[1]);
			
			if(player.inventory.stacks[i].qty>1)
			{
				ctx.fillStyle = "#000000";
				ctx.fillText("" + player.inventory.stacks[i].qty,
					570 + (i*50) + 38,
					30 + 38);
			}
		}
	}
    
    var tileIndex= parseInt(player.tileFrom[1]) * mapW + parseInt(player.tileFrom[0])
    
	ctx.textAlign = "left";

	ctx.fillStyle = "#ff0000";
	ctx.fillText("FPS: " + framesLastSecond, 10, 20);
	ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);
	ctx.fillText(' X: '+ player.tileFrom[0] +' Y: '+ player.tileFrom[1] +' Indice: '+ tileIndex, 10, 60);
    ctx.fillText("Steps: " + pasoscount, 10, 80);

	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}

