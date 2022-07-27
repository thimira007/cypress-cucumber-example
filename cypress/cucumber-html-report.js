const report = require('multiple-cucumber-html-reporter');
report.generate({
    jsonDir: 'cypress/cucumber-json',  // ** Path of .json file **//
    reportPath: './cypress/reports/cucumber-htmlreport.html',
    metadata: {
        // browser: {
        //     name: 'chrome',
        //     version: '81',
        // },
        // device: 'Local test machine',
        environment: 'STAGE',
        platform: {
            name: '',
            version: '',
        },
    },
});

// const reporter = require('cucumber-html-reporter');

// const options = {
//     theme: 'hierarchy',
//     jsonDir: 'cypress/cucumber-json',
//     output: 'reports/html_simple/cucumber_report.html',
//     reportSuiteAsScenarios: true,
//     scenarioTimestamp: true,
//     launchReport: true,
//     ignoreBadJsonFile: true,
//     metadata: {
//         "App Version": "1.0.0",
//         "Test Environment": "STAGING",
//         "Browser": "Chrome  54.0.2840.98",
//         "Platform": "Windows 10",
//         "Parallel": "Scenarios",
//         "Executed": "Remote"
//     }
// };

// reporter.generate(options);