function setMap0003() {

	mapW = 20, mapH = 20;
    
    gameMap = [17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
17,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,17,
17,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,141,17,
17,113,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,112,111,17,
17,107,116,116,116,109,109,109,116,116,116,109,109,109,116,116,109,109,109,17,
17,105,105,105,105,107,116,115,105,105,105,107,116,115,105,105,107,116,115,17,
17,103,103,103,103,105,105,105,103,103,103,105,105,105,103,103,105,105,105,17,
17,17,17,17,17,103,103,103,17,17,17,103,103,103,17,17,103,103,103,17,
17,17,17,17,17,38,37,36,17,17,17,38,37,36,17,17,38,37,36,17,
17,17,17,17,17,38,37,36,17,17,17,38,37,36,17,17,38,37,36,17,
17,17,17,17,17,38,37,44,40,40,40,43,37,44,40,40,43,37,36,17,
17,17,17,17,17,38,37,37,37,37,37,37,37,37,37,37,37,37,36,17,
40,40,40,40,40,43,37,37,37,37,37,37,37,37,37,37,37,37,36,17,
37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,37,36,17,
49,49,49,49,49,45,37,37,37,37,37,37,37,37,37,37,37,37,36,17,
17,17,17,17,17,38,37,37,37,37,37,37,37,37,37,37,37,37,36,17,
17,17,17,17,17,35,49,49,49,49,49,49,49,49,49,49,49,49,33,17,
17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,
17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17,17]
	
}

function populateMap0003() {

	//decoracion cajas y arboles
    
    var box2 = new MapObject({ name:"box2" , info:false , nt:3 });
	box2.placeAt(0, 7);
    
    var tree1 = new MapObject({name:"mo1",info:false,nt:3});
	tree1.placeAt(9, 9);
    
    var tree2 = new MapObject({name:"mo1",info:false,nt:3});
	tree2.placeAt(3, 9);
    
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(19, 8);
	
	//npcs
	
    var charlie = new MapObject({name:"charlie",info:["Soy un npc","Ojala tener un sprite","Poder moverse tiene que ser genial","No seras tu el elegido?"],nt:6});
	
	var charlie2 = new MapObject({name:"charlie",info:["Soy un npc","Ojala tener un sprite","Poder moverse tiene que ser genial","No seras tu el elegido?"],nt:6});
	
	charlie.placeAt(17, 15);
    
    charlie2.placeAt(7, 10);
	
    mapTileData.map[((0 + 13 * mapW))].eventEnter = function () {
        
        console.log("cambiando al camino")
        changeMap(0002);
        player.placeAt(19, 13);
            
	};
    mapTileData.map[((0 + 14 * mapW))].eventEnter = function () {
        
        console.log("cambiando al camino")
        changeMap(0002);
        player.placeAt(19, 14);   
	};
    mapTileData.map[((0 + 15 * mapW))].eventEnter = function () {
        
        console.log("cambiando al camino")
        changeMap(0002);
        player.placeAt(19, 15);
	};
      
}