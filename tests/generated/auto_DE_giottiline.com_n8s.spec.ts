import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_giottiline.com_n8s', ['https://www.giottiline.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
