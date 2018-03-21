//android buttons
function addcontrolls(){
    
document.getElementById("up").addEventListener("touchstart",function(){keysDown[38] = true; this.style.backgroundColor =""});
document.getElementById("down").addEventListener("touchstart",function(){keysDown[40] = true; this.style.backgroundColor =""});
document.getElementById("left").addEventListener("touchstart",function(){keysDown[37] = true; this.style.backgroundColor =""});
document.getElementById("right").addEventListener("touchstart",function(){keysDown[39] = true; this.style.backgroundColor =""});
document.getElementById("action").addEventListener("touchstart",function(){keysDown[80] = true; this.style.backgroundColor =""});

document.getElementById("up").addEventListener("touchend",function(){keysDown[38] = false; this.style.backgroundColor =""});
document.getElementById("down").addEventListener("touchend",function(){keysDown[40] = false; this.style.backgroundColor =""});
document.getElementById("left").addEventListener("touchend",function(){keysDown[37] = false; this.style.backgroundColor =""});
document.getElementById("right").addEventListener("touchend",function(){keysDown[39] = false; this.style.backgroundColor =""});
document.getElementById("action").addEventListener("touchend",function(){keysDown[80] = false; this.style.backgroundColor =""});
    
}