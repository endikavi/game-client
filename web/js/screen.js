var seven = new Framework7();

var $$ = Dom7;

document.getElementById("StartGame").addEventListener("click",addGameCanvas);

function addGameCanvas(){
	$$('#screen').html('<canvas id="game" width="800" height="450"></canvas><div class="container left"><div class="circle" id="left"></div></div><div class="container right"><div class="circle" id="right"></div></div><div class="container up"><div class="circle" id="up"></div></div><div class="container down"><div class="circle" id="down"></div></div><div class="container action"><div class="circle-action" id="action"></div></div>');
	renderGame();
	$$('.container').attr('style','inline');
}

$$('#Menu').on('click', function () {
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
});

$$('#Retos').on('click', function () {
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

console.log(seven.device.pixelRatio);