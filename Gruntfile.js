/*
 After you have changed any settings for the responsive_images task,
 run this with one of these options:
  "grunt" alone creates a new, completed images directory
  "grunt clean" removes the images directory
  "grunt responsive_images" re-processes images without removing the old ones
*/

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

  //grunt.loadNpmTasks('grunt-responsive-images');
  /*grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mkdir');*/
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', [/*'clean', 'mkdir', 'copy', 'responsive_images'*/'uglify', 'cssmin']);

};
