import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_nautadutilh.com_wwj', ['https://www.nautadutilh.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
