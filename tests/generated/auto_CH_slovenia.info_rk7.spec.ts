import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_slovenia.info_rk7', ['https://www.slovenia.info/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
