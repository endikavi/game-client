function sound(loop,src) {
	
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.loop = loop;
    
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
	
    document.body.appendChild(this.sound);
	
    this.play = function() {
        
            this.sound.src = src;
            this.sound.load();
            this.sound.play().catch(function(error) {});
        
    }
	
    this.stop = function() {
		
        this.sound.pause();
		
    }
	
}

    menuSound = new sound(true,"music/menu.mp3");
    mapSound = new sound(true,"music/map.mp3");
    hitSound = new sound(false,"music/hit.mp3");
    hurraSound = new sound(false,"music/hurra.mp3");

    menuSound.play();