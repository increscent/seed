module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
    watch: {
      html: {
        files: ['app/**']
      },
      js: {
        files: ['app/**/*.js', '!app/scripts/main.js'],
        tasks: 'concat'
      },
      less: {
        files: ['app/**/*.less'],
        tasks: ['concat', 'less']
      },
      options: {
        livereload: 1337
      }
    },

    less: {
      all: {
        src: 'app/styles/main.less',
        dest: 'app/styles/main.css'
      }
    },

    concat: {
      options: {
        separator: '\n'
      },
      js: {
        src: ['app/scripts/**/*.js', 'app/pages/**/*.js', '!app/scripts/main.js'],
        dest: 'app/scripts/main.js'
      },
      less: {
        src: ['app/styles/main.less', 'app/pages/**/*.less'],
        dest: 'app/styles/concat.less'
      }
    }

  });
  
  grunt.registerTask('default', [
    'build',
    'watch'
  ]);
  grunt.registerTask('build', [
    'concat',
    'less'
  ]);
};
