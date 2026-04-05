import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_deurbeslagdirect.nl_zik', ['https://www.deurbeslagdirect.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
