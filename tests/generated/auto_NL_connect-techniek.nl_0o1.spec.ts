import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_connect-techniek.nl_0o1', ['https://connect-techniek.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
