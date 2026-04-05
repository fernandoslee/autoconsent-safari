import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_hetbosroept.nl_pe9', ['https://www.hetbosroept.nl/nl/home/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
