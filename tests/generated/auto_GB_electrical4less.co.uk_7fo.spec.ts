import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_electrical4less.co.uk_7fo', ['https://www.electrical4less.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
