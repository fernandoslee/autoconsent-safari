import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_baalderborg.nl_ub2', ['https://www.baalderborg.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
