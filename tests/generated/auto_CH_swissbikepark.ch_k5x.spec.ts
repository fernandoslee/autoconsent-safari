import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_swissbikepark.ch_k5x', ['https://www.swissbikepark.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
