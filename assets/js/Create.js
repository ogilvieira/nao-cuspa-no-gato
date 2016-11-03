var APP = APP || {};
	var bgSong,
		btnSound;

APP.Create = function(){
	var GAME = window.GAME;
	
	GAME.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	GAME.scale.pageAlignHorizontally = true;
	GAME.scale.pageAlignVertically = true;
	GAME.scale.refresh();

	spaceKey = GAME.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	bgSong = GAME.add.audio('bgsong');
	btnSound = GAME.add.audio('btnSound');
	gameoverSound = GAME.add.audio('gameoverSound');
	coughSound = GAME.add.audio('coughSound');
	coughSound.volume = .3;
	btnSound.volume = .1;
    bgSong.play();

	GAME.physics.startSystem(Phaser.Physics.ARCADE);
	GAME.stage.backgroundColor = '#000';
	
    APP.Config.CURSORS = GAME.input.keyboard.createCursorKeys();

	var bgStart = GAME.add.sprite(0, 0, 'bg-pressstart');
	var gameTitle = GAME.add.sprite(0, 15, 'game-title');
	var charIntro = GAME.add.sprite(132, 313, 'char-intro');
	var btnSTART = GAME.add.button(133, 799, 'btn-start', function(){ 
		btnSound.play();
		GAME.world.removeAll();
		APP.Gameplay.init(function(){
			APP.Config.STATUS = 'PLAY';
			bgSong.stop();
		});
	});



};