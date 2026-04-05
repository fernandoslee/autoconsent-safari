import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vanherwerden.nl_n2y', ['https://www.vanherwerden.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
