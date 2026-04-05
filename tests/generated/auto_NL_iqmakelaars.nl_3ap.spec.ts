import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_iqmakelaars.nl_3ap', ['https://www.iqmakelaars.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
