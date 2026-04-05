import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_vbtmakelaars.nl_blx', ['https://vbtmakelaars.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
