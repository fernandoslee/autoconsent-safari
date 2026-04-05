import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ecco-verde.com_idf', ['https://www.ecco-verde.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
