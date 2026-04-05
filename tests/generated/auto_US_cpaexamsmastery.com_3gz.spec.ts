import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cpaexamsmastery.com_3gz', ['https://cpaexamsmastery.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
