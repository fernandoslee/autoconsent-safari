import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_blitzhandel24.nl_0tk', ['https://blitzhandel24.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
