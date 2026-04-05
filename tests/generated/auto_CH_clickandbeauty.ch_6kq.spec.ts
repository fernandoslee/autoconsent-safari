import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_clickandbeauty.ch_6kq', ['https://www.clickandbeauty.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
