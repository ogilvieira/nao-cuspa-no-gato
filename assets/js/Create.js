var APP = APP || {};
APP.Create = function(){
	var GAME = window.GAME;

    var screenWidth = parent.clientWidth > window.innerWidth ? window.innerWidth : parent.clientWidth;
    var screenHeight = parent.clientHeight > window.innerHeight ? window.innerHeight : parent.clientHeight;
    GAME.world.width = screenWidth;

	GAME.stage.backgroundColor = '#182d3b';
	GAME.load.start();
};