var APP = APP || {};

APP.Gameplay = (function(Phaser){
  var obj = {};

  obj.collisionHandler = function(player, split) {
    player.body.allowGravity = false;
    split.destroy(true);
    APP.Config.PLAYER.isAlive = false;
    APP.Config.STATUS = 'GAMEOVER';
  }

  obj.splitOut = function(split) {
    if(APP.Config.PLAYER.isAlive){
      APP.Config.SCORE += split.power;
      APP.Config.SCORETEXT.text = APP.Config.SCORESTRING + APP.Config.SCORE;
    }
  }

  obj.getRandomInt = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  obj.toLeft = function(){
    if(APP.Config.actualPos > 0){ APP.Config.actualPos-- }
  };

  obj.toRight = function(){
    if(APP.Config.actualPos < 4){ APP.Config.actualPos++ }
  };

  obj.restart = function(){
    APP.Config.SCORE = 0;
    APP.Config.SCORETEXT.text = APP.Config.SCORESTRING + APP.Config.SCORE;
    APP.Config.STATUS = 'PLAY';
    APP.Config.PLAYER.isAlive = true;
    APP.Config.AF = 0;
    APP.Config.GAP = 40;
  };

  obj.getShotPos = function(){
    return (APP.Gameplay.getRandomInt(0, 5)*APP.Config.PLAYER.body.width)+20
  }

  obj.init = function(callback){
    GAME.world.height = 960;
    GAME.stage.backgroundColor = "#474747";
    //Init objects
    APP.Config.TOP = GAME.add.sprite(0, 0, 'top');
    APP.Config.PLAYER = GAME.add.sprite((APP.Config.actualPos*120)+20, GAME.world.height - 230, 'cat');
    APP.Config.GUN = GAME.add.sprite((APP.Config.actualPos*120)+20, 65, 'gun');
    APP.Config.SPLIT = GAME.add.group();

    //Set physics
    GAME.physics.arcade.enable(APP.Config.PLAYER);
    GAME.physics.arcade.enable(APP.Config.GUN);

    //Set player
    APP.Config.PLAYER.body.collideWorldBounds = true;
    APP.Config.PLAYER.body.gravity.x = false;
    APP.Config.PLAYER.body.bounce.x = 0;
    APP.Config.PLAYER.body.allowGravity = false;
    APP.Config.PLAYER.body.immovable = true;
    APP.Config.PLAYER.isAlive = true;

    //Set gun
    APP.Config.GUN.body.collideWorldBounds = false;
    APP.Config.GUN.body.bounce.x = 0;
    APP.Config.GUN.body.gravity.x = 0;
    
    //Set split
    APP.Config.SPLIT.enableBody = true;
    APP.Config.SPLIT.physicsBodyType = Phaser.Physics.ARCADE;

    //Set buttons
    APP.Config.BTN.LEFT = GAME.add.button(5, GAME.world.height-105, 'btn-left', obj.toLeft, this);
    APP.Config.BTN.RIGHT = GAME.add.button(325, GAME.world.height-105, 'btn-right', obj.toRight, this);

    //Set Score
    APP.Config.SCORESTRING = 'SCORE ';
    APP.Config.SCORETEXT = GAME.add.text(20, 20, APP.Config.SCORESTRING + APP.Config.SCORE, { 
      font: '24px Press Start 2P',
      fill: '#fff',
      wordWrap: true,
      backgroundColor: "#000",
      wordWrapWidth: 980
    });
    APP.Config.SCORETEXT.anchor.set(0);

    //Set Gameover

    bgGameOver = GAME.add.sprite(0, 60, 'bg-gameover');
    btnRestart = GAME.add.button(137, 812, 'btn-restart', obj.restart, this, 2, 3, 0);
    bgGameOver.visible = false;
    btnRestart.visible = false;

    callback();
  };

  return obj;
}(Phaser));