/**
 * Created by Wei-Jye on 3/15/2015.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        './*.html',
                        './*.js',
                        '*/**/*.html',
                        '*/**/*.js'
                    ]
                },
                options: {
                    server: {
                        baseDir: './src',
                        index: 'index.html'
                    },
                    logPrefix: 'Drag and Drop Project',
                    online: false,
                    port: 3000
                }
            } // End of 'dev'.
        }, // End of browserSync.
        bootlint: {
            options: {
                stoponerror: true,
                stoponwarning: true,
                relaxerror: []
            },
            files: ['./src/*.html']
        }, // End of bootlint.
        validation: {
            options: {
                reset: grunt.option('reset') || false,
                stoponerror: false,
                relaxerror: [] // Ignores these errors.
            },
            files: {
                src: ['./src/*.html']
            }
        } // End of validation.
    });

    // Load npm tasks.
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-bootlint');
    grunt.loadNpmTasks('grunt-html-validation');

    // Define default task.
    grunt.registerTask('default', ['browserSync']);
    grunt.registerTask('bootlint', ['bootlint']);
    grunt.registerTask('html', ['validation']);
};