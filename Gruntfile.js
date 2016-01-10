module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Lint definitions
    jscs: {
      main: "word-and-character-counter.js",
      options: {
        config: ".jscsrc"
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'jquery.word-and-character-counter.min.js': [ 'word-and-character-counter.js' ]
        }
      }
    },
  });

  grunt.loadNpmTasks("grunt-jscs");
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jscs', 'uglify']);
};
