import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_colorimeter.com_rmj', ['https://colorimeter.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
