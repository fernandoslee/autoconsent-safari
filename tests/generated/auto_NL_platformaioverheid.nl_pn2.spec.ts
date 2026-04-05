import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_platformaioverheid.nl_pn2', ['https://platformaioverheid.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
