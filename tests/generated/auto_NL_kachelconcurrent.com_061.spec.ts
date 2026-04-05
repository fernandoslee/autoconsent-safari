import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kachelconcurrent.com_061', ['https://www.kachelconcurrent.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
