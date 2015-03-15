/**
 * Created by Wei-Jye on 3/15/2015.
 */
module.exports = function (grunt) {
    grunt.initConfig({
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        './src/*.html',
                        './src/*.js',
                        '*/src/**/*.html',
                        '*/src/**/*.js'
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
            files: ['./src/*.html'],
            files: ['./src/**/*.html']
        }, // End of bootlint.
        validation: {
            options: {
                reset: grunt.option('reset') || false, // Resets all the validated files status.
                proxy: '', // Setup your proxy when you are behind a corporate proxy and encounters  ETIMEDOUT.
                stoponerror: false,
                relaxerror: [], // Ignores these errors.
                path:  './reports/validation-status.json', // Default file for storing validation information.
                reportpath: './reports/validation-report.json' // Consolidated report in JSON format, if reportpath is  false  it will not generated.
            },
            files: {
                src: ['./src/*.html'],
                src: ['./src/**/*.html']
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