import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wetter-shop.ch_1ea', ['https://www.wetter-shop.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
