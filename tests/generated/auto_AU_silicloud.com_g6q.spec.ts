import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_silicloud.com_g6q', ['https://www.silicloud.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
