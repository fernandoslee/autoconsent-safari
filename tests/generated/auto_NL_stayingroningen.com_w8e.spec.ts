import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_stayingroningen.com_w8e', ['https://stayingroningen.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
