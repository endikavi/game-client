function setMap0002() {

	mapW = 20, mapH = 20;
    
    gameMap = [90,90,90,90,90,88,87,90,90,90,90,90,90,90,90,90,90,90,90,90,
84,84,84,84,84,86,85,84,84,84,84,84,84,84,84,84,84,84,84,84,
32,32,32,32,32,47,54,32,32,32,32,32,32,32,32,32,32,32,32,32,
32,32,32,32,32,38,36,32,32,32,32,32,32,32,32,32,32,32,32,32,
32,32,32,32,32,38,36,32,32,190,190,190,190,190,190,190,190,190,32,32,
32,32,32,32,32,38,36,32,32,188,188,188,188,188,188,188,188,188,32,32,
32,32,32,32,32,38,36,32,32,188,188,188,188,188,188,188,188,188,32,32,
32,32,32,32,32,38,36,32,32,188,188,188,188,188,188,188,188,188,32,32,
32,32,32,32,32,38,36,32,32,188,188,188,188,188,188,188,188,188,32,32,
32,32,32,32,32,38,36,32,32,186,188,188,188,188,188,188,188,192,32,32,
32,32,32,32,32,38,36,32,32,32,187,187,187,187,187,187,187,32,32,32,
32,32,32,32,32,38,36,32,32,32,32,32,32,32,32,32,32,32,32,32,
32,32,32,32,32,38,36,32,32,32,32,32,32,32,32,32,32,32,32,32,
40,40,40,40,40,43,44,40,40,40,40,40,40,40,40,40,40,40,40,40,
52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,52,
49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,49,
32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,
32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32]
	
}

function populateMap0002() {
    
	//cartel del camino
	
    var cartel = new MapObject({name:"cartel",info:["Este: Pueblo Luntinol","Oeste: Cuartel General de los guardianes","Norte: Cueva Ignea"],nt:5});
    cartel.placeAt(7, 12);
    
	//decoracion arboles
	
    var tree2 = new MapObject({name:"mo1",info:false,nt:3});
	tree2.placeAt(4, 3);
    
	var tree1 = new MapObject({name:"mo1",info:false,nt:3});
	tree1.placeAt(7, 3);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(3, 9);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(9, 10);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(12, 12);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(14, 16);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(7, 16);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(17, 17);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(10, 16);
	
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(3, 17);
	
    var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(9, 18);
    
    mapTileData.map[((0 + 13 * mapW))].eventEnter = function () {
        
        console.log("cambiando a los cuarteles")
        changeMap(0001);
        player.placeAt(19, 13);
            
	};
    mapTileData.map[((0 + 14 * mapW))].eventEnter = function () {
        
        console.log("cambiando a los cuarteles")
        changeMap(0001);
        player.placeAt(19, 14);   
	};
    mapTileData.map[((0 + 15 * mapW))].eventEnter = function () {
        
        console.log("cambiando a los cuarteles")
        changeMap(0001);
        player.placeAt(19, 15);
	};
	
    mapTileData.map[((19 + 13 * mapW))].eventEnter = function () {
        
        console.log("cambiando al pueblo")
        changeMap(0003);
        player.placeAt(0, 13);
            
	};
	
	mapTileData.map[((19 + 14 * mapW))].eventEnter = function () {
        
        console.log("cambiando al pueblo")
        changeMap(0003);
        player.placeAt(0, 14);
            
	};
	
	mapTileData.map[((19 + 15 * mapW))].eventEnter = function () {
        
        console.log("cambiando al pueblo")
        changeMap(0003);
        player.placeAt(0, 15);
            
	};
	
    mapTileData.map[((6 + 2 * mapW))].eventEnter = function () {
        
        console.log("cambiando a la cueva")
		tensionSound.play();
    	relaxSound.stop();
        changeMap(0004);
        player.placeAt(6, 19);
            
	};
    mapTileData.map[((5 + 2 * mapW))].eventEnter = function () {
        
		tensionSound.play();
    	relaxSound.stop();
        console.log("cambiando a la cueva")
        changeMap(0004);
        player.placeAt(5, 19);
            
	};
}