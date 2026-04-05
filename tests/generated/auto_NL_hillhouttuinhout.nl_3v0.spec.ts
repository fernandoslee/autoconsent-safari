import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hillhouttuinhout.nl_3v0', ['https://www.hillhouttuinhout.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
