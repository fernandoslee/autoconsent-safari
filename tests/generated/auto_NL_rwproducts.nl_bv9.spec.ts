import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_rwproducts.nl_bv9', ['https://www.rwproducts.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
