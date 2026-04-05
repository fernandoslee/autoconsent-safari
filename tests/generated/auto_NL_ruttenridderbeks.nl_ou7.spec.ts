import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ruttenridderbeks.nl_ou7', ['https://www.ruttenridderbeks.nl/nl'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
