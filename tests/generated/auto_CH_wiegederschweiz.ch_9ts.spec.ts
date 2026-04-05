import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wiegederschweiz.ch_9ts', ['https://www.wiegederschweiz.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
