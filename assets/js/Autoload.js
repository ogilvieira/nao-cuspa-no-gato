var APP = APP || {};

APP.Autoload = (function(Phaser){
  var obj = {};

  obj.init = function(){
    window.GAME = window.GAME || new Phaser.Game( 640, 960, Phaser.AUTO, 'screen', 
    {
      preload: APP.Preload,
      create: APP.Create,
      update: APP.Update,
      render: APP.Render
    });
  };

  return obj;
}(Phaser));