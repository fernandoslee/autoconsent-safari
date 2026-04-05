import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_founderscard.com_gsx', ['https://founderscard.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
