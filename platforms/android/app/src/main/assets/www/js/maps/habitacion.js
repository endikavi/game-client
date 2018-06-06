function setMap0015() {
    
	mapW = 9, mapH = 9;
    
    gameMap = [148,136,135,135,135,135,135,134,148,
148,133,132,132,132,132,132,131,148,
148,25,24,24,24,24,24,23,148,
148,25,24,24,24,24,24,23,148,
148,25,24,24,24,24,24,23,148,
148,25,24,24,24,24,24,23,148,
148,22,31,31,24,31,31,30,148,
148,148,148,148,24,148,148,148,148,
148,148,148,148,24,148,148,148,148]
	
}

function populateMap0015() {
    
    var cofre = new MapObject({name:"mo1",info:false,nt:16});
	cofre.placeAt(4,3);
    
	mapTileData.map[((4 + 8 * mapW))].eventEnter = function () {
        
        console.log("cambiando al cuartel")
        changeMap(0007);
        player.placeAt(17, 4);
            
	};
	
}