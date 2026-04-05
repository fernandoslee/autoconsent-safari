import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mpmhengelo.nl_tfi', ['https://www.mpmhengelo.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
