
module.exports = function(grunt) {
  grunt.initConfig({
    uglify: {
      dist: {
        options: {
           sourceMap: true,
           banner: ""
        },
        files: {
           'views/js/main.min.js': ['views/js/main.js'],
        }
      }
    },

    cssmin: {
      dist: {
        options: {
          banner: ""
        },
        files: {
          'css/style.min.css': ['css/style.css'],
          'views/css/style.min.css': ['views/css/style.css']
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['uglify', 'cssmin']);

};
