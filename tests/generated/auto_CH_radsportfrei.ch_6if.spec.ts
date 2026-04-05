import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_radsportfrei.ch_6if', ['https://www.radsportfrei.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
