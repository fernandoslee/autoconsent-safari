import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_carneywatch.ca_18f', ['https://www.carneywatch.ca/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
