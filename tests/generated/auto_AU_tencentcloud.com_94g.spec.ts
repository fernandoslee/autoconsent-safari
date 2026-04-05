import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tencentcloud.com_94g', ['https://www.tencentcloud.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
