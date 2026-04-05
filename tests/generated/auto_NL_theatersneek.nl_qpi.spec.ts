import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_theatersneek.nl_qpi', ['https://theatersneek.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
