import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dudokpatisserie.nl_nrm', ['https://www.dudokpatisserie.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
