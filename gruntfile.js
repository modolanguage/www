module.exports = function (grunt) {
	grunt.initConfig({

		sass: {
			dist: {
				files: {
					'assets/css/style.css': 'assets/sass/style.scss'
				},
				options: { style: 'expanded' }
			}
		},
		connect: {
			server: {
				options: {
					port: 3000,
					base: '.',
					livereload: true
				}
			}
		},
		watch: {
			css: {
				files: ['assets/sass/style.scss','index.html', 'assets/js/main.js', 'documentation.html'],
				tasks: ['sass']
			},
			options: {
				livereload: true,
				// interval: 1000
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.registerTask('default', ['connect', 'watch']);
}