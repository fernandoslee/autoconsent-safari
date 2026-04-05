import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fdp-zh.ch_n7n', ['https://www.fdp-zh.ch/willkommen'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
