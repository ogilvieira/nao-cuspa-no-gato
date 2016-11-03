var APP = APP || {};
APP.Preload = function(){
  var GAME = window.GAME;
  GAME.load.image('bg-pressstart', 'assets/img/bg-pressstart.jpg');
  GAME.load.image('game-title', 'assets/img/game-title.png');
  GAME.load.image('char-intro', 'assets/img/char-intro.png');
  GAME.load.image('btn-start', 'assets/img/btn-start.png');

  GAME.load.image('bg-gameover', 'assets/img/bg-gameover.png');
  GAME.load.image('btn-restart', 'assets/img/btn-restart.png');
  
  GAME.load.image('top', 'assets/img/top.png');
  GAME.load.image('cat', 'assets/img/cat.png');
  GAME.load.image('gun', 'assets/img/gun.png');
  GAME.load.image('btn-left', 'assets/img/btn-left.png');
  GAME.load.image('btn-right', 'assets/img/btn-right.png');
  GAME.load.image('split', 'assets/img/split.png');
  GAME.load.image('split-medium', 'assets/img/split-medium.png');
  GAME.load.image('split-big', 'assets/img/split-big.png');
  GAME.load.image('split-fruit', 'assets/img/split-fruit.png');

  GAME.load.audio('bgsong', ['assets/sound/bg.mp3', 'assets/sound/bg.ogg']);
  GAME.load.audio('btnSound', ['assets/sound/btn.mp3', 'assets/sound/btn.ogg']);
  GAME.load.audio('gameoverSound', ['assets/sound/gameover.mp3', 'assets/sound/gameover.ogg']);
  GAME.load.audio('coughSound', ['assets/sound/cough.mp3', 'assets/sound/cough.ogg']);
};