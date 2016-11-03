var APP = APP || {};

var shotPos,
	shotType,
	splitShot;

APP.Update = function(){
	if(APP.Config.STATUS == 'PLAY' && APP.Config.PLAYER.isAlive)
	{
	    bgGameOver.visible = false;
	    btnRestart.visible = false;

	    if(APP.Config.GAP > 10){
	    	APP.Config.GAP = APP.Config.GAPDEFAULT-Math.round((APP.Config.SCORE/100)*8);
	    } else {
	    	APP.Config.GAP = 10;
	    }

		if(APP.Config.AF <= APP.Config.GAP)
		{
			APP.Config.AF++;
		}
		else 
		{
			APP.Config.AF = 0;
			
			shotPos = APP.Gameplay.getShotPos();
			
			APP.Config.GUN.body.position.x = shotPos;

			shotType = APP.Config.shotTypes[APP.Gameplay.getRandomInt(0, 3)]
	        splitShot = APP.Config.SPLIT.create(shotPos+40, 180, shotType.name );

	        splitShot.power = shotType.power;
	        splitShot.shotName = shotType.name;
	        splitShot.body.collideWorldBounds = false;
	        splitShot.body.gravity.y = 2000;
	        splitShot.checkWorldBounds = true;
	        splitShot.events.onOutOfBounds.add(APP.Gameplay.splitOut, this);
	        coughSound.play();
		}

		GAME.physics.arcade.collide(APP.Config.PLAYER, APP.Config.SPLIT, APP.Gameplay.collisionHandler, null, this);
		APP.Config.PLAYER.body.position.x = (APP.Config.actualPos*APP.Config.PLAYER.body.width)+20;
		
		if(APP.Config.CURSORS.left.isDown && !APP.Config.CURSORS.left.repeats)
		{
			APP.Gameplay.toLeft();
		}
		else if (APP.Config.CURSORS.right.isDown && !APP.Config.CURSORS.right.repeats)
		{
			APP.Gameplay.toRight();
		}
	} else if (APP.Config.STATUS == 'GAMEOVER'){
	    bgGameOver.visible = true;
	    btnRestart.visible = true;
	    if(spaceKey.isDown){
	    	APP.Gameplay.restart();
	    }
	}
};