import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_sbcountyatc.gov_f53', ['https://www.sbcountyatc.gov/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['US'],
});
