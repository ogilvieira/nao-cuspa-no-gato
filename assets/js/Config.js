var APP = APP || {};

APP.Config = (function(){
	var obj = {}
	
	obj.STATUS = 'INTRO'; //INTRO, PLAY, GAMEOVER
	obj.GAP = 32;
	obj.GAPDEFAULT = 32;
	obj.AF = 0;
	obj.SCORE = 0;
	obj.SCORESTRING = '';
	obj.SCORETEXT = null;
	obj.CURSORS = null;
	
	obj.PLAYER = null;
	obj.GUN = null;
	obj.SPLIT = null;
	obj.actualPos = 2;

	obj.TOP = null;
	obj.FOOTER = null;
	obj.BTN = {
		LEFT: null,
		RIGHT: null
	};

	obj.shotTypes = [
		{ name: 'split', power: 1 },
		{ name: 'split-medium', power: 2 },
		{ name: 'split-big', power: 3 }
	];

	return obj;
}());