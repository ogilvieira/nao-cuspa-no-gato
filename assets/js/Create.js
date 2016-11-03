var APP = APP || {};
APP.Create = function(){
	var GAME = window.GAME;
	
	GAME.physics.startSystem(Phaser.Physics.ARCADE);
	GAME.stage.backgroundColor = '#000';
	
    APP.Config.CURSORS = GAME.input.keyboard.createCursorKeys();

	var bgStart = GAME.add.sprite(0, 0, 'bg-pressstart');
	var gameTitle = GAME.add.sprite(0, 15, 'game-title');
	var charIntro = GAME.add.sprite(132, 313, 'char-intro');
	var btnSTART = GAME.add.button(133, 799, 'btn-start', function(){ 
		GAME.world.removeAll();
		APP.Gameplay.init(function(){
			APP.Config.STATUS = 'PLAY';
		});
	});

	GAME.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	GAME.scale.pageAlignHorizontally = true;
	GAME.scale.pageAlignVertically = true;
	// GAME.scale.setScreenSize(true);
	GAME.scale.refresh();

	spaceKey = GAME.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	// GAME.load.start();
};