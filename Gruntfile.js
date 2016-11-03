module.exports = function(grunt) {

  var javascript = [
    'bower_components/phaser/build/phaser.js',
    'assets/js/Config.js',
    'assets/js/Autoload.js',
    'assets/js/Gameplay.js',
    'assets/js/Preload.js',
    'assets/js/Create.js',
    'assets/js/Update.js',
    'assets/js/app.js'
  ];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*===================================================== \n'
                +'= <%= pkg.siteName %> \n'
                +'= by <%= pkg.author %> \n'
                +'= [LAST BUILD: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>] \n'
                +'=====================================================*/\n'
      },
      build: {
        src: javascript,
        dest: 'assets/js/app.min.js'
      },
    },
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'assets/img/',
          src: ['**/*.{png,jpg,gif}'],
          dest: "assets/img/"
        }]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['uglify','imagemin']);
};
