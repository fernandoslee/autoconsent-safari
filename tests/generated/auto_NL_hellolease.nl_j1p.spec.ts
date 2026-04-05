import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hellolease.nl_j1p', ['https://www.hellolease.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
