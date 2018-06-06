function setMap0001() {

	mapW = 20, mapH = 20;
    
    gameMap = [141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,
141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,
126,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,125,124,
120,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,129,128,
105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,105,
103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,
32,32,32,32,53,57,57,57,57,57,57,57,51,32,32,32,32,32,32,32,
32,32,32,32,53,57,57,57,57,57,57,57,51,32,32,32,32,32,32,32,
32,32,32,32,50,49,49,45,57,46,49,49,48,32,32,32,32,32,32,32,
32,32,32,32,32,32,32,38,57,51,32,32,32,32,236,235,235,234,32,32,
32,32,32,32,32,32,32,38,57,51,32,32,32,32,233,232,232,231,32,32,
32,32,32,32,32,32,32,38,57,51,32,32,32,32,230,229,229,228,32,32,
32,32,32,32,32,32,32,38,57,51,32,32,32,32,32,32,32,32,32,32,
32,32,32,32,47,55,55,43,57,44,55,55,55,55,55,55,55,55,55,55,
32,32,32,32,38,57,57,57,57,57,52,52,52,52,52,52,52,52,52,52,
32,32,32,32,38,57,57,57,57,57,57,57,61,49,49,49,49,49,49,49,
32,32,32,32,38,57,57,57,57,57,57,57,51,32,32,32,32,32,32,32,
32,32,32,32,38,57,57,57,57,57,57,57,51,32,32,32,32,32,32,32,
32,32,32,32,50,49,49,49,49,49,49,49,48,32,32,32,32,32,32,32,
32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32]
	
}

function populateMap0001() {

	//posicion inicial

	player.placeAt(8, 7);
	
    var door = new MapObject({name:"mo1",info:false,nt:13});
	door.placeAt(8, 5);
	
	//decoracion arboles
    
    var tree1 = new MapObject({name:"mo1",info:false,nt:3});
	tree1.placeAt(18, 10);
    
    var tree2 = new MapObject({name:"mo1",info:false,nt:3});
	tree2.placeAt(5, 9);
    
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(11, 10);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(5, 11);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(11, 12);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(3, 12);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(3, 15);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(15, 16);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(13, 17);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(3, 17);
	
    var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(17, 18);
    
	//evento ir al camino
	
    mapTileData.map[((19 + 13 * mapW))].eventEnter = function () {
        
        console.log("cambiando al camino")
        changeMap(0002);
        player.placeAt(0, 13);
            
	};
	
	mapTileData.map[((19 + 14 * mapW))].eventEnter = function () {
        
        console.log("cambiando al camino")
        changeMap(0002);
        player.placeAt(0, 14);
            
	};
	
	mapTileData.map[((19 + 15 * mapW))].eventEnter = function () {
        
        console.log("cambiando al camino")
        changeMap(0002);
        player.placeAt(0, 15);
            
	};
	
 	mapTileData.map[((8 + 6 * mapW))].eventEnter = function () {
        
        console.log("cambiando al cuartel")
        changeMap(0007);
        player.placeAt(9, 19);
            
	};
}