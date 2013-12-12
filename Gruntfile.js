module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    watch: {
      css: {
        files: ['sass/*.sass'],
        tasks: ['sass', 'autoprefixer'],
        options: {
            spawn: false,
        }
      }
    },
    sass: {
      dist: {
        options: {
            style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'sass',
          src: ['*.sass'],
          dest: 'stylesheets',
          ext: '.css'
        }]
      } 
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'ie 8']
      },
      files: {
        src: 'stylesheets/*.css'
      }
    }

  });

  // Load plugins used by this task gruntfile
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // Task definitions
  grunt.registerTask('build', ['sass', 'autoprefixer']);
  grunt.registerTask('default', ['build']);
};