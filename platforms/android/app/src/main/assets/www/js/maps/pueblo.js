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
    
    var tree4 = new MapObject({ name:"box2" , info:false , nt:3 });
	tree4.placeAt(0, 7);
    
    var door1 = new MapObject({name:"puerta",info:["Una puerta cerrada."],nt:13});
	door1.placeAt(6, 8);
    var door2 = new MapObject({name:"puerta",info:["Una puerta cerrada."],nt:13});
	door2.placeAt(12, 8);
    var door3 = new MapObject({name:"puerta",info:["Una puerta cerrada."],nt:13});
	door3.placeAt(17, 8);
	
    var tree1 = new MapObject({name:"mo1",info:false,nt:3});
	tree1.placeAt(9, 9);
    
    var tree2 = new MapObject({name:"mo1",info:false,nt:3});
	tree2.placeAt(3, 9);
    
	var tree3 = new MapObject({name:"mo1",info:false,nt:3});
	tree3.placeAt(19, 8);
	
	//npcs
	
    var pueblerino = new MapObject({name:"charlie",info:["Soy Charlie","No me gusta este pueblo","Es de lo mas aburrido","No seras tu un guardian?"],nt:6});
	
	var pueblerino2 = new MapObject({name:"charlie",info:["hola soy Armaus","Vengo desde el norte","Tuve que pasar por una cueva bastante peligrosa","Si vas con gente mucho mejor"],nt:9});
	
	var pueblerino3 = new MapObject({name:"charlie",info:["eyyy me llamo Lindiel","Me gustan las flores que hay despues de la cueva","Vienes a comprar al pueblo?"],nt:7});
	
	var pueblerino4 = new MapObject({name:"charlie",info:["Ho..la","Ojala parecer tan poderoso como tu","Poder viajar tiene que ser genial"],nt:8});
	
	pueblerino.placeAt(17, 15);
    
    pueblerino2.placeAt(9, 12);
	
	pueblerino3.placeAt(10, 12);
	
	pueblerino4.placeAt(13, 13);
	
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