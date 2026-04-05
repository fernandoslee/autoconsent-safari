import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_tuscasasrurales.com_gsd', ['https://www.tuscasasrurales.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
