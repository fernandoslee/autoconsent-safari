import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_infraroodverwarmingonline.nl_5lc', ['https://infraroodverwarmingonline.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
