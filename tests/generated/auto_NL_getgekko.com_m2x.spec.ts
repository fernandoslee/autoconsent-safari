import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_getgekko.com_m2x', ['https://www.getgekko.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
