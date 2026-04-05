import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_lillycares.com_jpi', ['https://www.lillycares.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
