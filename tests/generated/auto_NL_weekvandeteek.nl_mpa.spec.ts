import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_weekvandeteek.nl_mpa', ['https://www.weekvandeteek.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
