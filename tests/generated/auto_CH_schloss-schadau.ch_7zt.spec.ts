import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_schloss-schadau.ch_7zt', ['https://www.schloss-schadau.ch/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
