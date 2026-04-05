import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_golf-alvaneu.ch_zxm', ['https://golf-alvaneu.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
