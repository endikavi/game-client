function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

    menuSound = new sound("menu.mp3");
    mapSound = new sound("map.mp3");
    hitSound = new sound("hit.mp3");
    hurraSound = new sound("hurra.mp3");

    menuSound.play();