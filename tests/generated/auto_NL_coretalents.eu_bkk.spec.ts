import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_coretalents.eu_bkk', ['https://www.coretalents.eu/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
