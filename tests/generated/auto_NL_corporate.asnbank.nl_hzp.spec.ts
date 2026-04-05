import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_corporate.asnbank.nl_hzp', ['https://corporate.asnbank.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
