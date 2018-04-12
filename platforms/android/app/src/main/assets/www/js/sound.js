function sound(src) {
	
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
	
    document.body.appendChild(this.sound);
	
    this.play = function() {
		
		this.sound = document.createElement("audio");
		this.sound.src = src;
		this.sound.load();
        this.sound.play();
		
    }
	
    this.stop = function() {
		
        this.sound.pause();
		
    }
	
	this.loop = function() {
		
        this.sound.loop = true;
		
    }
	
}

    menuSound = new sound("music/menu.mp3");
    mapSound = new sound("music/map.mp3");
    hitSound = new sound("music/hit.mp3");
    hurraSound = new sound("music/hurra.mp3");

    menuSound.play();
	menuSound.loop();