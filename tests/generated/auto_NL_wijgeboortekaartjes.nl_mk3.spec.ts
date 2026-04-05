import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_wijgeboortekaartjes.nl_mk3', ['https://wijgeboortekaartjes.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
