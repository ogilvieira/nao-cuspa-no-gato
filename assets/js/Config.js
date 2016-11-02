var APP = APP || {};

APP.Config = (function(){
	var obj = {}
	
	obj.GAP = 30;
	obj.SCORE = 0;
	obj.SCORESTRING = '';
	obj.SCORETEXT = '';
	obj.CURSORS = null;
	
	obj.PLAYER = null;
	obj.GUN = null;
	obj.SPLIT = null;
	obj.actualPost = 0;

	obj.TOP = null;
	obj.FOOTER = null;
	obj.BTN = {
		LEFT: null,
		RIGHT: null
	};

	obj.shotTypes = [
		{ name: 'split', power: 1 },
		{ name: 'split-medium', power: 2 },
		{ name: 'split-big', power: 3 },
		{ name: 'split-fruit', power: 2 }
	];

	return obj;
}());