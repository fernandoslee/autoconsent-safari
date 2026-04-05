import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vitalboekhouders.nl_gx9', ['https://www.vitalboekhouders.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
