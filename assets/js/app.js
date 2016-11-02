var game = new Phaser.Game(
	640, 
	960, 
	Phaser.AUTO, 
	'screen', 
	{ 
		preload: preload,
		create: create,
		update: update,
		render: render
	}),
	PLAYER,
	GUN,
	SPLIT, 
	GAP = 30,
	AF = 0,
	LIFE = 30,
	score = 0,
	scoreStrig = '',
	scoreText,
	CURSORS,
	actualPos = 2,
	top,
	footer,
	btnLeft,
	btnRight;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function preload() {
	game.load.image('cat', 'assets/img/cat.png');
	game.load.image('gun', 'assets/img/gun.png');
	game.load.image('btn', 'assets/img/btn.png');
	game.load.image('split', 'assets/img/split.png');
}

function create() {
	CURSORS = game.input.keyboard.createCursorKeys();
    game.physics.startSystem(Phaser.Physics.ARCADE);
	
	// CREATE OBJECTS
	top = new Phaser.Rectangle(0, 0, game.world.width, 60);
    PLAYER = game.add.sprite((actualPos*120)+20, game.world.height - 230, 'cat');
    GUN = game.add.sprite((actualPos*120)+20, 60, 'gun');
    SPLIT = game.add.group();

    game.physics.arcade.enable(PLAYER);
    game.physics.arcade.enable(GUN);

	// SET OBJECTS
    PLAYER.body.collideWorldBounds = true;
    PLAYER.body.gravity.x = false;
    PLAYER.body.bounce.x = 0;
    PLAYER.body.allowGravity = false;
    PLAYER.body.immovable = true;
    
    GUN.body.collideWorldBounds = false;
    GUN.body.bounce.x = 0;
    GUN.body.gravity.x = 0;

    SPLIT.enableBody = true;
    SPLIT.physicsBodyType = Phaser.Physics.ARCADE;
	
	// CREATE BUTTONS
	btnLeft = game.add.button(5, game.world.height-105, 'btn', function(){ console.log('LEFT') }, this, 2, 3, 0);
	btnRight = game.add.button(325, game.world.height-105, 'btn', function(){ console.log('RIGHT') }, this, 2, 3, 0);


    //  The score
    scoreString = 'Score : ';
    scoreText = game.add.text(10, 10, scoreString + score, { font: '34px Arial', fill: '#fff' });
}


function render () {
	game.debug.geom(top, "#474747");
}


function update() {

	if(AF <= GAP){
		AF++;
	} else {
		AF = 0;
		var shotpos = (getRandomInt(0, 5)*PLAYER.body.width)+20;
		GUN.body.position.x = shotpos;

        var pineapple = SPLIT.create(shotpos+40, 120, 'split');
        pineapple.body.collideWorldBounds = false;
        pineapple.body.gravity.y = 1000;
        pineapple.checkWorldBounds = true;
        pineapple.events.onOutOfBounds.add(splitOut, this);
	}

	game.physics.arcade.collide(PLAYER, SPLIT, collisionHandler, null, this);

	if(CURSORS.left.isDown && !CURSORS.left.repeats){
		if(actualPos > 0){ actualPos-- }
	}
	else if (CURSORS.right.isDown && !CURSORS.right.repeats)
	{
		if(actualPos < 4){ actualPos++ }
	}

	PLAYER.body.position.x = (actualPos*PLAYER.body.width)+20;
}

function collisionHandler (obj1, obj2) {
	LIFE -= 5;
	obj2.body.allowGravity = false;
	obj2.destroy(true);
	console.log(LIFE);
}

function splitOut(split) {
	score++;
	scoreText.text = scoreString + score;
}