var APP = APP || {};
APP.Update = function(){
	if(APP.Config.STATUS == 'PLAY' && APP.Config.PLAYER.isAlive)
	{
	    bgGameOver.visible = false;
	    btnRestart.visible = false;

	    if(APP.Config.GAP > 10){
	    	APP.Config.GAP = APP.Config.GAPDEFAULT-Math.round((APP.Config.SCORE/100)*8);
	    	console.log(APP.Config.GAP);
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
			var shotpos = (APP.Gameplay.getRandomInt(0, 5)*APP.Config.PLAYER.body.width)+20;
			APP.Config.GUN.body.position.x = shotpos;

			var shotType = APP.Config.shotTypes[APP.Gameplay.getRandomInt(0, 3)]

	        var splitShot = APP.Config.SPLIT.create(shotpos+40, 180, shotType.name );

	        splitShot.power = shotType.power;
	        splitShot.shotName = shotType.name;
	        splitShot.body.collideWorldBounds = false;
	        splitShot.body.gravity.y = 3000;
	        splitShot.checkWorldBounds = true;
	        splitShot.events.onOutOfBounds.add(APP.Gameplay.splitOut, this);
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