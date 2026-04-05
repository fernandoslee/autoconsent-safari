import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_lancia.nl_298', ['https://www.lancia.nl/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
