import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_verrenaasten.nl_nnl', ['https://verrenaasten.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
