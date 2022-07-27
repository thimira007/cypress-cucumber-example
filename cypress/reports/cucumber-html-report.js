const report = require('multiple-cucumber-html-reporter');
report.generate({
    jsonDir: './cypress/cucumber-json',  // ** Path of .json file **//
    reportPath: './cypress/html-report',
    metadata: {
        environment: 'STAGE',
        platform: {
            name: '',
            version: '',
        },
    },
});
