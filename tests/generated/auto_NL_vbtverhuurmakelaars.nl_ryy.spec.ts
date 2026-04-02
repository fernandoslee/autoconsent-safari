import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vbtverhuurmakelaars.nl_ryy', ['https://vbtverhuurmakelaars.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
