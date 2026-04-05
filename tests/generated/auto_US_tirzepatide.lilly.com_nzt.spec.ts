import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_tirzepatide.lilly.com_nzt', ['https://tirzepatide.lilly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
