import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vangeldernederland.nl_td3', ['https://www.vangeldernederland.nl/en_US/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
