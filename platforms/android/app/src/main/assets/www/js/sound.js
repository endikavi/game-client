var musicLoaded = true;

function sound(loop,src) {
	
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.loop = loop;
    this.sound.loaded = false;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
	
    document.body.appendChild(this.sound);
	
    this.play = function() {
        if(UserConf[0].music==true){
			this.sound.volume=UserConf[0].volume
            this.sound.src = src;
            this.sound.load();
            this.sound.play().catch(function(error) {});
		}
    }
	
    this.stop = function() {
		
        this.sound.pause();
		
    }
	
	this.sound.onload = function() {
		
		this.sound.loaded = true;
		
	};
    
    this.sound.onerror = function() {
		if (this.sound.loaded == false){
			ctx = null;
			alert("Failed loading: " + src);
			musicLoaded = false;
		}
	};
	
}
var menuSound = new sound(true,"music/menu.mp3");
var relaxSound = new sound(true,"music/relax.mp3");
var combatSound = new sound(true,"music/combat.mp3");
var tensionSound = new sound(true,"music/tension.mp3");