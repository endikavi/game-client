var seven = new Framework7();

var $$ = Dom7;

function addGameCanvas() {
	$$('#screen').html('<canvas id="layer0" width="800" height="450"></canvas><canvas id="layer1" width="800" height="450"></canvas><canvas id="layer2" width="800" height="450"></canvas><canvas id="layer3" width="800" height="450"></canvas><div class="container styck"><div class="circley" id="styck"></div></div><div class="container action"><div class="circle-action" id="action"></div><i class="f7-icons button-round color-white">keyboard</i></div>');
	//<div class="container left"><div class="circle" id="left"></div></div><div class="container right"><div class="circle" id="right"></div></div><div class="container up"><div class="circle" id="up"></div></div><div class="container down"><div class="circle" id="down"></div></div>
	mapId = 0002;
	
	addControlls();
	
	renderGame();
	
    mapSound.play();
    menuSound.stop();
	$$('.container').attr('style','inline');
	
}

function mainMenu() {
    
	$$('#screen').html('<button class="button col button-round btn color-white btn-left" id="StartGame">&#9773  Empezar</button><button class="button col button-round btn color-white btn-left" id="ContinueGame">&#9773 Continuar</button><button class="button col button-round btn color-white" id="User">Usuario</button><img class="spin" src="img/whell.png" /><button class="button col button-round btn color-white" id="Menu">Menu</button><button class="button col button-round btn color-white btn-right" id="Retos">modo Reto &#9773</button><button class="button col button-round btn color-white btn-right" id="Multi">Multijugador &#9773</button><div class="card"></div>');
	$$('.container').attr('style','none');
    
    resetCanvas();
    mainMenuControlls();
    menuSound.play();
    mapSound.stop();
}

function addCard(title,text) {
    
	$$('.card').html('<div class="card-header"><p class="popup-title">' + title + '</p></div><div class="card-content card-content-padding pop-up"><p class="popup-text">' + text + '</p></div><div id="gamescreen"></div>');
    
    $$('.card-header').on('click', function () {$$('.card').html('')})
    
}

function mainMenuControlls() {
    
document.removeEventListener("backbutton", mainMenu, false);   
document.addEventListener("backbutton", exitFromApp, false);
    
document.getElementById("StartGame").addEventListener("click",addGameCanvas);
    
$$('#Multi').on('click', function () {addCard('multijugador','este es el menu del multi')})

$$('#ContinueGame').on('click', function () {addCard('Continuar','este es el menu para elegir partida guardada')})
    
$$('#User').on('click', function () {
    
        addCard('Login','<button Style="display:none;" class="button button-outline" id="Reset" type="buttom">Volver</button> <button Style="display:block;" id="Register" class="button button-outline button-register" type="buttom" >Registrarte</button> <button Style="display:block;" id="Google" class="button button-outline button-register-google" type="buttom">Usar cuenta Google</button> <button Style="display:block;" id="Login" class="button button-outline button-register-google" type="buttom">Ya tengo cuenta</button>')
        
} )

$$('#Menu').on('click', function () {addCard('menu','este es el menu de opciones')})
    /*
    console.log('hola')
  var progress = 0;
  var dialog = seven.dialog.progress('Loading assets', progress);
  dialog.setText('1 of 100');
  var interval = setInterval(function () {
    progress += 1;
    dialog.setProgress(progress);
    dialog.setText(((progress) / 1) + ' of 100');
    if (progress === 100) {
      clearInterval(interval);
      dialog.close();
    }
  }, 30)
});*/

$$('#Retos').on('click', function () {addCard('Retos','este es el menu de retos<hr><p class="segmented segmented-raised"><button class="button button-outline">Mapa 1</button><button class="button button-outline">Mapa 2</button><button class="button button-outline">Mapa 3</button><button class="button button-outline">Mapa 4</button></p><p class="segmented segmented-raised"><button class="button button-outline">Mapa 5</button><button class="button button-outline">Mapa 6</button><button class="button button-outline">Mapa 7</button><button class="button button-outline">Mapa 8</button></p>')})
    /*
  seven.dialog.create({
    title: 'Retos',
    text: 'Selecciona mapa',
    buttons: [
      {
        text: 'Mapa 1',
      },
      {
        text: 'Mapa 2',
      },
      {
        text: 'Mapa 3',
      },
    ],
    verticalButtons: true,
  }).open();
});
 */   
    
}